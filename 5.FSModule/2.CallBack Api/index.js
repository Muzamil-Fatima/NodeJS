// import * as fs from "fs";
// fs.mkdir("F:\\Zaubair", (error) => {
//   if (error) throw error;
//   console.log("Directory Created...");
  
// });
import * as fs from "fs";
fs.mkdir("F:\\Zaubair", function (error){
  if (error) throw error;
  console.log("Directory Created...");
  
});
