import * as fs from "fs/promises";
import { console } from "inspector";

// Read File
try {
  const data = await fs.readFile("README.md", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
