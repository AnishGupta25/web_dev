const fs = require("fs");

function getfiles(files){
    let filedata = "";
    for(let i = 0; i < files.length; i++){
        if(!fs.existsSync(files[i])){
            return "One or More than One file doesn't exist";
        }
        if(i == files.length - 1){
            filedata += fs.readFileSync(files[i]);
        }
        else{
            filedata += fs.readFileSync(files[i]) + "\r\n";
        }
    }
    return filedata
}

function scommands(data){
    let flag = false;
    let removedspaces = [];
    let spliteddata = data.split("\r\n");

    for(let i = 0; i < spliteddata.length; i++){
        if(spliteddata[i] == "" && flag == false){
            removedspaces.push(spliteddata[i]);
            flag = true;
        }
        else if(spliteddata[i] != ""){
            removedspaces.push(spliteddata[i]);
            if(i < spliteddata.length - 2){
                flag = false;
            }
        }
    }

    let restultstr = removedspaces.join("\r\n");
    return restultstr;
}
// console.log(scommand(file1));

function bcommands(data){
    let spliteddata = data.split("\r\n");
    let count = 1;
    // console.log(spliteddata);
    for(let i = 0; i < spliteddata.length; i++){
        if(spliteddata[i] != ''){
            spliteddata[i] = `${count}. ${spliteddata[i]}`;
            // spliteddata = count +". "+ spliteddata[i]; 
            count++;
        }
    }
    let restultstr = spliteddata.join("\r\n");
    return restultstr;
}
// console.log(bcommands(file1));

function ncommands(data){
    let spliteddata = data.split("\r\n");
    let count = 1;
    for(let i = 0; i < spliteddata.length; i++){
        spliteddata[i] = `${count}. ${spliteddata[i]}`
        count++;
    }
    let restultstr = spliteddata.join("\r\n");
    return restultstr;
}

// console.log(ucommands(file1));

module.exports = {
    getfiles,
    scommands,
    bcommands,
    ncommands
}