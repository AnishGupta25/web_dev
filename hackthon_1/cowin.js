const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const fs = require("fs");
const request = require("request");
const state = "Delhi";
const district = "Central Delhi";
const link = "https://www.cowin.gov.in/home";

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      })
    
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto(link);
    await tab.click("#mat-tab-label-0-2");
    await tab.click("#mat-select-value-1");
    // let allstatesspan = await tab.$x('//span[@class="mat-option-text"]');
    // let states = await tab.evaluate(function(elem){return elem.text()} , allstatesspan);
    // let states  = await tab.$eval('span.mat-option-text' , element => element.textContent);
    // await states.click();
    await tab.type("#mat-select-value-1" , state);
    await tab.waitForTimeout(500);
    await tab.click("#mat-option-9");
    await tab.click("#mat-select-2");
    await tab.waitForTimeout(500);
    await tab.type("div#mat-select-value-3", district);
    // await tab.click("#mat-option-37");
    await tab.waitForTimeout(500);
    await tab.click("button.pin-search-btn.district-search");
    await tab.waitForTimeout(1000);
    await tab.click('label[for="flexRadioDefault2"]');
    await tab.waitForTimeout(2000);
    request(l , function(error ,response, data){
      fs.writeFile("./data.html" , data);
    });
    // let data = myDocument(".col-sm-12.col-md-12.col-lg-12");
    // console.log(myDocument);
    


})();