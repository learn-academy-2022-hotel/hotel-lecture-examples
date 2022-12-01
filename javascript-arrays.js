// JavaScript Arrays 12/1/2022

// What is a data type?
// Predefined classification of information, building block of a programming language

// Data types have properites and behavior

// console.log(4 + 5)
// 9

// console.log("hello".toUpperCase())
// HELLO

// console.log(5.toUpperCase()) --> error

// console.log("hello" + "!")
// hello! --> concatenation

// console.log("hello".concat("!"))
// passing information to a method - argument "!", argument is a generic term for information passed to a method in the parentheses

// console.log(4.concat(4))
// built in methods - common functionality added to the language to make tasks easier and readable

// Data vs Variable:
// 7
// console.log(7)
// var myNumber = 7
// console.log(myNumber + 8)

// abstraction - the variable is representing the value it holds and will have the properties and behavior of whatever data type it holds


// Arrays:

// Arrays are a data type that holds a collection of things, non-primitive
// [] // this is an empty array
// [4]
// [true]
// ["hello"] // arrays with one thing, can be anything as long as it is a data type that JS recognizes

// [4, 5, 6, 7, 8, 9] // arrays with lots of things inside, all comma separated
// ["hello", null, 4, 5.8, "yo", true]

// arrays have a length property, the number of elements inside the array
// console.log([3, 4, 5, 6, 7].length)
// 5

// var myArray = [3, 4, 5, 6, 7, "hello", "yo", 9, "hi", 7, true]
// console.log(myArray.length)
// console.log("hello".length)

// Every element in an array has a position - index
// Zero index, the first placement on the left starts at the index of zero

// The last index is length minus 1 or the length is the last index plus 1

// console.log(myArray[5])
// hello
// console.log(myArray[0])
// 3
// console.log(myArray[myArray.length - 1]) // myArray.length - 1 <-- number

// console.log(myArray[6])

// console.log(myArray.length - 1)


// Array behaviors:

// Two categories of built in method: 1) methods methods that permanently modify the item they are called on (mutators), 2) methods that don't change the structure of the data they are called on (accessors)


// var iceCreamFlavors = ["mint chip", "cookie dough", "rocky road", "coffee"]

// push: takes an argument of the item that will be added to the end of the array, modifies the array
// console.log(iceCreamFlavors)
// iceCreamFlavors.push("strawberry")
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.push("strawberry"))
// 6
// console.log(iceCreamFlavors)

// pop: removes the last item in the array, modifies the array
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.pop())
// coffee
// console.log(iceCreamFlavors)

// reverse: reverses the elemnets in an array
// console.log(iceCreamFlavors)
// iceCreamFlavors.reverse()
// console.log(iceCreamFlavors)

// sort: alphabetizes an array of strings
// console.log(iceCreamFlavors)
// iceCreamFlavors.sort()
// console.log(iceCreamFlavors)

var iceCreamFlavors = ["mint chip", "cookie dough", "rocky road", "coffee"]

// Accessors:

// indexOf: takes an argument of the element and returns the index
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.indexOf("cookie dough"))
// 1
// console.log(iceCreamFlavors.indexOf("cookie"))
// -1
// console.log(iceCreamFlavors)
// var indexOfCookieDough = iceCreamFlavors.indexOf("cookie dough")
// console.log(indexOfCookieDough)

var iceCreamToppings = ["sprinkles", "caramel"]

// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors)
// var flavorsAndToppings = iceCreamFlavors.concat(iceCreamToppings)
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors)
// console.log(flavorsAndToppings)


// Coverting String to Arrays and Back:
// console.log("hello hotel".split(""))
// splits every character
// console.log("hello hotel".split(" "))
// splits based on the space character
// console.log("hello hotel".split("e"))
// [ 'h', 'llo hot', 'l' ]

// var learnStudents = "Debra Mary Jonas Joel"
// console.log(learnStudents.split())

console.log(iceCreamToppings.join(" "))
// string: sprinkles caramel
// ["sprinkles", "caramel", 5, 4, null, true]
// will stringify non-string data: sprinkles caramel 5 4  true
