/*
File Name:app.js
Author Name: Janvi Sutariya
Student Id: 301171524
Web App Name: COMP229007-F2021-MidTerm-301171524
*/
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);