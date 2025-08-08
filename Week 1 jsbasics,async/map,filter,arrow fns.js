//map,filter , arrow fns

// function sum(a,b){
//     return a + b;  

// };
//arrow function
// const sum = (a,b) => {
//     return a + b;
// }

// const ans2 = sum(1,4)
// console.log(ans2);
 
//given an array give  me new array in which every value is multiplible by 2 

let input = [1,3,5,7,9]
// solution
// let newarray = [];
// for (let i = 0; i < input.length; i++){
//          newarray.push(input[i]*2)

// }

// console.log(newarray);  

//map

// function transform(i){
//     return i * 2;
// } 

// const ans = input.map(transform);
// console.log(ans);


//2nd array
let input0 = [2,4,6,8,10]

function transform(i){
    return i * 2;
}

const ans3 = input0.map(transform);
console.log(ans3);

//filter what id if i tell you given an input array give me back all the even values from it

// let arr = [1,2,3,4,5,6,7,8]

// function filterlogic(n){
//     if (n%2 == 0){
//         return true;
//     } else{
//         return false;
//     }
// }

// const ans6 = arr.filter(filterlogic)
// console.log(`filter = ${ans6}`);


// let arr1 = [1,2,3,4,5,6,7,8]


// const ans5 = arr1.filter(function(n){
//         if (n%2 == 0){
//             return true;
//         } else{
//             return false;
//         }
//     });


// console.log(`filter = ${ans5}`);

//string

//startswith , endwith
// let name1 = ["hassan" , "ali" , "harkirat" , "ahmed"]
// const ans7 = name1.filter(function(n){
//     if (n.startsWith("h")){
//         return true;
//     } else{
//         return false;
//     }
// });
 
// console.log(ans7);