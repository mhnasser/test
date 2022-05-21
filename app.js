var express = require('express')

var app = express()

app.get('/',(req,res)=>{
    console.log("Logado")  
});

  http.createServer(app).listen(80)