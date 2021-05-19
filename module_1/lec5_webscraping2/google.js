let link = "https://www.google.com";

const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

// request(link , function(error ,response , data){
//     fs.writeFileSync("./googlehtml.html" , data);
//     // getedata(data ,link);
// });
let html = fs.readFileSync("./googlehtml.html", "utf8");
function getedata(html , link){
    let myDocument = cheerio.load(html);
    let imagesrc = myDocument("div>a.gb_g").text();
    let compsrc =  imagesrc;
    console.log(compsrc);
}
getedata(html , link);