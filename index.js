const express = require("express");
const ejs = require("ejs");
//const http = require('http');
//const path = require('path');
//const fs = require('fs');


//create express app
const app = express();

//Initialize Body Parser Middleware to parse data sent by users
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Initialize EJS Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//Begin Server Logic
app.get('/', (req, res) => {
    res.render('index');
});

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server Started on Port No. ${PORT}`)});