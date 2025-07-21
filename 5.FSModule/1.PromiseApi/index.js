import * as fs from "fs/promises";
// Get File information
try {
    const info = await fs.stat("info.txt")
    // console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile());
} catch (error) {
  console.log(error);
}
