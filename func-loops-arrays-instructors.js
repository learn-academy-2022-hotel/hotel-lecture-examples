// Functions, Loops, Arrays Hotel 12/5/2022

// Functions - can take arguments or be self invoking, little logic machines with reusable, dynamic code

// Arrays - Have an index, have built-in methods, ordered list of values

// Loops - iteration that repeats until a condition is met or predetermined number of times

// For loop - starting point (initialization), stopping point (condition, range), and increments (how to iterate through the array) and then the code block that has the executable code or actions to take

// PROMPT
// It's Christmas. Let's give all the instructors a gift. Create a function that returns an array with a gift next to each value.
// let instructionTeam = ["Sarah", "Austin", "Trish", "Elyse", "Charlean", "Nicole"]

// PSEUDOCODE
// declare a function named hotelGoodies
// inout/parameter - an array of strings
// expected output - new array with a gift 🎁 next to each value
// ["Sarah 🎁", "Austin 🎁", "Trish 🎁", "Elyse 🎁", "Charlean 🎁", "Nicole 🎁"]

// FUNCTION

// initial build of function
  // const hotelGoodies = (array) => {
  //   return array
  // }

  // console.log(hotelGoodies(instructionTeam))
  // output: [ 'Sarah', 'Austin', 'Trish', 'Elyse', 'Charlean', 'Nicole' ]

// // adding the gitbox to the array 
//   const hotelGoodies = (array) => {
//     return array + " 🎁"
//   }
  
//   console.log(hotelGoodies(instructionTeam))
//   // output: Sarah,Austin,Trish,Elyse,Charlean,Nicole 🎁
  // need to iterate across the array to access each value

// // iterating across the array 
// const hotelGoodies = (array) => {
//   // for loop for counting
//   for(let i = 0; i < array.length; i++){
//     // use bracket notation to abstract each value
//     return array[i] + " 🎁"
//   }
// }

// console.log(hotelGoodies(instructionTeam))
// // output: Sarah 🎁
// return makes the for loop stop when the first element is given
// need to store the values in a new array


// storing values in a new array 
// const hotelGoodies = (array) => {
//   // create an empty array to store the values
//   let arrayTwo = []
//   // for loop for counting
//   for(let i = 0; i < array.length; i++){
//     // use push() to add each value to the array
//     arrayTwo.push(array[i] + " 🎁")
//     // debugging tool
//     console.log(arrayTwo)
//         // print out from the console.log of the for loop
//         // 0th index: [ 'Sarah 🎁' ]
//         // Oth, 1st index: [ 'Sarah 🎁', 'Austin 🎁' ]
//         // Oth, 1st, 2nd index: [ 'Sarah 🎁', 'Austin 🎁', 'Trish 🎁' ]
//         // Oth, 1st, 2nd, 3rd index: [ 'Sarah 🎁', 'Austin 🎁', 'Trish 🎁', 'Elyse 🎁' ]
//         // Oth, 1st, 2nd, 3rd, 4th index: [ 'Sarah 🎁', 'Austin 🎁', 'Trish 🎁', 'Elyse 🎁', 'Charlean 🎁' ]
//   }
//   // return the new array outside of the for loop
//   return arrayTwo
// }

// console.log(hotelGoodies(instructionTeam))
// output: [ 'Sarah 🎁', 'Austin 🎁', 'Trish 🎁', 'Elyse 🎁', 'Charlean 🎁' ]

// REFACTOR
let instructionTeam = ["Sarah", "Austin", "Trish", "Elyse", "Charlean", "Nicole"]

const hotelGoodies = (array) => {
  let arrayTwo = []
  for(let i = 0; i < array.length; i++){
    arrayTwo.push(array[i] + " 🎁")
  }
  return arrayTwo
}

console.log(hotelGoodies(instructionTeam))