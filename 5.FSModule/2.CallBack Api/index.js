// import * as fs from "fs";
// fs.mkdir("F:\\Zubair", (error) => {
//   if (error) throw error;
//   console.log("Directory Created...");

// });
import * as fs from "fs";
fs.mkdir("F:\\Zubair", function (error) {
  if (error) throw error;
  console.log("Directory Created...");
});
