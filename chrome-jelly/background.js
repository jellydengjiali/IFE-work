console.log("Hello, world!")
chrome.webRequest.onCompleted.addListener(
function(details) {
        console.info("URL :" + details.url);
      FindData("https://www.baidu.com");
},

{
    urls: [
        "http://*.google.com/*",
        "https://*.google.com/*",
    ]
},
["responseHeaders"]);

function FindData(strURL) {
    var req = new XMLHttpRequest();
    req.open("GET", strURL, true);
    req.onreadystatechange=function() {
        if (req.readyState==4) {
            if (req.status==200)
            {
                console.info("Sucess!");
                console.info("Data: " + req.responseText);
            }
        else if (req.status==404) console.info("URL doesn't exist!")
        else console.info("Error: Status is " + req.status)
        }
    }
    req.send();
}
