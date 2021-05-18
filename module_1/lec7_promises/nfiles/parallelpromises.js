const fs = require("fs");

let files = ["./f1.txt" , "./f2.txt" , "./f3.txt"];

for(let i = 0; i < files.length; i++){
    let promises = fs.promises.readFile(files[i] , "utf8");
    promises.then( function(data){
        console.log(data+"");
    } );
}