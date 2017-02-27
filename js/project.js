function Project(id, name){
	this.id = id;
	this.name = name;

	this.getId = function() {
		return this.id;
	}

	this.getName = function() {
		return this.name;
	}
}

// Hardcoded default projects
var defaultProjects = [
  new Project(0, "The Battle for the Wall"), 
  new Project(1, "The Death of Ned Stark"),
  new Project(2, "The Red Wedding"),
  new Project(3, "Mother of Dragons"),
  new Project(4, "The Battle of the Bastards"),
  ];