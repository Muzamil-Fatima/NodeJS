import * as fs from "fs/promises";

// Creating Directory
try {
  // create file
  await fs.mkdir("F:\\Zubair\\courses\\NodeJS", { recursive: true });
  console.log("File Created");
} catch (error) {
  console.log(error);
}
