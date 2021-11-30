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
//app.set('views', path.join(__dirname, 'views')); //maybe don't use
//app.set('views', path.join(__dirname, '/public')); //maybe don't use

//Begin Server Logic
//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/resume", (req, res) => {
    res.render("./html/resume");
});

app.get('/funFacts', (req, res) => {
    res.render('./html/funfacts');
});

app.get('/trivia', (req, res) => {
    res.render('./html/trivia');
});

// let score = 0;

// app.post("/trivia", (req, res) => {
//     let data = {answer: req.body.trivia1};
//     let correct1 = 'B';
//     if(trivia1 === correct1)
//     {
//         score++;
//         res.send(`Correct!`);
//     }
//     else
//     {
//         res.send(`Unfortunately, that is incorrect.`);
//     }
// });
// app.post("/trivia", (req, res) => {
//     let data = {answer: req.body.trivia2};
//     let correct2 = 'C';
//     if(trivia2 === correct2)
//     {
//         score++;
//         res.send(`Correct!`);
//     }
//     else
//     {
//         res.send(`Unfortunately, that is incorrect.`);
//     }
// });
// app.post("/trivia", (req, res) => {
//     let data = {answer: req.body.trivia3};
//     let correct3 = 'D';
//     if(trivia3 === correct3)
//     {
//         score++;
//         res.send(`Correct!`);
//     }
//     else
//     {
//         res.send(`Unfortunately, that is incorrect.`);
//     }
// });
// app.post("/trivia", (req, res) => {
//     let data = {answer: req.body.trivia4};
//     let correct4 = 'A';
//     if(trivia4 === correct4)
//     {
//         score++;
//         res.send(`Correct!`);
//     }
//     else
//     {
//         res.send(`Unfortunately, that is incorrect.`);
//     }
// });
// app.post("/trivia", (req, res) => {
//     let data = {answer: req.body.trivia5};
//     let correct5 = 'C';
//     if(trivia5 === correct5)
//     {
//         score++;
//         res.send(`Correct!`);
//     }
//     else
//     {
//         res.send(`Unfortunately, that is incorrect.`);
//     }
// });

// app.post("/trivia", (req, res) => {
//     res.send(score);
// });

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server Started on Port No. ${PORT}`)});