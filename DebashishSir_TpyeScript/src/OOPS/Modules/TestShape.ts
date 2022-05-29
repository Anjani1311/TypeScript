import showDetails = require('./IshowDetails');
import student = require('./Student');
import teacher = require('./Tecacher');

function showAllDetails(detailsToShow: showDetails.IShowDetails) {
  detailsToShow.display();
}

showAllDetails(new student.Student());
showAllDetails(new teacher.Teacher());