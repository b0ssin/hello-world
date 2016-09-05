function Dog(hairColor, name, breed) {
	this.hairColor = hairColor;
	this.name = name;
	this.breed = breed;
};

Dog.prototype.getVetInfo = function() {
	return "Tell the vet that you have a " + 
	  this.breed + "." + " Also, go ahead and tell the vet" +
	  " how much you love your litte " + this.name + "!";
};

var braxton = new Dog("black", "Braxton", "Rough collie");
var toby = new Dog("grey", "Toby", "Shitzu");

braxton.getVetInfo();
toby.getVetInfo();