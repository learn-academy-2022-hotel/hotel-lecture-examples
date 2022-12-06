//  JAVASCRIPT HIGHER ORDER FUNCTION 12/5

//  built-in method - premade functions that some developers made that easily invokable.  Some take information, some don't. 

// console.log(true.toUpperCase())
// TypeError: true.toUpperCase is not a function
//  - wrong data type

//  What is a function?
  // little code machine, custom set of instructions/code that performs a task returns some data
  //  default is to return undefined

  // Functions don't need names.  Nameless functions are called Anonymous fxns

    // () => { }

    // What is a parameter?
      // placeholder for data being passed into the fxn
     
   // What is an argument?
    // the actual data that gets passed in
    
    // *** way to remember:

    // - P parameter - placeholder
    // - A argument - actual data 

// What is iteration?
  // - Set of instructions executed over and over until a condition is met
    // - arrays
    // - strings
    
// SYNTACTICAL SUGAR  - when developers wrap up large concepts into easy to use syntax; makes heavy-lifting code functionality "sweeter" to use.

// Higher Order Functions (HOF)

// Higher order function is fxn that takes a function as an argument
//  - used by calling on built-in methods
//  - more efficient that for loops
//  - but use in very specific circumstances.

//  ARRAY methods
//  - .forEach()
//  - .map()
//  - .filter()

//  const showArray = [ "Wednesday", "Survivor", "Wheel of Fortune", "This Old House", "Severance", "Westworld" ]

 const numsArray = [ 5, 8, 15, 36, 42]

//----- forEach ----
//  - will execute something once per item in the array
//  - take anonymous function as an argument

// showArray.forEach((value) => { 
  // console.log(`You like the show ${value}`)
// })
//  output:  You like the show Wednesday
// You like the show Survivor
// You like the show Wheel of Fortune
// You like the show This Old House
// You like the show Severance
// You like the show Westworld

// Anonymous fxn also takes an argument - required parameter is "value"
  // - value is the value of the element at the current index in iteration process

 // - index - gives us access to the integer that represents the value's index  OPTIONAL

//  showArray.forEach((value, index) => { 
//   // console.log(`You like the show ${value}. It's at position ${index}`)
// })

// // - array - this array you're calling the HOF on (in this case, showArray) OPTIONAL

// showArray.forEach((turtle, _, horse) => { 
  // console.log(`You like the show ${turtle}, in the array ${horse}`)
// })cl

// THE ORDER WILL ALWAYS BE  value, index, array - names can be anything - they are placeholders

// forEach doesn't return anything. You can only get the values by console.loging.  

//  MAP
//  - similar to forEach, more useful
//  - transforming or displaying each value in array
//  - returns a NEW array of the same length
// - must assign our map to a new variable

const threesArray = [3, 6, 9, 12, 15]

const multiplyBy = threesArray.map((value)=> {
  if(value % 2 === 0){
    return value * 2
  } else {
    return "nope"
  }
})

// console.log(multiplyBy2) // this is not a function, so we don't have to pass it anything
//   output:  [ 6, 12, 18, 24, 30 ]

//  -- using map in a dynamic function (reusable - can pass any array of numbers into it)
// let numsArray1 = [ 3, 7, 89, 2, 14]

// const newFunction = (arrayOfNumbers) => {
//   return arrayOfNumbers.map((value)=> {
//   if(value % 2 === 0){
//     return value * 2
//   } else {
//     return "nope"
//   }
// })
// }

// console.log(newFunction(threesArray)) // [ 'nope', 12, 'nope', 24, 'nope' ]

// console.log(newFunction(numsArray1))  //[ 'nope', 'nope', 'nope', 4, 28 ]

// when you're only using one line of code we don't need curly brackets or return

// const multiplyBy2 = threesArray.map(value => {
//     return value * 2
// })

// --- same as -----

//  const multiplyBy2 = threesArray.map(value => value * 2)
// -------   FILTER ----------

// .filter - filters an array based on some condition we give it
//  - returns a new array but subset of the original array
//  - built in if statement. 
// -  TRUTHY AND FALSY 


const showArray = [ "Wednesday", "Survivor", "Wheel of Fortune", "This Old House", "Severance", "Westworld" ]

const searchW = showArray.filter((value) => {
   return value.toUpperCase().includes("W")
})
const searchW2 = showArray.filter((value) => {
   return value.includes("W") || value.includes("w")
})

// console.log(searchW)

// Create a fxn that takes in an array of mixed data and returns an array of only odd numbers

const mixedDataArray = [ 3, "hi", true, 50, 4, null, "Hotel", 42, false, "yo", 15 ]

// create a fxn name onlyOdds
// parameter is an array - mixed data types
// inside the fxn we'll create a new variable oneType - placeholder of the filter by data type number
//  use filter to iterate 
// filter over oneType to get the odds
//  return the final variable

// typeof returns a string indicating the type of the operand's value

console.log(typeof 42) // number

const onlyOdds = (array) => {
  let oneType = array.filter(value => {
    return typeof value === "number"
  })
  let odds = oneType.filter(value => {
    return value % 2 !== 0
  })
  return odds
}

console.log(onlyOdds(mixedDataArray))