var request = require('request');
var jsdom = require('jsdom');
module.exports = function(app) {
        
  var item
  var title, link
  var url = 'http://www.magnaownersoftexas.com/forums/index.php/board,1';
  var i = 0;
  var self = this;

  var get_items = function(items, count, callback){
    if(i===0) i=count-2;
    
    jsdom.env({
    html:     'http://www.magnaownersoftexas.com/forums/index.php/board,1.'+i+'0.html',
    scripts:  ['http://code.jquery.com/jquery-1.6.min.js'],
    done:     function(err, window){
          var $ = window.jQuery;
          $("tr > td.windowbg:nth-child(3)").each(function(){
            item = {};
            title = $.trim($(this).find('span').text().replace(/\"/g,'\''));
            link = $(this).find('a').attr('href')
            item.title = title;
            item.link = link;

            items.push(item);
          })
            i=i+2;
          if(i<count) {            
            get_items(items, count, callback);
          } else {
            i=0;
            callback(items);
          }
        }
    });
  };
  return get_items
};
