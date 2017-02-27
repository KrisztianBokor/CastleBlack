// Developer list
var developerList = new DeveloperList();

// Project list
var projectList = new ProjectList();

// Status list
var statusList = new StatusList();

// Projects button clicked
$( "#projects" ).click(showProjects);
// Add Project button clicked
$( "#addProject" ).click(showAddProject);
// Remove Project button clicked
$( "#removeProject" ).click(showRemoveProject);
// Developers button clicked
$( "#developers" ).click(showDevelopers);
// Add Developer button clicked
$( "#addDeveloper" ).click(showAddDeveloper);
// Remove Developer button clicked
$( "#removeDeveloper" ).click(showRemoveDeveloper);
// Status button clicked
$( "#status" ).click(showStatus);
// Add Status button clicked
$( "#addStatus" ).click(showAddStatus);
// Delete Status button clicked
$( "#deleteStatus" ).click(showDeleteStatus);
// Day Summary button clicked
$("#daySummary").click(showDaySummary);
// Developer Summary button clicked
$("#developerSummary").click(showDeveloperSummary);
// Project Summary button clicked
$("#projectSummary").click(showProjectSummary);

//Projects button clicked
function showProjects() {
	
	// "Projects" heading
	var projectHeading = document.createElement("h1");
	var headingText = document.createTextNode("Projects");
	projectHeading.appendChild(headingText);

	$( "section" ).empty();
	$( "section" ).append(projectHeading);

	var projectsName = projectList.getProjectsName();
	for(var index = 0; index < projectList.projects.length; index++) {
		var projectName = document.createElement("p");
		var projectNameText = document.createTextNode(projectsName[index]);

		projectName.appendChild(projectNameText);	
		$( "section" ).append(projectName);	    
	}	
};

//Add Project button clicked
function showAddProject() {
	
	// "Projects" heading
	var projectHeading = document.createElement("h1");
	var headingText = document.createTextNode("Projects");
	projectHeading.appendChild(headingText);

	// Input to enter project name
	var inputProjectName = document.createElement("input");
	inputProjectName.value = "Project Name";
	inputProjectName.onclick = function() {
		inputProjectName.value = "";
	}

	// Add Button
	var addProjectButton = document.createElement("button");
	addProjectButton.innerHTML = "Add";
	addProjectButton.onclick = function() {
		if(inputProjectName.value != "" && inputProjectName.value != "Project Name") {
			// Create new Project and add to list
			var newProject = new Project();
			newProject.id = projectList.getNewProjectId();
			newProject.name = inputProjectName.value;
			projectList.addProject(newProject);
			inputProjectName.value = "";
		}

		// Redirect to projects
		showProjects();
	};

	$( "section" ).empty();
	$( "section" ).append(projectHeading);
	$( "section" ).append(inputProjectName);
	$( "section" ).append(addProjectButton);
};

//Remove Project button clicked
function showRemoveProject() {
	
	// "Projects" heading
	var headingText = document.createTextNode("Projects");
	var projectHeading = document.createElement("h1");
	projectHeading.appendChild(headingText);

	// Select element with all projects
	var selectProject = document.createElement("select");
	for (var i = 0; i < projectList.projects.length; i++) {
	    var option = document.createElement("option");
	    option.id = projectList.projects[i].getId();
	    option.text = projectList.projects[i].getName();
	    selectProject.appendChild(option);
	}

	// Remove button
	var removeProjectButton = document.createElement("button");
	removeProjectButton.innerHTML = "Remove";
	removeProjectButton.onclick = function() {
		// Get the project id and delete after it
		var projectId = selectProject.options[selectProject.selectedIndex].id;
		projectList.removeFromProjectList(projectId);

		// Redirect to projects
		showProjects();
	};

	$( "section" ).empty();
	$( "section" ).append(projectHeading);
	$( "section" ).append(selectProject);
	$( "section" ).append(removeProjectButton);
};

