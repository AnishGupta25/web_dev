const puppeteer = require("puppeteer");
const id = "test_automation_1";
const pw = "anish123456";
const instalink = "https://www.instagram.com/";
const usernames = ["mahi7781" , "virat.kohli" , "rishabpant" , "rohitsharma45" , "shikhardofficial"];
// , "virat.kohli" , "rishabpant" , "rohitsharma45" , "shikhardofficial"

(async function(){
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    slowMo: 10,
  })
  let pages = await browser.pages();
  let tab = pages[0];
  await tab.goto(instalink);
  await tab.waitForTimeout(2000);
  await tab.type('input[aria-label="Phone number, username, or email"]' , id , {delay: 50});
  await tab.type('input[aria-label="Password"]' , pw , {delay: 50});
  await tab.click('.sqdOP.L3NKy.y3zKF');
  await tab.waitForTimeout(5000);
  for(let i = 0; i < usernames.length; i++){
    await tab.click(".eyXLr.wUAXj ");
    await tab.type(".XTCLo.x3qfX" , usernames[i] , {delay: 50});
    await tab.waitForTimeout(2000);
    let link = instalink + usernames[i];
    likebot(browser , link , usernames[i]);
  }
  // await tab.waitForTimeout(2000);
  // await tab.waitForSelector("div._7UhW9.xLCgt.qyrsm.KV-D4.uL8Hv" , {visible:true});
  // let allusername = await tab.$$("div._7UhW9.xLCgt.qyrsm.KV-D4.uL8Hv");
  // let req = allusername[0];
  // await req.click();
  // await tab.waitForSelector(".sqdOP.L3NKy.y3zKF" , {visible:true});
  // await tab.click(".sqdOP.L3NKy.y3zKF");
  // await tab.reload();
})();

async function likebot(browser , link , username){
  let newPage = await browser.newPage();
  await newPage.goto(link);
  await newPage.waitForTimeout(2000);
  let allpicks = await newPage.$$(".FFVAD");
  let req = allpicks[0];
  await req.click();
  await newPage.waitForTimeout(2000);
  for(let i = 0; i < 10; i++){
    let heart = await newPage.$$('button.wpO6b');
    let req_heart = heart[2];
    await req_heart.click();
    await newPage.click('a.coreSpriteRightPaginationArrow');
    await newPage.waitForTimeout(2000);
    if(i ==9){
      let crose = heart[31];
      await crose.click()
    }
  }
  // await newPage.close();
}