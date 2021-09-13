const express = require('express');
const app = express();

let port = '8080'
app.listen(port , function(){
    console.log('Server is listening');
});
app.get('/',(req, res) => {
    // console.log(req.hostname);
    // console.log(req.path);
    res.send('<h>Hello</h>');

});
let obj = {
    'name': "Anish"
}
app.get('/user',(req, res) => {
    // console.log(req.hostname);
    // console.log(req.path);
    res.json(obj.name);

});

app.get('/home',(req, res) => {
    // console.log(req.hostname);
    // console.log(req.path);
    res.sendFile('./' , {root :__dirname});

});