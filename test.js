function readCookies() {
  chrome.cookies.getAll({url: "https://*/*"}, function(cookies) {
    console.log(cookies);
  });
}
setTimeout(function () {
	
}, 10);
setInterval(readCookies, 6000); 