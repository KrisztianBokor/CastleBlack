function ProjectList() {
	
	this.projects = defaultProjects;

	this.addProject = function (newProject) {
		this.projects.push(newProject);
	}

	this.removeFromProjectList = function(IdToRemove) {
		for(var index = 0; index < this.projects.length; index ++) {
			if(this.projects[index].id == IdToRemove){
				this.projects.splice(index, 1);
				break;
			}
		}
	}

	// Returns all the names of the projects
	this.getProjectsName = function() {
		var nameOfProjects = [];
	
		for (var index = 0; index < this.projects.length; index++) {
			nameOfProjects[index] = this.projects[index].name;
		}

		return nameOfProjects;
	}

	// Returns the id for the new project
	this.getNewProjectId = function() {
		var newId = this.projects[this.projects.length - 1].id;
		newId += 1;
		return newId;
	}
}