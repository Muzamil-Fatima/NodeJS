import * as fs from "fs/promises";
// Copy File
try {
  await fs.copyFile('README.md', "info.txt");
} catch (error) {
  console.log(error);
}
