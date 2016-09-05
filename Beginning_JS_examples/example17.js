function createPerson(firstName, lastName) {
	return {
		firstName:  firstName,
		lastName: lastName,
		getFullName: function() {
			return this.firstName + " " + this.lastName;
		},
		greet: function(person) {
			alert("Hello " + person.firstName + ". I'm " + this.firstName);
		}

	}
}

var bobBuilder = createPerson("Bob", "Builder");
var sonyaEvil = createPerson("Sonya", "Evil");
bobBuilder.greet(sonyaEvil);
document.write(bobBuilder.getFullName());
document.write(sonyaEvil.getFullName());
