const jwt = require("jsonwebtoken");

const value = {
    name: "hassan",
    accnumb: 3213432
}
//secret generate the encoded e64 which validate the encoded login with server 
const token = jwt.sign(value, "secret")
console.log(token);
const decode = jwt.verify(token,"secret")
console.log(decode);
try{
    let string = "hassa,"
console.log(string.length);

} catch(e){
    
}