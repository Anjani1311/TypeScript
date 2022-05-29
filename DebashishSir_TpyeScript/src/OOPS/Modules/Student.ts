import showDetails = require('./IshowDetails');
export class Student implements showDetails.IShowDetails {
  public display():void {
    console.log('Student Details');
  }
}