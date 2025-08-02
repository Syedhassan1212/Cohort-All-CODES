//console.log("hello");


//Varibles(let.var.const)//

//let can change value and const dont/

//let a = 1;//
//a = 2;//
//console.log(a);//
//const a = 4;//
//a = 2;//
//console.log(a);//

//Data types (string.numbers.booleans)//

//strings//
//let names = "hassan";//

//number//
//let age = 19;//

//boleans true or false//
//let job = false;//
//result//
//console.log("my name is" + names + " and age is " + age + "have job? " + job)//

//practice

/*let student = {
    fullname: "syed hassan",
    age: 19,
    inter: 84,
    admitted: true,
};
console.log(student)

const product = {
    productname: "black pen",
    stars: 4,
    dealoftheday: true,
    pricediscounted: 270,
    msrp: 285,
    discount: 5,
};
console.log(product.dealoftheday);*/


/*OPERATORS +-*/
// let a = 2
// let b = 3
// console.log("2+3=", a - b);
// /* power*/console.log("2**3=", a ** 3);

//increment ++ ddecriment--
//[++ a=a+1] [-- a=a-1]
// let a = 9
// a++;
// console.log(a);

/*ASSIGNMENT OPERATORS +-*/
//let a = 5
//let b = 3
// a += 4 is like a = a + 4
// a -= 4 is like a = a - 4
// a *= 4 is like a = a * 4
// a %= 4 is like a = a % 4
// a **= 4 is like a = a ** 4
// a /= 4 is like a = a / 4
//console.log(a);

//comparision operators

// //equal to ==
// let a = 5
// let b = 4
// console.log(a == b) //print will be false

// not equal to !=
// let a = "5"
// let b = 4
// console.log(a != b) //print will be true
// if i add string ex 5 in "5" string form it will convert into number then compare leading to true or false if number in string form same as number so to solve this we use equal to and type or not equal to and type

// equal to and type ===
// let a = 4 //number
// let b = "4" //string
// console.log(a === b) //print will be false

// not equal to and type !==

// let a = "5" //number
// let b = 5 //string
// console.log(a !== b) //print will be false

// >,>=,<,<=

// let a = 3
// let b = 9
// console.log(a > b)

//logical operators

//logical AND && both should be true otherwise false

//       Truth Table 

// A	  B	      A && B   A||B   !
// true	  true	= true     true   false
// true	  false	= false    true   false
// false  true	= false    true   false
// false  false	= false    false  true

// let a = 3
// let b = 4

// let cond1 = a > b; // 3 > 4 less false
// let cond2 = a !== b ; //false

// console.log( a > b && a === b)
//           or
// console.log( cond1 && cond2)

// OR || either one need to be true if both false then false
// let a = 3
// let b = 4 

// let cond1 = a > b; // 3 > 4 less false
// let cond2 = a === 3 ; //true

// // console.log( a > b && a === b)
// //           or
//  console.log( cond1 || cond2)

//NOT !

// let a = 3
// let b = 3
// console.log (!(a==b))

//CONDITIONAL IF

//USING if 

// let age = 120 ;
// if (age <= 19) {
//     console.log("you are 19")
// } 

//  if (age > 19) {
//      console.log("your not 19");
// }
//else (console.log("you are not 19"))

//  let mode = "dark"
//  let color;
//   if (mode === "dark") {
//      console.log("black");
//  } else {
// color = "white"
//}

// if (mode === "light") {
// console.log("white");
//   }

// console.log(color);

 //else

//  let age = 19;
//   if (age >= 18) {
//     console.log("you can vote");
//   } else {
//     console.log("you can not vote");
//   }

//making even odd
//  let num = 2;

//  if (!(num%2=== 0)) {
//     console.log(num,"is odd mothafucka!!!")
//  } else {
//     console.log("even bitch")
//  }

//else if

// let color;
// let mode = "light"

// if(mode ==="dark") {
//     console.log("black")
// } else if (mode ==="blur") {
//     console.log("blue");
// }else if (
//     mode==="pink"
// ) { console.log("pink")}
// else { (mode==="light")
//     console.log("white");
// }
//ternary operation

// let age = 14
// let mode = age >= 18 ? "adult" : "not adult";
// console.log(mode)
//using if else to see
// let age = 65

// if (age < 18) {
//     console.log("teenage")
// } else if (age >= 18 && age < 60){
//     console.log("you adult");
// } else { console.log("your old")
// }
//switch
//use to make if else easy
// Let's say 1=Monday, 2=Tuesday, 3=Wednesday, etc.

// let day = 8;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// let grade = 3
//  switch (grade) {
//     case 1:
//         console.log("passed 84%");
//         break;
//     case 2:
//         console.log("passed 79%");
//         break;
//     case 3:
//         console.log("fail 34%")
//         break;
//     case 4:
//         console.log("suspended visit faculty");
//         break;
//     default:
//         console.log("visit faculty for result");
//         break;
//  }

//alert

//("ello") makes alert

//prompts

// let names = prompt("hello")
// console.log(names);
// ques 1
// let a = prompt ("type number")
// if (a %5 ===0){
//     console.log("is dividable by 5");
// } else {
//     console.log("not dividable"); 
// }

//ques 2

// let grade = 23

// if (grade >= 80 && grade < 100){
// console.log("a");
// }
// else if (grade >= 70 && grade <= 79){
// console.log("b");
//     }
// else if (grade >= 60 && grade <= 69){
// console.log("c");
// }
// else if (grade >= 50 && grade <= 59){
//     console.log("d");
// }
// else if (grade >= 0 && grade <= 49){console.log("f");
//}

// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

//lecture 3

//loop

//for loop

// for (let i = 1; i<=5; i++) {
//     console.log ("*")
// // }
// let sum = 100;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i
// }
// console.log("sum = " + sum)

//while loop

// let i = 1;
// while (i <= 5) {
//     i++;
//     console.log(i)
//     }

// Do while loop

// let i = 10;
// do {
//     console.log("hello");
//     i++
// } while (i <= 20);

// for of loop

// let str = "hassan";

// let size = 0;
// for (let i of str) {   //iterate => character
//     console.log("i" , i);
//     size ++

// }
// console.log("size = " + size);


// for in loop

// let student = {
//     name: "hassan",
//     age: 19,
//     isPassed: true,
//     class: "2nd semister",
// }
// for (let key in student){
//     console.log("key is " , key , "+" , "value is " , student[key]);
// }

//practice 

// for (i = 0; i <= 100; i++) {
//     if (i%2===0) /* even number*/ {
//         console.log(i);
//     } // just add !==2 for odd
  
// }

//or

// for(i = 0; i <= 100; i+=2 ) {
//     console.log(i);
// }


//Q2

// let gamenum = 15;

// let usernumb = prompt("guess any numb");


// while (usernumb !== gamenum) {
//     usernumb = prompt("guess again numb");
// }

// console.log("you won");

//strings

// let str = "hassan";
// let str1 = 'hassahddfhhfn'
// console.log(str , str1);

// str1.length; //to calculate lenght 

// console.log(str1[7])


// //template literate


// let specialstring = `this is sentence`

// let std = {
//     names: "Hassan",
//     age: 19,
// }

// console.log("name is" , std.names , "age is" , std.age);

/* also called string interpolation */

// let output = `name is ${std.names} age is ${std.age} old ${1 + 2 + 3}` 
// console.log(output); 


// escape character \n 
// let str = ("has\nsan");
// console.log(str.length);

// //tab \t
// console.log("has\tsan");

//string methods

//uppercase / lowercase

// let str = "hello"
// let newstr = str.toLowerCase(); 
// console.log(str);
// console.log(newstr);

//trim methods

// let str = "              hello world               ";
// console.log(str.trim());

//slice method 

//let str = "0123456";
//console.log(str.slice(0));\

//concat string
// let str1 = "hello ";
// let str = "world";
// let res = str1.concat(str)

// console.log(res);

//replace string

// let str = "hello";

// console.log(str.replace("h" , "y"));


// let str = "12345";

// console.log(str.charAt(1)); 

//practice 
//q1
// let fullname = prompt("enter username without space");

// let username = "@" + fullname + fullname.length;
//  console.log(username);

//lecture 4

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

// let hero = ["hulk", "ironman", "spiderman", "hawkeye"]
// console.log(hero);

//array indics

//let mark = [2 ,3 ,4, 5, 6]
//console.log(mark[3]);

//changing value in array

// let mark = [2 ,3 ,4, 5, 6]

// console.log(mark[1] = 7);

// console.log(mark[1]);

// console.log(mark.length);

//looping over Array 
// let arr = ["hello", "hassan", "world"]
// for (let idx = 0; idx < arr.length; idx++) {
//     console.log(arr[idx]);
// }

// let students = ["hassan", "hamad", "ahmed", "ali", "muhammad"]

// for (let student of students) {
//     console.log(student)
// }


//question
// let marks = [85, 97, 22, 37, 76, 60]
// let sum = 0;

// for (let val of marks) {
//   sum += val;
// } 

// let average = sum/marks.length;

// console.log(`the average mark is: ${average}`)

//  let item = [250, 645, 300, 900, 50];
 //using for of loop
//  let ind = 0;

//  for ( val of item){
//     let offer = val / 10;
//     item[ind] = item[ind] - offer;
//     console.log(`value after offer = ${item[ind]}`);
//     ind++;
//     }  

//using for loop
// for (i = 0; i < item.length; i++) {
//     let offer = item[i] / 10;
//     item[i] -= offer;
// }

// console.log(item);

//methods in array
//push add data in end array
// let veg = ["apple", "banana", "watermelon"]

//using push
// veg.push("mango");

// console.log(veg);

//pop (delete item in array at end)

// let deleteitem = veg.pop();
// console.log(veg);
// console.log(deleteitem);//use to return deleted item

//to string () convert array to string

// let names = ["hassan", "hello", "world", 7 , 9, 0 ]

// console.log(names.toString());

//concat array join multiple arrays 

// let fruit = ["apple", "banana", "mango"]
// let veg = ["broclli", "tomato", "potato"]
// let names = ["hassan", "hello", "world", 7 , 9, 0]

// let plants = fruit.concat(veg).concat(names);

// console.log(plants.toString())

//unshift add item in array at starting
// let fruit = ["apple", "banana", "mango"]
// let veg = ["broclli", "tomato", "potato"]

// let hmm = veg.unshift("garloc");
// console.log(veg);
// console.log(veg);

//slice() return piece of array

// let arr = ["helllo", "wprld", "hassan"]

// console.log(arr.slice(0 , 3));

//splice()  change orignal array (add, remove, replace)

// let aar1 = [1, 2, 3, 4]
// console.log(aar1);


let a = 70;
for(let i = 1; i <= 100; i++){
    let b = a + i;
    console.log(b);
}
