function showDeveloperStatuses(developerId) {
	var statuses = statusList.getDeveloperStatuses(developerId);
	if(statuses.length != 0){
		for(var index = 0; index < statuses.length; index++) {

			var developerStatusParagraph = document.createElement("p");
			var developerStatusText = document.createTextNode(statuses[index]);
			developerStatusParagraph.appendChild(developerStatusText);
							
			$( "section" ).append(developerStatusParagraph);	
		}
	}else {
		$( "section" ).append(getNoStatusesParagraph());	
	}
}