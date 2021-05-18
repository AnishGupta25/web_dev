let link = "https://www.google.com";

const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

// request(link , function(error ,response , data){
//     fs.writeFileSync("./googlehtml.html" , data);
//     getedata(data);
// });
let html = fs.readFileSync("./googlehtml.html", "utf8");
function getedata(html , link){
    let myDocument = cheerio.load(html);
    let imagesrc = myDocument("img").attr('src');
    let compsrc = link + imagesrc;
    console.log(compsrc);
}
getedata(html , link);