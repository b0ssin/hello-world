// Calculate the Date 12 months from now using the Date object.
// then document.write it to the web page
months = ["January", "February", "March", "April",
"May", "June", "July", "August", "September", "October",
"November", "December"]
var date1 = new Date();
var date2 = new Date();
date2.setMonth(date1.getMonth() + 12)

document.write("The current date is: " + date1.toDateString() + "<br />" +
	"In 12 months it will be: " + date2.toDateString());