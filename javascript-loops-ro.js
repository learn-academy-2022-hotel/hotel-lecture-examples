// Javascript Loops Lecture

//  Variable Declarations and Scope

//var - global scope, can be accessed anywhere inside or outside of a block

// block is between 
//  {
//   this is code block
// }
// 

//let - only available inside the block it's defined in - it can be reassigned but not redeclared.
    // let myName = "Ney"
    // myName
//const - cannot be redclared or reassigned

// var myCat = "Kevin"

// {
//     some code
//     myCat
// }
// output: kevin

// if(true) {
//     var myName = "Trish"
//     console.log(myName)
// }
// if(true) {
//     let yourName = "Molly"
//     console.log(yourName)

// }
// if(true) {
//     let yourName = "Molly"
    
// }
// console.log(yourName)
// // lines 34-39 do not work the same as lines 29-34 because let yourName was defined and localized to that first block of code once thats closed off it no longer holds that value

// ------ LOOPS -------

// Iteration: process of repeating a task over and over until condition is met

// Info needed to set up a for loop
//  1. where to start counting
//  2. where to stop counting
//  3. how to get from the start to the stop

//  1. start (let index = 0)
//  2. stop (index < 10)
//  3. index = index + 1

// const array = (1, 2, 3, 4, 5)

// // for
// for(let i=0; i < 10; i++){
//     // javascript for + 1 = i++ , if you want every other number you would do i+=2 and so on 

// }

// const numsArray = (1, 2, 3, 4, 5)
//     for(let i=0; i<5; i++){
//         console.log("index", i, "value: ", numsArray[i])
//     }

//     for(let i = 0; 1<numsArray.length;){
//         if(numsArray[i] % 2 === 0){
//             console.log(`${numsArray} is an even number!`)
//         } 
//     }


// ------- CHALLENGES -------
// Create a for loop that logs each number from 1 - 20.
// for (let i=1; i<21; i++){
//     console.log(i);
// }
// // Create a for loop that logs every other number from 1 - 20.
// for (let i=0; i<21; i+=2){
//     console.log(i);
// }
// // Create a for loop that logs the result of each number from 1 - 20 tripled.
//  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// // for (let i=0; i<numbers.length; i++){
// //     console.log(numbers[i] * 3);
// // }
// // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// for (let i=1; i<21; i++){
//    if (numbers[i] % 2 === 0 ){
//     console.log(numbers[i])
//    } else if(numbers[i] % 2 === 1 ){
//     console.log("ODD")
// }
// }
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:

// const nums = [3, 57, -9, 20, 67]
// // Create the code that will log the largest number from the array.
// // nums.sort((a, b) => a - b)
// // console.log(nums.pop())
// // // Create the code that will log the smallest number from the array.
// // nums.sort((a, b) => b - a)
// // console.log(nums.pop())
// // Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
// for (let i=0; i < nums.length; i++){
//     console.log(nums[i] % 2);
// }
// Consider this variable

const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
var myString2 = myString.split("")
console.log(myString.slice("e"))

// Create the code that will log every other character in the string.