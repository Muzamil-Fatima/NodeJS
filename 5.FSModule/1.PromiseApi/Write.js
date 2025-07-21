// Create and write Files
import * as fs from "fs/promises";

try {
  await fs.writeFile("README.md", " Node.js File");
} catch (error) {
  console.log(error);
}
