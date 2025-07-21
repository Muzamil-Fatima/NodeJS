// Blocking Code
console.log("Start");
alert("Block");
console.log("End");
// Non Blocking Code
console.log("start")
setTimeout(()=>{
    alert("Non-Blocking");
}, 1000)
console.log("End")