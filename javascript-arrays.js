// Javascript arrays 12/1/2022

// What is a datatype?
//Predefined classification of information, building block of programming language

// Data types have properties and behavior

// console.log (4+5)
// // output: 9

// console.log("hello".toUpperCase())
// // output: HELLO

// console.log ("hello" + "!")
// //hello! --> concatenation

// console.log("hello".concat("!"))
// // passing information to a method - argument "!", argument is a generic term for information passed to a method in parenthesis

// console.log(4.concat(4))
// // Built in methods - common functionality added to language to make tasks easier and readable

//Data vs Variable:
// 7 
// console.log(7)
// var myNumber = 7
// console.log(myNumber + 8)
// //output:
// 7
// 15

// abstraction - the variable is representing the value it holds and will have properties and behavior of whatever data type it holds

// Arrays: 

// arrays are a data type that holds a collection of things, non-primitive

// [] this is an empty array
// [4]
// [true]
// ["hello"] // arrays with one thing, can be anything as long as it is a data type that JS recognizes

// [4, 5, 6, 7, 8, 9] //arrays with lots of things inside, all comma separated
// = ["hello", null, 4, 5, 8, "yo", true]

// //arrays have a length property, the number of elements inside the array
// console.log([3, 4, 5, 6, 7].length)
// // // 5

// var myArray = [3, 4, 5, 6, 7, "hello", "yo", 9, "hi", 7, true]
// // console.log(myArray.length)

// Every element in an array has a position (also called an index)
// zero index, the first placement on the left starts at the index of zero

// the last index is length - 1 or the length is the last index + 1

// console.log(myArray[5])
// // hello
// console.log(myArray[0])
// // 3
// console.log(myArray[myArray.length - 1]) // myArray.length - 1 <-- number 
// //yo
// console.log(myArray.length - 1)
// // 6

// array behaviors:

// Two categories of built in method: 1) methods methods that permanently modify the item they are called on (mutators), 2) methods that don't change the structure of the data they are called on (accessors)

// var iceCreamFlavors = ["mint chip", "cookie dough", "rocky road", "coffee"]

// //push takes an argument of the item that is added to the end of the array, modifies the array
// console.log(iceCreamFlavors)
// iceCreamFlavors.push("strawberry")
// console.log(iceCreamFlavors)
// //6
// console.log(iceCreamFlavors)

// // pop: removes the last item in the array, modifies the array
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.pop())
// // coffee
// console.log(iceCreamFlavors)

// // reverse: reverses the elements order in an array
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.reverse())
// // console.log(iceCreamFlavors)

// // // sort: alphabetizes an array of strings
// // console.log(iceCreamFlavors)
// // console.log(iceCreamFlavors.sort())
// var iceCreamFlavors = ["mint chip", "cookie dough", "rocky road", "coffee"]
// // //Accessors: 

// // //indexOf: takes an argument of the element and returns the index
// // // console.log(iceCreamFlavors)
// // // console.log(iceCreamFlavors.indexOf("cookie dough"))
// // // // 1
// // // console.log(iceCreamFlavors)
// // var indexOfCookieDough = iceCreamFlavors.indexOf("cookie dough")
// // console.log(indexOfCookieDough)
// // //1

// var iceCreamToppings = ["sprinkles", "caramel"]
// // console.log(iceCreamToppings)
// // var flavorsAndToppings = iceCreamFlavors.concat(iceCreamToppings)
// // console.log(iceCreamFlavors)
// // console.log(iceCreamFlavors)
// // console.log(flavorsAndToppings)


// // // Converting String to Arrays and Back:
// // console.log("hello hotel".split(""))
// // //splits every character
// // console.log("hello hotel".split(" "))
// // //splits based on the space character
// // console.log("hello hotel".split("e"))


// console.log(iceCreamToppings.join(" "))
// // string: sprinkles caramel
// will stringify non-string data 





//Challenges








// var groceryList = ["chips", "dip", "cookies"]
// var groceryList2 = ["granola"]

// // Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
// console.log(groceryList)
// // Write the code that will add "granola" to the end of array without altering the original array.
// console.log(groceryList.concat(groceryList2))
// console.log(groceryList)

// // Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log(groceryList.slice(0, 2))
// // Write the code that will add "beans" to the "chips" and "dip" array.
// var newList = groceryList.slice(0, 2)
// newList.push("beans")
// console.log(newList)
// // Consider the variable:
var numbers = [2, 4, 6, 8, 10]
var numbers1 = [0] 
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift("0")
console.log(numbers)

// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
console.log(numbers1.concat(numbers))
console.log(numbers)

// Consider the variable:

// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.

// Write the code that finds the index of the last appearance of the number 2.

// Write the code that returns the number at the third index.

// Consider the variable:

// var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// Create two arrays consisting of three first names of your cohort members in each.

// Write the code that sorts the names in alphabetical order.

// Write the code that sorts the names in reverse alphabetical order.

// Write the code that sorts all the names in alphabetical order in a single array.

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

// Write the code that adds the values from odd indexes into the oddIndexes array.

