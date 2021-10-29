/*
File Name:app.js
Author Name: Janvi Sutariya
Student Id: 301171524
Web App Name: COMP229007-F2021-MidTerm-301171524
*/
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
