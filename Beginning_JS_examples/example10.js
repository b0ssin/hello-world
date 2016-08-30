var myString = "Welcome Wrox Wrox Wrox"
var foundAtPosition = 0;
var wroxCount = 0;
while (foundAtPosition != -1) {
foundAtPosition = myString.indexOf("Wrox",
foundAtPosition);
if (foundAtPosition != -1) {
wroxCount++;
foundAtPosition++;
}
}
document.write("There are " + wroxCount + " occurrences of the\
	word Wrox");