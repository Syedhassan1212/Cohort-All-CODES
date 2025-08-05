const jwt = require("jsonwebtoken");

const value = {
    name: "hassan",
    accnumb: 3213432
}
//secret generate the encoded e64 which validate the encoded login with server 
const tokens = jwt.sign(value, "secret")
console.log(tokens);
const decodew = jwt.verify(tokens,"secret")
console.log(decodew);

function decode(token){
    const decoded = jwt.decode(token)
    if (decoded){
        return true 
    }else{
            return false
        }
    }
console.log(decode(tokens));


try{
    let string = "hassa,"
console.log(string.length);

} catch(e){
    
}