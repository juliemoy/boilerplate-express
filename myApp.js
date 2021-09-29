var express = require('express');
var app = express();


console.log("Hello World");

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    var absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})

app.get("/json", function(req,res){
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({"message": "HELLO JSON"});
  }else {
    res.json({"message": "Hello json"});  
  }
  
})




























 module.exports = app;
