function Status(id, developerId, projectId, date, status) {
	
	this.id = id;
	this.developerId = developerId;
	this.projectId = projectId;
	this.date = date;
	this.status = status;

	this.getId = function() {
		return this.id;
	}

	this.getDeveloperId = function() {
		return this.developerId;
	}

	this.getProjectId = function() {
		return this.projectId;
	}

	this.getDate = function() {
		return this.date;
	}
	this.getStatus = function() {
		return this.status;
	}

	this.createStatus = function() {
		var developerName;
		var projectName;
		for(var index = 0; index < developerList.developers.length; index++){
			if(developerList.developers[index].id == this.developerId) {
				developerName = developerList.developers[index].name;
				break;
			}
		}
		for(var index = 0; index < projectList.projects.length; index++){
			if(projectList.projects[index].id == this.projectId){
				projectName = projectList.projects[index].name;
				break;
			}
		}
		var statusDetails = developerName + ' is working on ' + projectName + ' on ' + formatDate(this.date);
		if(this.status != undefined){
			statusDetails += ', notes : ' + this.status;
		}
		return statusDetails;
	}

	this.createDayStatus = function() {
		var developerName;
		var projectName;
		for(var index = 0; index < developerList.developers.length; index++){
			if(developerList.developers[index].id == this.developerId) {
				developerName = developerList.developers[index].name;
				break;
			}
		}
		for(var index = 0; index < projectList.projects.length; index++){
			if(projectList.projects[index].id == this.projectId){
				projectName = projectList.projects[index].name;
				break;
			}
		}
		var statusDetails = developerName + ' is working on ' + projectName;
		if(this.status != undefined){
			statusDetails += ', notes : ' + this.status;
		}
		return statusDetails;
	}

}