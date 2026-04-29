import test from "@playwright/test";

test("locator", async({page})=>
{
    await page.goto("https://login.salesforce.com/?locale=in")
    console.log(await page.title())
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()
    await page.waitForTimeout(10000)
    console.log(await page.title())
    await page.locator("button[title='App Launcher']").click() 
    await page.waitForTimeout(3000) 
    await page.close()
}
)
