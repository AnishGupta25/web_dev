const cheerio = require("cheerio");
const request = require("request");

let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(matchlink , function(error , response , data){
    processdata(data);
});

function processdata(data){
    let myDocument = cheerio.load(data);
    let atag = myDocument(".widget-items.cta-link a");
    console.log(atag.attr("href"));
    let fixtureandresultlink = "https://www.espncricinfo.com" + atag.attr("href");
    console.log( fixtureandresultlink );
    // let allmatchesresultlink = cheerio.load(fixtureandresultlink).text();
    // console.log(allmatchesresultlink);
}