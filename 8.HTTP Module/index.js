import http from 'http'
// create our server
const server = http.createServer((req, res)=>{
    console.log(req);
    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404;
    // res.statusMessage = "BAD";
    // shothand for status (code, message , & header)
    // res.write(202, "Good", {"Content-Type": "text/html"});

    res.write("<h1>This is Node.js Server</h1>");

})
// Listening on port 8000
server.listen(8000, ()=> console.log("Server UP!"));
