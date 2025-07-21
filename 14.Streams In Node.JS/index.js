// 64k data
import { createReadStream } from "fs";
import Stream from "stream";
// const stream = createReadStream("./data.txt", { highWaterMark: 5 });
const stream = createReadStream('./data.txt', {encoding:'utf8'})

stream.on("data", (data) => {
  console.log(data);
});
