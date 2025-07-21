import path from "path";
console.log(path.basename("c:\\node.js\\app.html"))
console.log(path.basename('c:\\node.js\\app.js', ".js"))
console.log(path.dirname("c:\\node.js\\courses\\app.js"))
console.log(path.extname("c:\\nodejs\\courses\\app.pug"));
console.log(path.join('c:', 'Muzamil-Fatima', "courses", "redux-toolkit"));
console.log(path.join('c:', 'Muzamil-Fatima', "courses", "redux-toolkit" , ".."));
console.log(path.join('c:', 'Muzamil-Fatima', "courses", "redux-toolkit" , "..", ".."));
console.log(path.normalize("c:\\courses\\redux\\\\store\\\\feature\\"))
console.log(path.parse("c:\\courses\\redux\\store\\feature\\app.js").base);
console.log(path.parse("c:\\courses\\redux\\store\\feature\\app.js").name);
console.log(path.parse("c:\\courses\\redux\\store\\feature\\app.js").ext);
