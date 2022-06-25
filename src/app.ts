import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://apple.com');
    await page.screenshot({ path: 'apple.png' });

    await browser.close();
})();
