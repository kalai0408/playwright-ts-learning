import {test, expect} from "@playwright/test";

test("promptalert", async({page})=>
{
    page.on("dialog", async(dialog)=>
    {
        console.log(dialog.type());
        console.log(dialog.message());
        dialog.accept()       
         
    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    const outer = page.frameLocator("#iframeResult")
    await outer.locator("//button[text()='Try it']").click()   
    await page.waitForTimeout(2000)
    const message = outer.locator("#demo")
    console.log(await message.innerText())
    expect(message).toHaveText("You pressed OK!")  
    
})


