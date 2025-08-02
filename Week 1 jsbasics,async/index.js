// // lenght
// let a = "hassan";
// console.log("the lenght of this string is", a.length);

// indexOf
// function findIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.indexOf(target));
//   }
//   findIndexOf("Hello World world", "world");

// slice
// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end));
// }
// getSlice("Hello World", 2, 4);

// let a = "syed hassan"
// let b = a.slice(0 , 5)
// console.log(b); 

// let a = "syed_hassan"
// let b = a.substr(2 , 5); //it will show index till last digit even if you dont want
// let c = a.slice(2 , 5); //it will show index between digits 
// console.log(b);
// console.log(c);

//replace

// let index = "hello world"
// let a = index.replace("hello" , "hassan")
// console.log(a);

// function replaceString(str, target, replace,) {
//   console.log("og string" , str)
//   console.log(str.replace(target, replace));
// }

// replaceString("syed hassan" ,"hassan", "world")

//split
// function splitString(str, strt) {
//   console.log(str.split(strt));
//   console.log()
  
// }
// splitString("syed hassan, japan" , ",")
// let a = "syed hassan,hussain"

// let b = a.split(",");

// console.log(b);

//trim startin and endin

// let a = "      syed hassan      ";

// let b = a.trim()
// console.log(b)

//numbers
//convert string into numbers

// explainParseInt("42");
// explainParseInt("42px");
// explainParseInt("3.14");
 
//array

// let a = [1, 2, 3,]

// a.push(2 , "hasan") // adding item in existin array in last position 

// console.log(a); 

// let a = [1, 2, 3,]

// a.unshift(2 , "hasan") // adding item in existin array in front position 

// console.log(a); 

// let a = [1, 2, 3,]

// a.pop() // remove item in existin array in last position 

// console.log(a); 

// let a = [1, 2, 3,]

// a.shift() // remove item in existin array in front position 

// console.log(a); 


//concat

// let initialArray = [1, 2, 3]
// let SecondArray = [4, 5, 6]
// let b = (initialArray.concat(SecondArray));
// console.log(b);

// function array(first , second) {
//     console.log("enter arrays" , first , second);
//     let thirdArray = first.concat(second)
//     console.log(thirdArray);
// }

// array([1, 2, 3] , [4 , 5, 6])

//for each conve

// let initiatArray = [1, 2, 3]

// function  abc (str) {
//     console.log(str);
// }

// initiatArray.forEach(abc)

//call back
// function log1(){
//     console.log("hello world");
// }

// function log2(){
//     console.log("syed hassan");
// }

// function namesome(fn){
//     fn()
// }

// namesome(log1) 

//map(), filter(), reduce(), find(), sort()

//classes

// class animal {
//     constructor (name ,legcount, sound) {
//         this.name = name;
//         this.legcount = legcount;
//         this.sound = sound;
//     }
//     speak() {
//         console.log("this animal" + this.sound);
//     }
// }

// let cat = new animal("cat" , 4 , "meow meow");

// let dog = new animal("dog" , 4 , "wouf wouf");

// cat.speak();

//dates   

// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getSeconds());
//   console.log("time in milisec since 1970" , currentDate.getTime());


//   function calculateSum() {
//     let a = 0;
//     for (let i = 0; i<10000000; i++) {
//         a = a + i
//     }
//     return a;
//   } 

//   const beforeDate = new Date();
//   const beforetimeinms = beforeDate.getTime();
//   calculateSum ()

//   const aftertime = new Date();
//   const aftertimeinms = aftertime.getTime();

//   console.log(aftertimeinms - beforetimeinms);

//JSON<< JavaScript Object Notation

// const user = '{"name": "hassan" , "age": 19 , "gender": "male"}'


// //json parse
// //json strinify

// const finalstring = JSON.parse(user)
 
// console.log(finalstring["gender"]);

// let a = {
//     name: "hassan",
//     gender: "male",
//     age: 19
// }
// let finalstring = JSON.stringify(a)
// console.log(finalstring["name"]);

//objects

//loops
// ans = 0;
// for (let i = 0; i <=100; i++) {
//     ans = i + ans;
// }
// console.log(ans);

// function findsum(n) {
//     let ans = 0;
//     for (i = 1; i <= n; i++){
//        ans = i + ans;
//     }
//     return ans;
// }
// let ans = findsum(100)
// console.log(ans);

// function square(n) {
//     return n * n;
    
// }

// function cube(n){
//     return n * n * n;
// }

// function sumofnumber(a , b, fn) {
//     let square1 = square(a);
//     let square2 =  square(b);
//     return square1 + square2;
//}
// function sumofnumber1(a , b) {
//     let square1 = cube(a);
//     let square2 =  cube(b);/     return square1 + square2;
// }

// let sum = sumofnumber(1 , 2 , cube);
// console.log(sum);
// let ans = sumofnumber(2,2)
// console.log(ans);  

// async 

// function findsum(n) {
// let ans = 0;
// for (let i = 0; i <n; i++){
//     ans +=i;
// }
// return ans;
// }
// function findsumtill100(){
//     console.log(findsum(10));
// }
// //busy waiting
// setTimeout(findsumtill100 , 10000)
// console.log("hello world");

// const fs = require("fs");

// fs.readFile("a.txt" , "utf-8", function (err , data) {
//     data = data + "syed hassan"
//     fs.writeFile()  
// })
// console.log(readFile);


//promises

//  function myown(fn , duration) {
//     setTimeout(fn , duration);
//  }

//  myown(function() { 
//     console.log("hell0");
 
//     myown(function() {
//        console.log("world");

//        myown(function () {
//         console.log("hassan");
//         }, 3000  )
//            }, 2000)
//               }, 1000) 

// function myown(callback , duration) {
//     setTimeout (callback , duration);
// }

// function promise(duration) {
// const p = new Promise (function(resolve) {
// setTimeout(function(){
//     resolve();
// }, duration)
// } );
// return p;
// }
// //promise 
// let ans = promise(1000)
// ans.then(function(){
//     console.log("timeout end");
// }) //1:30:10
//main thing is to learn calling promise rather learning syntex
