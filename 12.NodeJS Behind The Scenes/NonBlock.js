import fs from "fs";

console.log("start");

fs.readFile("Demo.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

console.log("End");
