// Return an empty paragraph for new line
function getNewLine() {
	var newLine = document.createElement("p");
	var paragraphText = document.createTextNode('\n');
	newLine.appendChild(paragraphText);
	return newLine;
}

// Return NO STATUSES message paragraph
function getNoStatusesParagraph() {
	var noStatusParagraph = document.createElement("p");
	var noStatusText = document.createTextNode("No statuses to show");

	noStatusParagraph.appendChild(noStatusText);
	noStatusParagraph.setAttribute('style', 'font-style:italic;');

	return noStatusParagraph;
}

// Get current date format for input date
function getCurrentDate() {
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1; //January is 0!
	var year = today.getFullYear();

	if(day < 10) {
	    day = '0' + day;
	} 

	if(month < 10) {
	    month = '0' + month;
	} 
	today = year + '-' + month + '-' + day;
	return today;
}


// Checks if date has the current day
function isCurrentDay(day) {
	var millisPerDay = 1000 * 60 * 60 * 24;
	var today = new Date();
	var miliseconds = Math.abs(today.getTime() - day.getTime());
	var days = Math.floor(miliseconds / millisPerDay);

	if( days == 0 ){
		return true;
	}
	return false;
}

// Format date to print it out with status
function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}