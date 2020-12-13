var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /Available flights' });
});

router.get('/Available flights', function(req, res, next) {
                res.send("Availablefights :<br/>Flight 1: 0170 - Chennai to Bangloore <br/>Flight 2: 2337 - Delhi to Vijayawada <br/>Flight 3: 9908 - Hyderabad to Mumbai <br/>Flight 4: 2089 - Vizag to Hyderabad");

});

module.exports = router;
