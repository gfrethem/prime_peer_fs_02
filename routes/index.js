var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var jsonquery = require('json-query');

var fileLocation = path.join(__dirname, '../models/cutestuff.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/cute/:id?', function(request, response, next) {
  var id = request.params.id;
  fs.readFile(fileLocation, function(err, data) {
    var obj = JSON.parse(data);
    console.log("THIS IS PARSED DATA LENGTH: "+ obj.length);
    var query = getQuery('id', id);
    if (id) {
      var cute = jsonquery(query, {data: obj});
      console.log("HEY GUYS LOOK AT ME" + cute);
      response.json(cute.value);
    } else {
      response.json(obj);
      console.log("returning object");
    }
  })
});


function getQuery(key, value) {
  var queryString = '[' + key + '=' + value + ']';
  return queryString;
}

module.exports = router;
