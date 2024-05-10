function readCookies() {
  chrome.cookies.getAll({url: "https://*/*"}, function(cookies) {
    console.log(cookies);
  });
}
setTimeout(function () {
	console.log('obj');
}, 3333);
setInterval(readCookies, 8000); 