function StatusList() {

	this.statuses = [];

	this.addStatus = function(newStatus) {
		this.statuses.push(newStatus);
	}

	this.modifyStatus = function() {
		//modify
	}

	this.deleteFromListStatus = function(statusesIdList) {
		for(var statusIndex = 0; statusIndex < statusesIdList.length; statusIndex++) {
			for(var index = 0; index < this.statuses.length; index++) {
				console.log('looping');
				
				if(statusesIdList[statusIndex] == this.statuses[index].id) {
					this.statuses.splice(index, 1);
				}
			}
		}
	}

	// return the statuses for the current day
	this.dayStatusSummary = function() {
		var statuses = [];

		for(var index = 0; index < this.statuses.length; index++){
			if( isCurrentDay(this.statuses[index].getDate()) ) {
				statuses[index] = this.statuses[index].createDayStatus();
			}
		}
		return statuses;
	}

	// return the statuses of a team member on all projects
	this.getDeveloperStatuses = function(developerId) {
		var statuses = [];
		var statusIndex = 0;
		for(var index = 0; index < this.statuses.length; index++) {
			if( this.statuses[index].developerId == developerId){
				statuses[statusIndex] = this.statuses[index].createStatus();
				statusIndex++;
			}
		}
		return statuses;
	}

	// return the statuses for a certain project for a certain period
	this.getProjectStatusesBetween = function(startDate, endDate) {
		var statuses = [];
		for(var index = 0; index < this.statuses.length; index++) {
			if( (this.statuses[index].getDate() >= startDate) &&
				(this.statuses[index].getDate() <= endDate) ){

					statuses[index] = this.statuses[index].createStatus();
			}
		}
		return statuses;
	}

	// return the id for the new status to add
	this.getNewStatusId = function() {
		var newId = this.statuses.length;
		newId += 1;
		return newId;
	}
}