//Developers button clicked
function showDevelopers() {
	
	// "Developer" heading 
	var developerHeading = document.createElement("h1");
	var headingText = document.createTextNode("Developers");
	developerHeading.appendChild(headingText);
	
	$( "section" ).empty();
	$( "section" ).append(developerHeading);

	var developersName = developerList.getDevelopersName();
	for(var index = 0; index < developerList.developers.length; index++) {
		var developerName = document.createElement("p");
		var developerNameText = document.createTextNode(developersName[index]);
		
		developerName.appendChild(developerNameText);
		$( "section" ).append(developerName);	    
	}
};

//Add Developer button clicked
function showAddDeveloper() {
	
	// "Developers" heading
	var headingText = document.createTextNode("Developers");
	var developerHeading = document.createElement("h1");
	developerHeading.appendChild(headingText);

	// Input to enter developer name
	var inputDeveloperName = document.createElement("input");
	inputDeveloperName.value = "Developer Name";
	inputDeveloperName.onclick = function() {
		inputDeveloperName.value = "";
	}

	// Add button
	var addDeveloperButton = document.createElement("button");
	addDeveloperButton.innerHTML = "Add";
	addDeveloperButton.onclick = function() {
		if(inputDeveloperName.value != "" && inputDeveloperName.value != "Developer Name") {
			// Create new Developer and add to list
			var newDeveloper = new Developer();
			newDeveloper.id = developerList.getNewDeveloperId();
			newDeveloper.name = inputDeveloperName.value;
			developerList.addDeveloper(newDeveloper);
			inputDeveloperName.value = "";
		}

		// Redirect to developers
		showDevelopers();
	};

	$( "section" ).empty();
	$( "section" ).append(developerHeading);
	$( "section" ).append(inputDeveloperName);
	$( "section" ).append(addDeveloperButton);
};

//Remove Developer button clicked
function showRemoveDeveloper() {
	
	// "Developers" heading
	var headingText = document.createTextNode("Developers");
	var developerHeading = document.createElement("h1");
	developerHeading.appendChild(headingText);

	// Select element with all developers
	var selectDeveloper = document.createElement("select");
	for (var i = 0; i < developerList.developers.length; i++) {
	    var option = document.createElement("option");
	    option.id = developerList.developers[i].getId();
	    option.text = developerList.developers[i].getName();
	    selectDeveloper.appendChild(option);
	}

	// Remove button
	var removeDeveloperButton = document.createElement("button");
	removeDeveloperButton.innerHTML = "Remove";
	removeDeveloperButton.onclick = function() {
		// Get developer id and remove after it
		var developerId = selectDeveloper.options[selectDeveloper.selectedIndex].id;
		developerList.removeFromDeveloperList(developerId);

		// Redirect to developers
		showDevelopers();
	};

	$( "section" ).empty();
	$( "section" ).append(developerHeading);
	$( "section" ).append(selectDeveloper);
	$( "section" ).append(removeDeveloperButton);
};

//Status button clicked
function showStatus() {
	
	// "Status" heading 
	var statusHeading = document.createElement("h1");
	var headingText = document.createTextNode("Statuses");

	statusHeading.appendChild(headingText);

	$( "section" ).empty();
	$( "section" ).append(statusHeading);

	if(statusList.statuses.length != 0){
		for(var index = 0; index < statusList.statuses.length; index++){
			var statusParagraph = document.createElement("p");
			var statusText = document.createTextNode(statusList.statuses[index].createStatus());

			statusParagraph.appendChild(statusText);
			
			$( "section" ).append(statusParagraph);	
		}
	}else {
		$( "section" ).append(getNoStatusesParagraph());	
	}	
};

