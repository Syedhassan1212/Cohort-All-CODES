//q1 simple 
// let name = prompt("enter name first and last")
// console.log(`your name is ${name}`);
// q2 if else
// let stgsd = prompt("gender")
// if (stgsd === "male") {
//     console.log("you are male");
    
// } else console.log("you female");

//q3 loop
// for (let index = 0; index <= 1000; index++) {
//    console.log(index);
    
// }

//Arrays

// let markstd1 = 97;
// let markstd2 = 84;

// let mark = {
//     std1: 76,
//     std2:43,
// }
// console.log(mark);
// console.log(markstd1, markstd2);

//instead of this

// let mark = [2 ,3 ,4, 5, 6]
// console.log(mark);

// console.log("lenght is ", mark.length);

//{ finding even in array }
//q1
// let arr = [10,12,17,18,16]

// for (i = 0; i <arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//     console.log(arr[i]);}
// }


//q2

// let names = ["hassan" , "ali", "ayesha", "ayesha"];
// let gender = ["male", "male", "male", "female"];

// for (let i = 0; i < names.length; i++) {
//     if (gender[i] == "male") {
//         console.log(names[i]);
//     }
// }

//objects
// let hassan = {
//     names: "syedhassan",
//     gender: "male",
//     class: 13,
//     favFood: "burger"
// };
// //array of object

// let persondata = [{
//     names: "syedhassan",
//     gender: "male",

// }, {
//     names: "ali",
//     gender: "male",

// }, {
//     names: "ayesha",
//     gender: "female",

// }, {
//     names: "waqas",
//     gender: "male",

// }]

// for(i = 0; i < persondata.length; i++) {
//    if (persondata[i]["gender"] == "male") {
//     console.log(persondata[i]["names"])
//    }
//    }

// funcions

// function sum(a, b) {
//   //do something with the input and return an output
//   const sumvalue = a + b;
//   return a + b;
// }
// // const value = sum(1,2)
// const value = sum(19999999999999999999999999999,299999999999999999999)
// console.log(value);

//example
//01
// function sum(a, b) {
//     let sumvalue =  a + b
//     return sumvalue
//     //return a + b;
// }

// let value = sum(18, 20)
// console.log(value);

//02

// function sum(num1 , num2, fntocall) {
//     let result = num1 + num2;
//     fntocall(result);
// }

// function displayResult(data) {
//     console.log("sum = " + data);
// }

// function displaypassive(data){
//     console.log("the sum will " + data);
// } 
// let ans = sum(1 , 2, displayResult);//called callbacks   

//03

// function calculateArthimatic(a, b, type) {
//     if (type == "sum") {
//          let value = sum(a, b);
//          return value;
//     }
         
//     if (type == "minus") {
//         let value = sub(a, b);
//          return value;
//     }
// }
// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }
// let value = calculateArthimatic(1, 2, "minus");
// console.log(value);

//second method

// function calculateArthimatic(a, b, arthimaticfinalfunction) {
//     let ans = arthimaticfinalfunction(a,b)
//     return ans; 
// }
// function sum(a, b) {
//     return a + b;
// }

// let value = calculateArthimatic(1, 2, sum);
// console.log(value);//using function in input or callback in diff function
  
// setTimeout
 function greet() {
    console.log("hello ");
    
 }
//  setInterval(greet, 1 * 1000)
 setTimeout(greet, 1 * 1000)
