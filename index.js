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

app.post('/questions/', (req, res) => {
    let score = 0;
    
    let data1 = req.body.answer1;
    let trivia1 = 'B';
    if (data1 == trivia1)
    {
        score++;
        // res.send(`Great Job!`);
    }
    else
    {
        // res.send(`Better Luck Next Time`);
    }
    //*************************************************************************
    let data2 = req.body.answer2;
    let trivia2 = 'C';
    if (data2 == trivia2)
    {
        score++;
        // res.send(`Great Job!`);
    }
    else
    {
        // res.send(`Better Luck Next Time`);
    }
    //*************************************************************************/
    let data3 = req.body.answer3;
    let trivia3 = 'D';
    if (data3 == trivia3)
    {
        score++;
        // res.send(`Great Job!`);
    }
    else
    {
        // res.send(`Better Luck Next Time`);
    }
    //************************************************************************** */
    let data4 = req.body.answer4;
    let trivia4 = 'A';
    if (data4 == trivia4)
    {
        score++;
        // res.send(`Great Job!`);
    }
    else
    {
        // res.send(`Better Luck Next Time`);
    }
    //****************************************************************************** */
    let data5 = req.body.answer5;
    let trivia5 = 'C';
    if (data5 == trivia5)
    {
        score++;
        // res.send(`Great Job!`);
    }
    else
    {
        // res.send(`Better Luck Next Time`);
    }
    // res.send(data);
    // res.send(data1);
    // res.send(`${data}`);
    console.log(score);
});
//********************************************************** */
// app.get('/score/', (req, res) => {
//     res.render("trivia", { score: finalScore });
// });
//************************************************************* */
// app.post('/trivia/questions', (req, res) => {
//     let score = 0;
//     let idk = document.querySelector('#question1');
//     console.log(idk);
//     let ans1 = 'B';
//     let data = { answer: req.body.answer1 };
//     if(data === ans1)
//     {
//         score++;
//         res.send('Correct!');
//         console.log(`${score}`);
//     }
//     else
//     {
//         res.send('Better Luck Next Time');
//     }
//     // let ans2 = 'C';
//     // let data = { answer: req.body.answer2 };

//     // let ans3 = 'D';
//     // let data = { answer: req.body.answer3 };

//     // let ans4 = 'A';
//     // let data = { answer: req.body.answer4 };

//     // let ans5 = 'C';
//     // let data = { answer: req.body.answer5 };
    
//     let finalScore = document.querySelector('#score');
//     finalScore.addEventListener('click', buttonClicked);
//     function buttonClicked()
//     {
//         res.send(`Your Score: ${score}`);
//     }
// });



// app.post('/trivia/url', (req, res) => {
//     let score = 0;
//     let answer5 = 'C';
//     let user = `${req.body.input}`;
//     if(user === answer5){
//         score++;
//         res.send("Correct!");
//     }
//     else{
//         res.send("Better Luck Next Time");
//     }

// });

// app.post('/trivia/score', (req, res) => {
//     let finalScore = document.querySelector('#score');
//     finalScore.addEventListener('click', buttonClicked);
//     function buttonClicked()
//     {
//         res.send(score);
//     }

// })
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