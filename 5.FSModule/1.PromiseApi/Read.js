import * as fs from "fs/promises";
try {
  // read file
  const files = await fs.readdir("f:\\Farhan Ali\\Math");
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}
