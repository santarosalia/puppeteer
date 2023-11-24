import puppeteer from 'puppeteer';

export const main = async () => {
    const browser = await puppeteer.launch({
        channel : 'chrome',
        headless : false
    });
    const [page] = await browser.pages();
    
    await page.goto('https://wd.digitalworker.co.kr/');
    await browser.close();
};

export const f = async () => {
    const browser = await puppeteer.launch({
        channel : 'chrome',
        headless : false
    });
    const [page] = await browser.pages();
    
    await page.goto('https://naver.com/');
    await browser.close();
};
