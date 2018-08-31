const express = require('express');
const router  = express.Router();
const Celeb         = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/maps', (req, res, next) => {
  res.render('maps');
});

module.exports = router;
