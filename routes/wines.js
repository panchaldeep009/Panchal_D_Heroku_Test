var express = require('express');
var router = express.Router()

var { all_wine } = require('../data/data');


router.get('/:wine_id', function(req, res, next) {
  const thisWine = all_wine.find(wine => wine.id === req.params.wine_id);
  res.render('wine', { title: thisWine.name, ...thisWine });
});


module.exports = router;