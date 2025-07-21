import * as fs from "fs/promises";
// Remove Folder/ Directory
try {
  await fs.rmdir("F:\\Zubair", { recursive: true });
} catch (error) {
  console.log(error);
}
