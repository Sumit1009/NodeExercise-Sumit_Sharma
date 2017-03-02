/**
 * Created by sumit on 1/3/17.
 */
function ageCalculator(dateOfBirth) {
    var curDate=new Date();
    var dob=new Date(dateOfBirth);
    if(dob>curDate) {

        return "Enter Valid Date of Birth";
    }
    var numberOfYears=curDate.getFullYear()-dob.getFullYear();
    if(dob.getMonth()>curDate.getMonth())
        numberOfYears--;
    if(dob.getMonth()==curDate.getMonth()&&dob.getDay()>curDate.getDay()) {
        numberOfYears--;
    }
   return " You are "+numberOfYears+" years old";

}
module.exports.ageCalculator=ageCalculator;
