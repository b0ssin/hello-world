function geoSuccess(position) {
	var coords = position.coords;
	var latitude = coords.latitude;
	var longitude = coords.longitude;
	var message = "You're at " + latitude + ", " + longitude;
	alert(message);
}
function geoError(errorObj) {
	alert(errorObj.message);
}
if(typeof navigator.geolocation != "undefined") {
	navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
} else {
	alert("Your browser doesn't support geolocation.")
}

