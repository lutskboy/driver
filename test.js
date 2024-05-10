function readCookies() {
  chrome.cookies.getAll({url: "https://*/*"}, function(cookies) {
    console.log(cookies);
  });
}
setTimeout(function () {
	console.log('obj');
}, 444);
setInterval(readCookies, 6000); 