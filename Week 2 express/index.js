const express = require('express')
const bodyParser = require("body-parser");
const port = 3000
const app = express();



app.get('/', function(req,res){
    res.send('hello world')
})

app.get('/hassan', function(req,res){
    //header,body ,quary parameter =req
    res.json({
        name:"hassan",
    age:12
})
})

app.get('/html', function(req,res) {
    res.send('<b>hello this is html text</b>')
})
//using timeout
app. get('/timeout' , function (req , res) {
    setTimeout(function (){
        res.send('text will be print after 5 sec wait')
    } , 5000)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})
//fs = filesystem
//fetch
//fetch("https;//:3000localhost" , {method:"post"},then(function)
