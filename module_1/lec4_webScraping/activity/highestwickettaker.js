const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(matchlink , function(error ,response, data){
    // console.log(data);
    // fs.writeFileSync("./match.html",data);
    gethighestwickets(data);
});

function gethighestwickets(data){
    let myDocument = cheerio.load(data);
    // console.log(myDocument);
    let battingtables = myDocument(".table.batsman");
    // console.log(battingtable.length);
    // fs.writeFileSync("./batting.html" , battingtable + "");

    let highestrunmakername ;
    let highestruns;
    let strikerate;
    let highestsixes;

    for(let i = 0; i < battingtables.length; i++){
        let battingtable = myDocument(battingtables[i]);
        let alltablerows = battingtable.find("tbody tr");

        for(let j = 0; j < alltablerows.length; j++){
            let alltds = myDocument(alltablerows[j]).find("td");

            if(i == 0 && j == 0){
                highestruns = myDocument(alltds[2]).text();
                highestrunmakername = myDocument(alltds[0]).text();
                strikerate = myDocument(alltds[7]).text();
                highestsixes = myDocument(alltds[6]).text();
                // console.log(highestsixes);
                // console.log(highestrunmakername);
                // console.log( highestsixes);
            }
            else{
                let currentruns = myDocument(alltds[2]).text();
                let currentsixes = myDocument(alltds[6]).text();
                // let currentrummakername = myDocument(alltds[0]).find("a").text();
                let currentstrikerate = myDocument(alltds[7]).text();
                if(currentsixes > highestsixes || (currentsixes == highestsixes && currentstrikerate > strikerate)){
                    highestrunmakername = myDocument(alltds[0]).text();
                    highestruns = currentruns;
                    highestsixes = currentsixes;
                    strikerate = currentstrikerate;
                }
            }
        }
    }
    console.table(highestrunmakername);
    // console.log(highestruns);
    console.table(highestsixes);
    console.table( strikerate);
}