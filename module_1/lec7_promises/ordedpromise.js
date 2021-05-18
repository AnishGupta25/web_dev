const fs = require("fs");

// let f1promise = fs.promises.readFile("./f1.txt" , "utf8");
// let f2promise = fs.promises.readFile("./f1.txt" , "utf8");
// let f3promise = fs.promises.readFile("./f1.txt" , "utf8");



// f1promise.then( function(data){
//     console.log(data+"");
// } );
/*
    PROMISE HELL

let f1promise = fs.promises.readFile("./f1.txt" , "utf8");
f1promise.then( function(data){
    console.log(data+"");
    let f2promise = fs.promises.readFile("./f1.txt" , "utf8");
    f2promise.then( function(data){
        onsole.log(data+"");
        let f3promise = fs.promises.readFile("./f1.txt" , "utf8");
        f3promise.then( function(data){
            console.log(data+"");
        } );
    } );
} );

*/


let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(f1KaData){
    console.log(f1KaData+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(f2KaData){
    console.log(f2KaData+"");
    let f3KaPromise = fs.promises.readFile("./f3.txt");
    return f3KaPromise;
})
.then(function(f3KaData){
    console.log(f3KaData+"");
})
