var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.config();

console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);

app.use(function(req,res,next){
    var method = req.method;
    var path = req.path;
    var ip = req.ip;
    console.log(method+" "+path+" - "+ip);
    next();
})

app.use(express.static("public"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    var absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})

app.get("/json", function(req,res){
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({"message": "HELLO JSON"});
  }else {
      console.log(process.env.MESSAGE_STYLE);
    res.json({"message": "Hello json"});  
  }
  
})

app.get("/now", function(req,res,next) {
  req.time = new Date().toString();
  next()
}, function(req, res){
    res.json({"time": req.time});
});






app.listen(3000);




















 module.exports = app;
