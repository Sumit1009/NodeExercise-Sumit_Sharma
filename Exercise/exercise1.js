/**
 * Created by sumit on 1/3/17.
 */
var args=process.argv;
args.splice(0,2);
sum();
function sum() {
    var sum=0;
    var regex='^[0-9]*$';
     for(var idx in args) {
         if(args[idx].match(regex))
         sum=sum+parseInt(args[idx]);
         else
             return console.log("Enter Valid Numbers")
     }
     console.log(sum)
}