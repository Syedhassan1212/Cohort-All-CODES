// console.log("my");

// console.log("name");

// console.log("is");



  //async 

// setTimeout(()=> {
//     console.log("syed hassan");
// }, 1000);

// function one(call_two){
//    console.log("complete step 2");
//    call_two();
// }

// function two(){
//     console.log("step two");
// }
// one(two)


let order = (call_production) =>{
    console.log("order placed");
    call_production();
};

let production = () => {
    console.log("order recieved order started");
};
order(production);