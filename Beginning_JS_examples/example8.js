try {
	alert("This is code inside the try clause");
	alert("this code won"t work");
} catch(exception) {
	alert("The error is " + exception.message);
}