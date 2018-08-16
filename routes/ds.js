var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/main/dataStructures', {});
});

router.get('/queue', function(req, res, next) {
  res.render('pages/elementaryDS/queue', {});
});

router.get('/stack', function(req, res, next) {
  res.render('pages/elementaryDS/stack', {});
});

router.get('/linkedList', function(req, res, next) {
  let mode = req.query;
  res.render('pages/elementaryDS/linkedList', {mode: mode});
});

module.exports = router;