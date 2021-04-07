

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dresses', { title: 'Search Results dress' });
});

module.exports = router;
