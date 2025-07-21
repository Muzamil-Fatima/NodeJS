// Without call back
import fs from "fs";
console.log("start");

let data = fs.readFileSync('Demo.txt');
console.log(data.toString());

console.log("End");
