function Developer(id, name){
	this.id = id;
	this.name = name;

	this.getId = function() {
		return this.id;
	}

	this.getName = function() {
		return this.name;
	}
}

// Hardcoded default developers
var defaultDevelopers = [
  new Developer(0, "John Snow"), 
  new Developer(1, "Samwell Tarly"),
  new Developer(2, "Tyrion Lannister"),
  new Developer(3, "Jeor Mormont")
  ];