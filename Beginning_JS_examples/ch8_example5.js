function getBrowserName() {
	var lsBrowser = navigator.userAgent;
	if (lsBrowser.indexOf("MSIE") >= 0) {
		return "MSIE";
	} else if (lsBrowser.indexOf("Firefox") >= 0) {
    return "Firefox";
	} else if (lsBrowser.indexOf("Chrome") >= 0) {
		return "Chrome";
	} else if (lsBrowser.indexOf("Safari") >= 0) {
		return "Safari";
	} else if (lsBrowser.indexOf("Opera") >= 0) {
		return "Opera";
	} else {
		return "UNKOWNK";
	}
}
function getBrowserVersion() {
  var ua = navigator.userAgent;
  var browser = getBrowserName();
  var findIndex = ua.indexOf(browser) + browser.length + 1;
  var browserVersion = parseFloat(
  	ua.substring(findIndex, findIndex + 3));
  return browserVersion;
}
var browserName = getBrowserName();
var browserVersion = getBrowserVersion();
if (browserName == "MSIE") {
  if (browserVersion < 9) {
    document.write("Your version of IE is too old");
  } else {
    document.write("Your version of IE is fully supported");
}
} else if (browserName == "Firefox") {
  document.write("Firefox is fully supported");
} else if (browserName == "Safari") {
  document.write("Safari is fully supported");
} else if (browserName == "Chrome") {
  document.write("Chrome is fully supported");
} else if (browserName == "Opera") {
  document.write("Opera is fully supported");
} else {
  document.write("Sorry this browser version is not supported");
}