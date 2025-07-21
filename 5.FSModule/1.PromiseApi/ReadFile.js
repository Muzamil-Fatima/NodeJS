import * as fs from "fs/promises";
// Read File 
try {
  const data = await fs.readFile("README.md", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
