import test from "@playwright/test";

test('createlead', async({page, context})=>{
    await context.clearPermissions([])
    await context.grantPermissions([])
    await page.goto('https://login.salesforce.com/')
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.locator("//button[@title='App Launcher']").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.waitForLoadState("domcontentloaded")
    await page.locator("//p[text()='Leads']").click()
    await page.locator("//div[@title='New']").click()
    await page.locator("//button[@name='salutation']").click()
    await page.waitForLoadState("domcontentloaded")
    await page.locator("//span[text()='Dr.']").click()
    await page.locator("//input[@name='lastName']").fill("Kalai")
    await page.locator("//input[@name='Company']").fill("Company")
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(3000)
    page.locator("//span[text()='Kalai']")

}
)
