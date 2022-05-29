import showDetails = require('./IshowDetails');
export class Teacher implements showDetails.IShowDetails {
  public display() {
    console.log('Teacher details.');
  }
}