const puppeteer = require("puppeteer");
const id = "raspberrypicam8@gmail.com";
const pw = "123456789";
let challenges = require("./challenges");

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
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
      await tab.waitForSelector(".btn.btn-green.backbone.pull-right");
      await tab.click(".btn.btn-green.backbone.pull-right");
})();


