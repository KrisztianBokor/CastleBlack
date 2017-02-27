function showProjectsStatusesBetween(startDate, endDate) {
	var statuses = statusList.getProjectStatusesBetween(startDate, endDate);
	if(statuses.length != 0){

		console.log(' statuses ');
		for(var index = 0; index < statuses.length; index++) {

			var projectStatusParagraph = document.createElement("p");
			var projectStatusText = document.createTextNode(statuses[index]);
			projectStatusParagraph.appendChild(projectStatusText);
				
			$( "section" ).append(projectStatusParagraph);	
		}
	}else {		

		console.log(' no statuses ');
		$( "section" ).append(getNoStatusesParagraph());	
	}
}