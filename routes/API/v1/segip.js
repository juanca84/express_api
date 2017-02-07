var express = require('express');
var request = require('request');
var router = express.Router();
var config = require('config.json')('./config.json');

/* GET listado de usuarios. */
router.get('/', function(req, res, next) {
  var options = {
    url: config.urlSegipWS +  '/v2/personas/' + req.query['id'],
    headers: {
      'Authorization': 'Bearer ' + config.token
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set('Content-Type', 'application/json');
      console.log(body)
      res.send({respuesta: JSON.parse(body)});
    }
  })
});

module.exports = router;
