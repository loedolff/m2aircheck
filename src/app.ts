import puppeteer from 'puppeteer';
import {sendMessage} from "./sendSms";

// const report = console.log;
const report = sendMessage;

async function doM2airCheck(page) {
    await page.goto('https://www.apple.com/macbook-air/');
    const [viewPricingEH] = await page.$x("//a[contains(text(), 'View pricing')]");
    if (!viewPricingEH) {
        report("The 'View pricing' text is gone! Order now!");
    }
    const [availableInJulyEH] = await page.$x("//p[contains(text(), 'Available in July')]");
    if (!availableInJulyEH) {
        report("The 'Available in July' text is gone! Order now!");
    }

//    For some reason this section worked on my local mac, but not on ec2. 
//    await page.goto('https://www.apple.com/shop/buy-mac/macbook-air/midnight-apple-m2-chip-with-8-core-cpu-and-10-core-gpu-512gb#');
    // make sure the button has loaded
//    await page.waitForSelector('button[name="add-to-cart"]');
    // then check if it's disabled
//    const addToBagDisabled = await page.$("button.disabled[name='add-to-cart']");
//    if (!addToBagDisabled) {
//        report("The 'Add to Bag' button is not disabled! Order now!");
//    }

//    await page.screenshot({path: 'apple.png'});
}

async function run() {
    // const browser = await puppeteer.launch({ ignoreHTTPSErrors: true, headless: false });
    const browser = await puppeteer.launch({ignoreHTTPSErrors: true});
    const page = await browser.newPage();

    while (true) {
	console.log(new Date());
        await doM2airCheck(page);
        // sleep 5 minutes then try again
        await new Promise(f => setTimeout(f, 1000*60*5));
    }

    await browser.close();
}

run();
