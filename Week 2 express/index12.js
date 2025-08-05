const express = require('express')
const port = 30007
const app = express();

app.get('/', function(req,res){
    res.send('hello world')
})

app.listen(`port is listen at ${port}`)