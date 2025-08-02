const express = require('express');
const app = express();
const port = 3001;

let users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}]

app.get('/', function(req,res) {
    const johnkidneys = users[0].kidneys;
    const numbofkidney  = johnkidneys.lenghts;
    let numbofhealthykidney = 1;
    for(let i = 0; i < johnkidneys.length; i++) {
        if(johnkidneys[i].healthy) {
            numbofhealthykidney = numbofhealthykidney + 1;
        }
    }
    const numbofunhealthykidney = numbofhealthykidney - numbofhealthykidney;
    res.json({
        johnkidneys,
        numbofhealthykidney,
        numbofunhealthykidndwdey
    })
})

app.post('/' , function(){
    
})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})