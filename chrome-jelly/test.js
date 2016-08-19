console.log("Hello, world!");
var requestFilter = {
    "urls" : [ "*://*.baidu.com/*" ],
    "tabId" : tId
};
var tId = "";
// chrome.webRequest.onCompleted.addListener(function(page) {
//     console.log("wRonCompleted" + " | tabId:" + page.tabId + " | url:"
// 	    + page.url);
// }, requestFilter);

chrome.webRequest.onBeforeRequest.addListener(function(data){
  console.info("URL :" + data.url);
  console.info("response:"+data.responseBody);
  var req = new XMLHttpRequest();
  req.open("GET", data.url, true);
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
},["requestFilter","responseBody"]);