//Add Status button clicked
function showAddStatus() {
	
	// "Status" heading 
	var statusHeading = document.createElement("h1");
	var headingText = document.createTextNode("Add Status");
	statusHeading.appendChild(headingText);

	// Developer label
	var developerLabel = document.createElement('Label');
	developerLabel.innerHTML = 'Developer : ';

	// Project label
	var projectLabel = document.createElement('Label');
	projectLabel.innerHTML = 'Project : ';

	// Date label
	var dateLabel = document.createElement('Label');
	dateLabel.innerHTML = 'Date : ';

	// Select element with all developers
	var selectDeveloper = document.createElement("select");
	for (var i = 0; i < developerList.developers.length; i++) {
	    var option = document.createElement("option");
	    option.id = developerList.developers[i].getId();
	    option.text = developerList.developers[i].getName();
	    selectDeveloper.appendChild(option);
	}

	// Select element with all projects
	var selectProject = document.createElement("select");
	for (var i = 0; i < projectList.projects.length; i++) {
	    var option = document.createElement("option");
	    option.id = projectList.projects[i].getId();
	    option.text = projectList.projects[i].getName();
	    selectProject.appendChild(option);
	}

	// Input to enter status
	var inputStatus = document.createElement("textarea");
	inputStatus.setAttribute('style' , "width:300px; height:100px;"); 
	inputStatus.value = "Enter status here";
	inputStatus.onclick = function() {
		if(inputStatus.value == 'Enter status here'){
			inputStatus.value = "";
		}
	}

	// Input to enter date
	var inputDate = document.createElement("input");
	inputDate.setAttribute('type' , "date");
	inputDate.setAttribute('value' , getCurrentDate());

	// Add button
	var addStatusButton = document.createElement("button");
	addStatusButton.innerHTML = "Add";
	addStatusButton.onclick = function() {

		var developerId = selectDeveloper.options[selectDeveloper.selectedIndex].id;
		var projectId = selectProject.options[selectProject.selectedIndex].id;
		var statusDate = inputDate.value;

		var statusDetails;
		if(inputStatus.value != "Enter status here" && inputStatus.value != "") {
			statusDetails = inputStatus.value;
		}

		var newStatus = new Status();
		newStatus.id = statusList.getNewStatusId();
		newStatus.developerId = developerId;
		newStatus.projectId = projectId;
		newStatus.status = statusDetails;
		newStatus.date = new Date(statusDate);

		statusList.addStatus(newStatus);

		// Redirect to statuts
		showStatus();
	};
	
	// In this div we put all the html elements
	var container = document.createElement("div");
	container.setAttribute('class', 'addStatusContainer');
	container.appendChild(developerLabel);
	container.appendChild(selectDeveloper);
	container.appendChild(getNewLine());

	container.appendChild(projectLabel);
	container.appendChild(selectProject);
	container.appendChild(getNewLine());

	container.appendChild(inputStatus);
	container.appendChild(getNewLine());

	container.appendChild(dateLabel);
	container.appendChild(inputDate);
	container.appendChild(getNewLine());

	container.appendChild(addStatusButton);

	$( "section" ).empty();
	$( "section" ).append(statusHeading);
	$( "section" ).append(container);
};

// Delete Status button clicked
function showDeleteStatus() {
	// "Status" heading 
	var statusHeading = document.createElement("h1");
	var headingText = document.createTextNode("Delete Status");
	statusHeading.appendChild(headingText);

	$( "section" ).empty();
	$( "section" ).append(statusHeading);

	if(statusList.statuses.length != 0){
		for(var index = 0; index < statusList.statuses.length; index++){

			var status = document.createElement("label");
			var statusText = document.createTextNode(statusList.statuses[index].createStatus());
			status.appendChild(statusText);
			
			var checkbox = document.createElement('input');
			checkbox.setAttribute('style', "with:20px; height:20px;");
			checkbox.type = "checkbox";
			var id = "checkbox" + index;
			checkbox.id = id;
			
			$( "section" ).append(status);
			$( "section" ).append(checkbox);
			$( "section" ).append(getNewLine());
		}
	}else {
		$( "section" ).append(getNoStatusesParagraph());	
	}	

	// Delete button
	var deleteStatus = document.createElement("button");
	deleteStatus.innerHTML = "Delete";
	deleteStatus.onclick = function() {
		var statusIdList = [];
		var checkboxIndex = 0;
		for(var index = 0; index < statusList.statuses.length; index++){
			if(document.getElementById('checkbox' + index).checked){
				statusIdList[checkboxIndex] = statusList.statuses[index].id;
				checkboxIndex++;
			}
		}
		statusList.deleteFromListStatus(statusIdList);
	
		// Redirect to statuts
		showDeleteStatus();
	}

	// Container for delete button
	var deleteContainer = document.createElement("div");
	deleteContainer.setAttribute('class', 'addStatusContainer');
	deleteContainer.appendChild(deleteStatus);

	$( "section" ).append(deleteContainer);
}

