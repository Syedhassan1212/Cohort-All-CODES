// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://nh31097:qwerty123@login.uqo3f9w.mongodb.net/")

// const user = mongoose.model('user' , {name: String, email: String, password: String})


//     const user = new user({
//         name : "Syed Hassan",
//         email:"nh310",
//         password:"syed hasd",

// })
//     user.save();


const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nh31097:qwerty123@login.uqo3f9w.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("🟢 Connected to MongoDB"))
.catch((err) => console.error("🔴 MongoDB connection error:", err));

// Define schema and model properly
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

//Insert a new user
const newUser = new User({
  name: "Syed Hassan",
  email: "nh310",
  password: "syed hasd",
});

newUser.save()
  .then(() => console.log("🟢 User saved"))
  .catch((err) => console.error("Failed ", err));
