function writeTimesTable(timesTable) {
	var writeString;
	for (var counter = 1; counter < 12; counter++) {
		writeString = counter + " * " + timesTable + " = ";
		writeString = writeString + (timesTable * counter);
		writeString = writeString + "<br />"
		document.write(writeString);
	}
}

writeTimesTable(2);