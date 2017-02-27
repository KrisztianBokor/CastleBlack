function DeveloperList(){

	this.developers = defaultDevelopers;

	this.addDeveloper = function (newDeveloper) {
		this.developers.push(newDeveloper);					
	}

	this.removeFromDeveloperList = function(IdToRemove) {
		for(var index = 0; index < this.developers.length; index ++) {
			if(this.developers[index].id == IdToRemove){
				this.developers.splice(index, 1);
				break;
			}
		}
	}

	// Returns the id for the new developer
	this.getNewDeveloperId = function() {
		var newId = this.developers[this.developers.length - 1].id;
		newId += 1;
		return newId;
	}

	// Returns all the names of developers
	this.getDevelopersName = function() {
		var nameOfDevelopers = [];

		for (var index = 0; index < this.developers.length; index++) {
			nameOfDevelopers[index] = this.developers[index].name;	
		}

		return nameOfDevelopers;
	}
}