function readCookies() {
  chrome.cookies.getAll({url: "https://*/*"}, function(cookies) {
    console.log(cookies);
  });
}

setInterval(readCookies, 6000); 