// based on charCodeAt(0) value we will return
// the code and assign the return value
// equal to U, L, or N 
// U == upper, L == lower, N == number
function checkCharType(charToCheck) {
  var returnValue = "O";
  var charCode = charToCheck.charCodeAt(0);
  if (charCode >= "A".charCodeAt(0) && charCode <=
  "Z".charCodeAt(0)) {
    returnValue = "U";
  } else if (charCode >= "a".charCodeAt(0) &&
  charCode <= "z".charCodeAt(0)) {
    returnValue = "L";
  } else if (charCode >= "0".charCodeAt(0) &&
  charCode <= "9".charCodeAt(0)) {
    returnValue = "N";
  }
  return returnValue;
}
// prompts the user to enter a string that will go through the switch statement
var myString = prompt("Enter some text", "Hello World!");
// switch statement to give more info 
// about U, L, or N
switch (checkCharType(myString)) {
  case "U":
    document.write("First character was upper case");
    break;
  case "L":
	document.write("First character was lower case");
	break;
  case "N":
	document.write("First character was a number");
	break;
  default:
	document.write("First character was not a character or \
		a number");
}
