//  JAVASCRIPT INTRO LECTURE NOTES

// "CMD + '/' " this will comment out code (not be run by program)

// Javascript is:
//  - dynamically-typed - data types can change while they are being used
//  - interpreted languaged - read by each browser it's used on
//  - scripting language - code executed at run time

// DATA TYPES
//    6 primitive data types - building blocks of JS, cannot be broken down further
//   composite data types are collections of other data types

// - Numbers  
// - Strings
// - Booleans
// - Symbols
// - null
// - Undefined

// NUMBERS

//  - integers (positive, negative)
//  - floats (fraction or decimal)

//  Add 
// console.log()  -- prints out result of evaluation of data between parentheses

 console.log(5 + 3)
 console.log(5 -3)
 console.log(5 * 3)
 console.log( 5 / 3)

//  Modulo - returns the remainder, the % is the operator

console.log(10 % 2)
// 10 / 2 = 5 -- divides evenly, no remainder
// 10/ 3 = 3 remainder of 1

// STRINGS
//  - Text, words, numbers anything this wrapped in quotation marks

console.log("hello Hotel!")
// console.log(hello Hotel)

console.log("A") 
console.log("Today is a beautiful day to learn Javascript")

console.log("46")
console.log("42 + 15 = ",  42 + 15)

console.log("36" + 36) // output "3636"
console.log(36 + "36") // output  "3636"
// This is known as: 
// TYPE COERCION  - Forces a change to the data type.  JS changed the data type of the number to a string and concatenates it to get "3636"

// STRING CONCATENATION
//  - combines separate strings 
console.log("Hello" + "World!")
console.log("Hello " + "World!")
// console.log(hello world)

// BOOLEANS
//  - true or false; only options (these are not strings, they are their own data type)

console.log(true)
console.log(false)

// UNDEFINED
//  - declared value that has not yet been assigned

// NULL 
//  has no value!  lack of value

// Symbol
//  - used for access keys in objects

// ----------------------------------------------------- 

// VARIABLES
//  - 3 different declarations:
//  var - global variable, can be reassigned
//  let - can be reassigned
//  const - cannot be reassigned

//  When naming variables  - use descriptive names in camelCase
//  camelCase  - the first letter is lower case, all sequential words will be capitalized

// Assignment operator - single equal sign, assigning value to variable (not evaluating equality!)
        
// Assigned value - follows the equal sign and is the value that will be used when variable is called.  Can be any valid data type
    

var name = "Tricia"

var name = "Raymond"
console.log(name) // output is "Raymond"

let myFavoriteNumber = 42
console.log(myFavoriteNumber) //  output is 42
console.log(myFavoriteNumber + 10) // output is 52
console.log(myFavoriteNumber) // output is 42 (value was not reassigned on line 96)

myFavoriteNumber = 15
console.log(myFavoriteNumber)

let yourFavoriteNumber = 11
console.log(myFavoriteNumber + yourFavoriteNumber)


console.log("My favorite number is " + myFavoriteNumber)

// length property
//  - tells us how many characters the value of the variable is

 let message = "HelloWorld!"

 console.log(message.length)

//  index - tells us the location of each character within the string (return a number)
//    computers use zero indexing so the position of the first char is 0
//    to access a character at a specific index, use BRACKET NOTATION

console.log(message[5])
// charAt()
console.log(message.charAt(4)) //strings

// includes()  - checks for a subset of characters, returns a boolean
 console.log(message.includes("lo"))

//  slice() - returns a subset of characters.  Take 2 arguments: start of subset and end of the subset
 console.log(message.slice(0, 5))
 // NOT inclusive  - slices up to the character at the index given as the end point.


