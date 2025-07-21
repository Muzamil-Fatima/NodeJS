import * as fs from "fs/promises";
// Append Data
try {
  await fs.appendFile(
    "README.md",
    "Muzamil You Are the best .Keep remind never thing you have nothing and never thing you have everything But  always thing you ahve something and you can achieve anything"
  );
} catch (error) {
  console.log(error);
}
