// Equation is °C = 5/9 (°F - 32)

var degreesInFahrenheit = parseFloat(prompt("Enter degrees in fahrenheit as such: 68 = 68 degrees fahrenheit"));
var fahrenheitToCelcius = function(degreesInFahrenheit) {
	var degreesInCelcius = (5/9) * (degreesInFahrenheit - 32);
	if(isNaN(degreesInFahrenheit)) {
		return "You didn't give me a number";
	} else {
		return degreesInCelcius;
	}
}
alert(fahrenheitToCelcius(degreesInFahrenheit));
