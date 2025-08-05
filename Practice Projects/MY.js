// let day = 7;
// switch (day) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Invalid day");
//     }

// let username = "hassan"
// let password = "hassan"
// let age = 19;

// if (username === "hassan" && password === "hassan" && age >= 19) {
//     console.log("wellcome to page");
// } else (console.log("get loss")
// )

// let mode = white;

// if(mode ==="dark") {
//     console.log("black")
// } else if (mode ==="blue") {
//     console.log("blue");
// }else if (
//     mode==="pink"
// ) { console.log("pink")}
// else { (mode==="light")
//     console.log("white");
// }
const express = require('express')
const mongoose = require('mongoose');
const app = express;
app.use(express.json);

mongoose.connect('mongodb+srv://nh31097:BCf6eET7weXSGbFT@cluster0.ucj98.mongodb.net/userappnew');

const User = mongoose.model('user', { name: String, email: String,
    password: String
    });

app.post("/login" , function (req, res) { 
const username = req.body.username;
const password = req.body.password;
const name = req.body.name;

const extistinguser = await User.findOne({email : username});
if (extistinguser) {
    return res.status(400).send("username exist")
}

const user = new User({ 
     name: name,
     email : username,
     password : password
     });
user.save();
}) 

port(3000);