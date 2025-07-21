import http from "http";

const server = http.createServer((req, res) => {
  // console.log(req.url)
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    // res.end("\
    //     <section>
    //     <h1> Home </h1>
    //     <a href='/contact>Contact Page</a>
    //     </section>");
    // res.end("<h1>Home </h1>");
    res.end("<a href='/'>Contact Page</a>");
  } else if (req.url === "/about") {
    res.end("<h2> About Section </h2>");
  } else if (req.url === "/contact") {
    res.end("<h3>Contact Page</h3>");
  } else {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    ("<h1>404 page not found: </h1>");
  }
});
// /homepage
// /about
// /contact:id
// /product?query

server.listen(8000, () => console.log("Server Up!"));
