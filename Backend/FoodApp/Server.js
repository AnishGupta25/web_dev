const express = require('express');
const app = express();

let port = '8080'
app.listen(port , function(){
    console.log('Server is listening on port 8080');
});

app.get('/' , (req, res) => {
    // console.log('<h1>Null</h1>');
    res.send('<h>Hello</h>');
})

app.get('/home' , (req, res) => {
    // console.log('<h1>Home</h1>');
    res.send('<h>Home</h>');
})