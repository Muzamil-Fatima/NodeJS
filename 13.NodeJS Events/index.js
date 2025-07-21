import EventEmitter from "events";

// Creating Instance
const customEmitter = new EventEmitter();

// 1. on: Listen/register for an event
// 2. once: listen/register for an event
// 3. emit: emit /call an event
// on or once
customEmitter.once("response", (name, id) => {
  console.log(`user: ${name} id:${id}`);
});

customEmitter.emit("response", "Ayesha", 18);
customEmitter.emit("response", "Muzamil", 18);
