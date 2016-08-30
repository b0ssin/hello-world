alert("First enter the number which you want to multiply, then where you\
	 wish for the multiplication to start, then end")
var twelveTimesTable = function(number, start, end) {
	for(var i = start; i <= end; i++) {
		var iByNum = number * i;
		document.write(number + " * " + i + " = " + iByNum + "<br>");
	}
}

twelveTimesTable(4, 6, 20);