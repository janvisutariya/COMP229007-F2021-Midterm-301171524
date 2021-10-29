/*
File Name:app.js
Author Name: Janvi Sutariya
Student Id: 301171524
Web App Name: COMP229007-F2021-MidTerm-301171524
*/
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};

