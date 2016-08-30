var fahrenArray = [];
var celciusArray = [];
// populate fahrenArray with 3 data points
for (var i = 0; i < 3; i++) {
	var fahrenheit = Number(prompt("Enter the degrees in fahrenheit"))
	if (isNaN(fahrenheit)) {
		document.write("At an index of: " + i + " there was a NaN error for fahrenArray. <br>");
		continue;
	}
	fahrenArray[i] = fahrenheit;
}
// T(°C) = (T(°F) - 32) × 5/9
for (var x = 0; x < fahrenArray.length; x++) {
	celciusArray[x] = ((fahrenArray[x] - 32) * 5 / 9).toFixed(2);
}

document.write("You entered: " + fahrenArray + " all in degrees fahrenheit. In celcius they would\
be converted as: " + celciusArray + " all in degrees celcius");