// Day Summary button clicked
function showDaySummary() {
	// "Status" heading 
	var statusHeading = document.createElement("h1");
	var headingText = document.createTextNode("Day Summary");
	statusHeading.appendChild(headingText);

	$( "section" ).empty();
	$( "section" ).append(statusHeading);


	var dayStatuses = statusList.dayStatusSummary();
	if( dayStatuses.length != 0 ){
		for(var index = 0; index < dayStatuses.length; index++) {

			var dayStatusParagraph = document.createElement("p");
			var dayStatusText = document.createTextNode(dayStatuses[index]);
			dayStatusParagraph.appendChild(dayStatusText);
				
			$( "section" ).append(dayStatusParagraph);	
		}
	}else {
		$( "section" ).append(getNoStatusesParagraph());	
	}
};

// Developer Summary button clicked
function showDeveloperSummary() {
	// "Status" heading 
	var statusHeading = document.createElement("h1");
	var headingText = document.createTextNode("Developer Summary");
	statusHeading.appendChild(headingText);
	
	// Select element with all developers
	var selectDeveloper = document.createElement("select");
	for (var i = 0; i < developerList.developers.length; i++) {
	    var option = document.createElement("option");
	    option.id = developerList.developers[i].getId();
	    option.text = developerList.developers[i].getName();
	    selectDeveloper.appendChild(option);
	}

	// Search button
	var searchButton = document.createElement("button");
	searchButton.innerHTML = "Search";
	searchButton.onclick = function() {
		var developerId = selectDeveloper.options[selectDeveloper.selectedIndex].id;

		$( "section" ).empty();
		$( "section" ).append(statusHeading);
		$( "section" ).append(selectDeveloper);
		$( "section" ).append(searchButton);
				
		showDeveloperStatuses(developerId);
	};

	$( "section" ).empty();
	$( "section" ).append(statusHeading);
	$( "section" ).append(selectDeveloper);
	$( "section" ).append(searchButton);
};

// Project Summary button clicked
function showProjectSummary() {
	// "Status" heading 
	var statusHeading = document.createElement("h1");
	var headingText = document.createTextNode("Project Summary");
	statusHeading.appendChild(headingText);
	
	// Select element with all projects
	var selectProject = document.createElement("select");
	for (var i = 0; i < projectList.projects.length; i++) {
	    var option = document.createElement("option");
	    option.id = projectList.projects[i].getId();
	    option.text = projectList.projects[i].getName();
	    selectProject.appendChild(option);
	}

	// "since" label
	var sinceLabel = document.createElement('Label');
	sinceLabel.innerHTML = ' SINCE :';

	// "until" label
	var untilLabel = document.createElement('Label');
	untilLabel.innerHTML = ' UNTIL :';

	// since date
	var sinceDate = document.createElement("input");
	sinceDate.setAttribute('type' , "date");
	sinceDate.setAttribute('value' , getCurrentDate());

	// until date
	var untilDate = document.createElement("input");
	untilDate.setAttribute('type' , "date");
	untilDate.setAttribute('value' , getCurrentDate());

	// Search button
	var searchButton = document.createElement("button");
	searchButton.innerHTML = "Search";
	searchButton.onclick = function() {
		var startDate = new Date(sinceDate.value);
		var endDate = new Date(untilDate.value);

		$( "section" ).empty();
		$( "section" ).append(statusHeading);
		$( "section" ).append(selectProject);
		$( "section" ).append(sinceLabel);
		$( "section" ).append(sinceDate);
		$( "section" ).append(untilLabel);
		$( "section" ).append(untilDate);
		$( "section" ).append(searchButton);

		showProjectsStatusesBetween(startDate, endDate);

	};

	$( "section" ).empty();
	$( "section" ).append(statusHeading);
	$( "section" ).append(selectProject);
	$( "section" ).append(sinceLabel);
	$( "section" ).append(sinceDate);
	$( "section" ).append(untilLabel);
	$( "section" ).append(untilDate);
	$( "section" ).append(searchButton);
};