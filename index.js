const express = require("express");
const ejs = require("ejs");

//create express app
const app = new express();

//Initialize Body Parser Middleware to parse data sent by users
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize EJS Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//Begin Server Logic
//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/resume", (req, res) => {
    res.render("./html/resume");
});

app.get('/funFacts', (req, res) => {
    res.render('./html/funFacts');
});

app.get('/trivia', (req, res) => {
    res.render('./html/trivia');
});

app.post('/url', (req, res) => {
    let score = 0;
    let data1 = req.body.answer1;
    let trivia1 = 'B';
    if (data1 == trivia1)
    {
        score++;
    }
    else
    {
   
    }
    //*************************************************************************
    let data2 = req.body.answer2;
    let trivia2 = 'C';
    if (data2 == trivia2)
    {
        score++;
    }
    else
    {

    }
    //*************************************************************************/
    let data3 = req.body.answer3;
    let trivia3 = 'D';
    if (data3 == trivia3)
    {
        score++;
    }
    else
    {
  
    }
    //************************************************************************** */
    let data4 = req.body.answer4;
    let trivia4 = 'A';
    if (data4 == trivia4)
    {
        score++;
    }
    else
    {
    
    }
    //****************************************************************************** */
    let data5 = req.body.answer5;
    let trivia5 = 'C';
    if (data5 == trivia5)
    {
        score++;
    }
    else
    {

    }
    console.log(score);
    res.send({score: score});
});

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server Started on Port No. ${PORT}`)});