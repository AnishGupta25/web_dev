const express = require('express');
const app = express();

let port = '8080'
app.listen(port , function(){
    console.log('Server is listening on port 8080');
});
app.use(express.json());
let user ={};

app.get('/' , (req, res) => {
    // console.log('<h1>Null</h1>');
    res.send('Home page');
})

app.get('/home' , (req, res) => {
    // console.log('<h1>Home</h1>');
    res.json(user);
})

app.post('/home' , (req,res) => {
    user = req.body;
    console.log(user);
    res.send("data has been added and updated")
})

app.patch('/home',(req , res) => {
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.json(user);
});

app.delete('/home',(req , res) => {
    user = {"hello" : "hell0"};
    res.json(user);
})

app.get('/home/:id' , (req, res) => {
    // console.log('<h1>Home</h1>');
    res.json(req.params);
})
