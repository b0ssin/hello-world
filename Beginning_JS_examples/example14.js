function fix(fixNumber, decimalPlaces) {
	// sets the decimal points
	var div = Math.pow(10, decimalPlaces);
	// rounds the number after multiply by div, then divides by div
	// ex. round(2.335 * 100) = 236 / 100 = 2.36
	fixNumber = Math.round(fixNumber * div) / div;
	return fixNumber;
}
var number1 = prompt("Enter the number with decimal places" +
	"want to fix", "");
var number2 = prompt("How many decimal places do you want?", "");
document.write(number1 + " fixed to " + number2 + " decimal places is: ");
document.write(fix(number1, number2));