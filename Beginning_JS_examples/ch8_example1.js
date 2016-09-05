// Success param for navigator.geolocation.getCurrentPosition();
function geoSuccess(position) {
  var coords = position.coords;
  var latitude = coords.latitude;
  var longitude = coords.longitude;
  var message = "You're at " + latitude + ", " + longitude
  alert(message);
}
// get the message property of the errorObj;
// which is a human-readable error message
function geoError(errorObj) {
  alert(errorObj.message);
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);