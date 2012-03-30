var request = require('request');
var jsdom = require('jsdom');
module.exports = function(app) {
  return {
    
    // Landing
    
    index: [
      function(req, res, next) {
        res.render('home/index');
      }
    ],

    show: [
      function(req, res, next) {
        var items = new Array();
        var count = req.params.count;
        var stuff = app.models.get_items(items, count, function(stuff) {

          res.send({data:stuff});
        });        
      }
    ]

  };
};
