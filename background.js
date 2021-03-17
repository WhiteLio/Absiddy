chrome.storage.sync.get('page', function(data) {
  switch (changes.page.newValue) {
    case ('profile'):
      chrome.action.setPopup({popup: 'profile.html'});
      alert('profile');
    case ('assets'):
      chrome.action.setPopup({popup: 'assets.html'});
      alert('assets');
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    if (key == 'page') {
      switch (changes.page.newValue) {
        case ('profile'):
          chrome.action.setPopup({popup: 'profile.html'});
          alert('profile');
        case ('assets'):
          chrome.action.setPopup({popup: 'assets.html'});
          alert('assets');
      }
    }
  }
});