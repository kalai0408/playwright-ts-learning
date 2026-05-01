import {test, chromium, firefox} from "@playwright/test";

test.describe('group', ()=>{

test("launchmsedge", async()=>
{
    const browser = await chromium.launch({channel:'msedge', headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.redbus.in/')
await page.waitForTimeout(10000)
console.log(await page.title())
await browser.close()
})
test("launchfirefox", async()=>
{
    const browser = await firefox.launch({ headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com/')
await page.waitForTimeout(10000)
console.log(await page.title())
await browser.close()
})
})
