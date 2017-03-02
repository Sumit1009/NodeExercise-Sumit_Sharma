/**
 * Created by sumit on 1/3/17.
 */
function ageCalculator(dateOfBirth) {
    var curDate=new Date();
    var dob=new Date(dateOfBirth);
    if(dob>curDate) {
        console.log("Enter Valid Data Of Birth");
        return;
    }
    var numberOfYears=curDate.getFullYear()-dob.getFullYear();
    if(dob.getMonth()>curDate.getMonth())
        numberOfYears--;
    if(dob.getMonth()==curDate.getMonth()&&dob.getDay()>curDate.getDay()) {
        numberOfYears--;
    }
   return numberOfYears;

}
module.exports.ageCalculator=ageCalculator;
