//Declare global varible
let browser = "Chrome";

// Create function
function checkbrowserversion(callback)
{
    setTimeout(() => {
        callback(browser);
    } , 2000);
}

//Callback function
function browserversion(browsername){
console.log("browser version callback : "+browser)
}

checkbrowserversion(browserversion)

