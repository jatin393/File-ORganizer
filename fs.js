let fs  = require("fs") ;
let file  = fs.readFileSync("abc.txt") ;
console.log(file + "") ;
 fs.writeFileSync("cde.txt","Not You Then Who Are YOu") ; 
fs.appendFileSync("abc.txt","Good Morning Apple World") ; 
fs.unlinkSync("cde.txt") ;
// fs.readFileSSync("cde.txt") ;