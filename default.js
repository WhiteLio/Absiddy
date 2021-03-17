function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

var profileButton = document.getElementById("profileButton");
var assetButton = document.getElementById("assetButton");
var content = document.getElementById('content');

profileButton.onclick = function () { 
  content.src = "profile.html";
  profileButton.disabled = true;
  assetButton.disabled = false;
};

assetButton.onclick = function () { 
  content.src = "resources.html";
  profileButton.disabled = false;
  assetButton.disabled = true;
};