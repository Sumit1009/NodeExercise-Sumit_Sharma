/**
 * Created by sumit on 1/3/17.
 */
const fs=require("fs");
path="exercise1.js"
var lines=0;
fs.readFile(path,'utf8',function(err,data) {
    if(err) {
        console.log(err)
    }
    else {
        if(data.length==0) {
            console.log("File is empty");
            return;
        }
        for(var i=0;i<data.length;i++) {
            if(data[i]=="\n")
                lines++;
        }
        console.log(lines);
    }
});




