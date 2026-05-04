import test from "@playwright/test";
import console from "console";

test('editlead', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.waitForTimeout(3000)   
    await page.locator("//input[@id='username']").fill("demoCSR2")
    await page.locator("//input[@id='password']").fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
    await page.locator("img[src='/opentaps_images/integratingweb/crm.png']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Create Lead']").click()
    page.waitForLoadState("domcontentloaded")
        await page.locator("//input[@id='createLeadForm_companyName']").fill("company")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("test")
    await page.locator("//input[@id='createLeadForm_lastName']").fill("last")
    await page.locator("//input[@name='submitButton']").click()
    await page.locator("//a[text()='Edit']").click()
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("company1")
    await page.getByRole("button",{name:"Update"}).click()
    console.log(page.title());
