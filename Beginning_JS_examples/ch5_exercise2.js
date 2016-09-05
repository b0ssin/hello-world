// initialize the variables needed (empty array, Index counter, boolean)
var emptyString = true;
var incrementIndex = 0
var nameArray = [];
while(emptyString) {
	// cleans the user input into a string.
	name = String(prompt("Enter a name:", "Bob"));
	// .trim() so if they enter " " it will set it too "".
	if (name.trim() === "") {
		// stops the while loop and breaks just incase
		emptyString = false;
		break;
	} else {
		// increment the index and add the name
		nameArray[incrementIndex] = name;
		incrementIndex++;
	}
}
nameArray = nameArray.sort();
nameArray = nameArray.join("<br />");
document.write(nameArray);