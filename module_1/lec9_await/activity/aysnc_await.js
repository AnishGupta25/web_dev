const puppeteer = require("puppeteer");
const id = "raspberrypicam8@gmail.com";
const pw = "123456789";
let challenges = require("./challenges");

(async function(){
  let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    })
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector(".dropdown.profile-menu.theme-m-content");
    await tab.waitForTimeout(2000);
    await tab.click(".dropdown.profile-menu.theme-m-content");
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li" , {visible:true});
    let bothli = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    let reqli = bothli[1];
    await reqli.click();
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right" , {visible:true});
    // await tab.click(".btn.btn-green.backbone.pull-right");
    let createChallengeElement = await tab.$('.btn.btn-green.backbone.pull-right');
    let createChallengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href"); }   ,  createChallengeElement);
    let ChallengeLink = "https://www.hackerrank.com" + createChallengeLink;
    
    for(let i=0 ; i<challenges.length ; i++){
      await addChallenges(browser , ChallengeLink , challenges[i]);
  }
})();

async function addChallenges(browser , createChallengeLink , challenge){
  let newTab = await browser.newPage();
  await newTab.goto(createChallengeLink);
  
  let challengeName = challenge["Challenge Name"];
  let description = challenge["Description"];
  let problemStatement = challenge["Problem Statement"];
  let inputFormat = challenge["Input Format"];
  let constraints = challenge["Constraints"];
  let outputFormat = challenge["Output Format"];
  let tags = challenge["Tags"];

  await newTab.waitForTimeout(2000);
  await newTab.type("#name" , challengeName);
  await newTab.type("#preview" , description);
  await newTab.type('#problem_statement-container .CodeMirror textarea' , problemStatement);
  await newTab.type('#input_format-container .CodeMirror textarea' , inputFormat);
  await newTab.type('#constraints-container .CodeMirror textarea' , constraints);
  await newTab.type('#output_format-container .CodeMirror textarea' , outputFormat);
  await newTab.type('#tags_tag' , tags);
  await newTab.keyboard.press("Enter");
  await newTab.click('.save-challenge.btn.btn-green');
  await newTab.waitForTimeout(3000);
  await newTab.close();
}
