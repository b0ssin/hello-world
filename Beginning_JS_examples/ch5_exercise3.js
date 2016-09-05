// ch5_example8.html uses a function to create objects using literal notation. Modify
// this example to use the Person data type.
function Person(firstName, lastName) {
	this.firstName =  firstName;
	this.lastName = lastName;
}
// getFullName: function() {
// 			return this.firstName + " " + this.lastName;
// 		},
// 		greet: function(person) {
// 			alert("Hello " + person.firstName + ". I'm " + this.firstName);
// 		}

Person.prototype.getFullName = function(){
	// had an error here, was getting undefined on my functions
	// i was missing a return statement
	return this.firstName + " " + this.lastName;
}
Person.prototype.greet = function(person) {
	alert("Hello " + person.firstName + " I'm " + this.firstName);
}

var bobBuilder = new Person("Bob", "Builder");
var sonyaEvil = new Person("Sonya", "Evil");
bobBuilder.greet(sonyaEvil);
document.write(bobBuilder.getFullName());
document.write(sonyaEvil.getFullName());
