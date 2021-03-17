chrome.storage.sync.get('page', function(data) {
  switch (data.page) {
    case ('profile'):
      chrome.action.setPopup({popup: 'profile.html'});
    case ('assets'):
      chrome.action.setPopup({popup: 'assets.html'});
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    if (key == 'page') {
      switch (changes.page.newValue) {
        case ('profile'):
          chrome.action.setPopup({popup: 'profile.html'});
        case ('assets'):
          chrome.action.setPopup({popup: 'assets.html'});
      }
    }
  }
});

chrome.action.setBadgeBackgroundColor({ color: "#ffab40" });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.url != null) {
    if (changeInfo.url.startsWith("https://www.google.com/search")) {
      chrome.action.setBadgeText({ text: "3" });
    } else {
      chrome.action.setBadgeText({ text: "" });
    }
  }
  
}); 

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab){
    if (tab.url != null) {
      if (tab.url.startsWith("https://www.google.com/search")) {
        chrome.action.setBadgeText({ text: "3" });
      } else {
        chrome.action.setBadgeText({ text: "" });
      }
    }
  });
}); 