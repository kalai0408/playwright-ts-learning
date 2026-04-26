function launchBrowser(browser)
{
    let browserName=browser
    if(browserName=="chrome")
    {
        console.log("The browser is:", browser)
    }
    else
    {
        console.log("Not a chrome browser")
    }
}
launchBrowser("chrome")

function runTests(testType)
{
    let test = testType
    switch(test)

    {
      case "smoke":
        console.log("The testing type is", testType);
        break;
                case "sanity":
                console.log("The testing type is", testType)
                break;
                    case "Regression":
                    console.log("The testing type is", testType)
                    break;
                        default:
                        console.log("The testing type is smoke")
                        break;
   
}
}
runTests("performance")
