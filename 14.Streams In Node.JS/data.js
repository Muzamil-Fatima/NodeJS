import fs from "fs";

for (let i = 0; i < 10; i++) {
  fs.writeFileSync("./data.txt", `${i}\n`, { flag: "a" });
}
