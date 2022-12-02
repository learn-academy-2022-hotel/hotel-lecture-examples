// JavaScript Functions 12/2/2022

// Functions are snippets of code functionailty
// Function give control over when code is executed and how many times

// Driven by input and producing output

// Encapsulation - functions should only rely on the input the developer decides and not on any external factors, thie creates predictibility

// Arrow functions - the style of function we use for our stack at LEARN

// variable declaration:  var, let, const, const means we are not reassigning the variable

// name: camelCase - style guide for JavaScript, communicate intent

// equal sign: assignment operator

// parentheses: action, behavior

// arrow syntax: declares that we are creating a function, arrow is the type of function

// curly braces: executable actions, logic

// const makeCoffee = () => {
//   return "coffee is made"
// }

// all functions have to have a return
// invoke the function: makeCoffee()
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())

// what is undefined? one of the six privitive data type, a variable exists but it doesn't have a value assigned


// Input:

// placeholder called a parameter - variable that is specific to the function
// const makeCoffee = (coffeeType) => {
//   return `Your ${coffeeType} is made.`
// }
// console.log(makeCoffee())
// Your undefined is made.

// console.log(makeCoffee("latte"))
// Your latte is made.
// console.log(makeCoffee("mocha"))
// Your mocha is made.
// console.log(makeCoffee("chai"))
// Your chai is made.


// Logic:

// Pseudo coding
// create a function that takes in a coffee type and a coffee size and returns the price of my coffee
// if my coffee size is small the coffee with cost $4
// if my coffee size is med the coffee will cost $5
// if my coffee size is large the coffee will cost $6
// conditional that makes an evaluation about my coffee size
// input: parameter for coffee type and a parameter for coffee size

// const makeCoffee = (coffeeType, coffeeSize) => {
//   if(coffeeSize === "small"){
//     return `Your ${coffeeType} is $4.`
//   } else if(coffeeSize === "medium"){
//     return `Your ${coffeeType} is $5.`
//   } else if(coffeeSize === "large"){
//     return `Your ${coffeeType} is $6.`
//   } else {
//     return "Something went wrong."
//   }
// }

// console.log(makeCoffee("latte", "small"))
// Your latte is $4.
// console.log(makeCoffee("mocha", "medium"))
// Your mocha is $5.
// console.log(makeCoffee("latte", "Small"))
// Something went wrong.

const makeCoffee = (coffeeType, coffeeSize) => {
  let coffeeSizeLower = coffeeSize.toLowerCase()
  if(coffeeSizeLower === "small"){
    return `Your ${coffeeType} is $4.`
  } else if(coffeeSizeLower === "medium"){
    return `Your ${coffeeType} is $5.`
  } else if(coffeeSizeLower === "large"){
    return `Your ${coffeeType} is $6.`
  } else {
    return "Something went wrong."
  }
}
console.log(makeCoffee("latte", "Small"))
// Your latte is $4.
console.log(makeCoffee("latte", "LARGE"))
// Your latte is $6.
