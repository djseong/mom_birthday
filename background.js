chrome.browserAction.onClicked.addListener(function(tab){ 
  chrome.tabs.executeScript(null, {
    file: "content.js"
  })
  chrome.tabs.executeScript(null, {
    file: "spin.js"
  })
  chrome.tabs.executeScript(null, {
    file: "jquery-3.1.0.min.js"
  })
  chrome.tabs.insertCSS(null, {
    file: "alert.css"
  })
})
