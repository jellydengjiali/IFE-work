chrome.webRequest.onBeforeRequest.addListener(
    function(details)
    {
        console.log("url:"+ details.url);
        console.log("requestBody:"+details.requestBody);
    },
    {urls: [ "https://*/*","http://*/*" ]},
    ['requestBody']
);
