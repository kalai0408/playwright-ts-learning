let browser = "chrome"
const brow = (browser)=>
    {
    console.log("The browser is", browser)
}
function checkBrowserVersion(callback)
{  
    setTimeout(()=>{
        callback(browser)
    },2000)
}
checkBrowserVersion(brow)
