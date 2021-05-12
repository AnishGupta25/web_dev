const fs = require("fs");
const { getfiles, scommands, bcommands , ncommands } = require("./util");

let contents = process.argv.slice(2);
console.log(contents);

let flags = [];
let files = [];

for(let i = 0; i < contents.length; i++){
    if(contents[i].startsWith("-")){
        flags.push(contents[i]);
    }
    else{
        files.push(contents[i]);
    }
}

let filesData = getfiles(files);

if(flags.includes("-s")){
    filesData = scommands(filesData);
}

if(flags.includes("-u") && flags.includes("-n")){
    if(flags.indexOf("-u") > flags.indexOf("-n")){
        filesData = bcommands(filesData);
    }
    else{
        filesData = ncommands(filesData);
    }
}
else if(flags.includes("-u")){
    filesData = ncommands(filesData);
}
else if(flags.includes("-n")){
    filesData = bcommands(filesData);
}

console.log(filesData);