var myAge = Number(prompt("Enter your age:"));
if (myAge >= 0 && myAge <= 10) {
	document.write("myAge is between 0 and 10 <br />");
} else if (!(myAge >= 0 && myAge <= 10)) {
	document.write("myAge is NOT between 0 AND 10")
}