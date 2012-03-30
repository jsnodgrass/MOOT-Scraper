// var Layout = function(items) {
$(function(){
  var count = 2;
  var stop = 10
  get_links(count, stop);

  $("button").click(function(){
    count = stop + 2;
    stop = stop + 10;
    get_links(count, stop);
  })


})
// }

var get_links = function(count, stop) {
  $.ajax({
    url:"/links/"+count,
    type:'get',
    success:function(links) {
      var items = links.data;
      var data;
      data = '<div>Page #'+count/2+'</div><ul>';
      for(var i=0;i<items.length;i++) {
        data += '<li><a target="_blank" href="'+items[i].link+'">'+items[i].title+'</a>';
      }
      data += '</ul>';
      $("#main_content").append(data);
      if(count<stop) {
        count=count+2;
        get_links(count, stop);
      } else {
        count = 2;
      }
    }
  })
}

