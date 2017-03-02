/**
 * Created by sumit on 1/3/17.
 */
var fs=require("fs");
var path="exercise1.js"
var lines=0;
var data=fs.readFileSync(path);
if(data.length==0) {
    console.log("File is empty");
    return;
}
for(var i=0;i<=data.length;i++) {
    if(data[i]==10)
        lines++;
}
console.log(lines);

