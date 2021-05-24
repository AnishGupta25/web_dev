const fs = require("fs");

function myPromise(path){
    return new Promise(function(scb , fcb){
        fs.readFile(path , function(error , data){
            if(error){
                fcb(error);
            }
            if(data){
                scb(data);
            }
        })
    })
}

let pendingPromise = myPromise("./f1.txt");

pendingPromise.then( function(data){
    console.log(data+"");
} );

pendingPromise.catch( function(error){
    console.log(error);
});