//UGLY WAY TO WRITE ROUTES
// const express = require('express')
// const app = express();
// const port = 3100;

// app.get('/login',function(res,req) {
//     const username = req.headers.username;  
//     const password = req.headers.password;
//     const kidneyid = req.quary.kidneyid

// if(username != "hassan" && password != "pass"){
//     res.statusCode(403).json({
//         msg:"user pass not valid "
//     });
//     return;
// }
  
// if (kidneyid != 1 && kidneyid != 2 ) {
//     res.stutus(411).json({
//         msg: "wrong inputs"
//     });
//     return;
// }
// res.send("you heart fine")
 
// });

// app.listen(port, () => {
//     console.log(`example app listening on port ${port}`)
// })

//SLIGHLY BETTER 

// function userpassvalidator(username , password) {
//     if(username != "hassan" && password != "pass") {
//     return false;
//     }
//     return true
// }

// function kidneyidvalidator(kidneyid) {
//     if(kidneyid != 1 && kidneyid != 2) {
//     return false;
//     }
//     return true
// }

// app.get('/login' , fumction (res,req) {
//     const kidneyid = req.quary.kidneyid
//     if ()

// }).....continue

//cleaner way to route

//calculating requist

// const express = require('express');
// const app = express();
// port = 3000;
// //rate limiting 
// let numberofrequest = 0;

// function calculaterequest(req,res,next) {
//     numberofrequest++;
//     console.log(numberofrequest);
//     next();
// }
//     
// app.get('/login,calculaterequest(res,res,post){
//  })

// app.listen(port, () => {
//          console.log(`example app listening on port ${port}`)
//      })


//using middleware

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.post('/login', function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
});
//globle catches hide extra detail in error screen
app.use(function(err , req , res , next){
    res.json({
        msg : "error happen i am fucking sorry"
    })
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


//zod 1:15:00

// const express = require("express");
// const zod = require("zod")
// const app = express();
// app.use(express.json());
// const port = 3000;

// const schema = zod.array(zod.number());

// app.post('/login', function(req, res) {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys) 
//     const kidneyLength = kidneys.length;
//     res.send({ response });
// });


// //globle catches hide extra detail in error screen
// app.use(function(err , req , res , next){
//     res.json({
//     msg : "error happen i am fucking sorry"
//     })
// });


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
 

// const zod = require("zod")
// function validatesystemLOGIN(obj){
// const schema = zod.object({
//     email : zod.string().email(),
//     password : zod.string().min(8)
// })
// const responce = schema.safeParse(obj)
// console.log(responce);
// }

// validatesystemLOGIN({
//     email : "nh31097@gmail.com",
//     password: "hassan123"
// })

//authentication 1:47:00

