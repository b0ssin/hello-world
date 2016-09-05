var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
              "October", "November", "December"];
var dateNow = new Date();
var yearNow = dateNow.getFullYear();
var monthNow = months[dateNow.getMonth()];
var dayNow = dateNow.getDate();
var daySuffix;
// uses variable dayNow
switch(dayNow) {
	case 1:
	case 21:
	case 31:
	  daySuffix = "st";
	  break;
	case 2:
	case 22:
	  daySuffix = "nd";
	  break;
	case 3:
	case 23:
	  daySuffix = "rd";
	  break;
	default:
	  daySuffix = "th";
	  break;
}
document.write("It is the " + dayNow + daySuffix + " day of " + monthNow + " and the year of " + yearNow);