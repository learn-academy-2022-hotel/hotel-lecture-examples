// JavaScript Objects 12/7/2022

// Data types
// - primitive and non-primitive
// - collection of primitive
// - primitive: string, undefined, number, null, Boolean, symbol
// - non-primitive: object (collections: arrays, objects)

// h1 {
//   color: "blue"
// }

// Objects - curly braces, key value pairs
// {myKey: "hello hotel"} base structure for an object
// symbol - a unique identifier (key in an object)

// {key1: "value1", key2: "value2", key3: "value3"}
// as many key value pairs as needed, comma seprated, inside curly braces

// let myObject = {key1: "value1", key2: "value2", key3: "value3"}
// dropping each key value pair onto its own line makes a large object more readable
// let myObject = {
//   key1: "value1",
//   key3: "value3",
//   key2: "value2",
//   key4: "value4"
// }
// console.log(myObject)
// dot notion
// console.log(myObject.key3)
// --> value3
// console.log(myObject.key1)
// console.log(myObject.key2)


let breakfast = {
  item1: "bacon",
  item2: "chorizo",
  item3: "eggs",
  item4: "cereal",
  item5: {
    beverage1: "protien shake",
    beverage2: "coffee",
    beverage3: {
      juice1: "pomegranate",
      juice2: "cranberry",
      juice3: "oj"
    }
  }
}
// nested object
// console.log(breakfast)
// console.log(breakfast.item2)
// --> chorizo
// console.log(breakfast.item5.beverage2)
// --> coffee
// console.log(breakfast.beverage2)
// --> undefined
// console.log(breakfast.item5.beverage3.juice1)
// --> pomegranate

// destructuring - creating a variable with a key and assigning it the pathway
// console.log(breakfast.item5.beverage3.juice1)
// console.log(breakfast.item5.beverage3.juice2)
// console.log(breakfast.item5.beverage3.juice3)

// let { juice1 } = breakfast.item5.beverage3
// let { juice1, juice2, juice3 } = breakfast.item5.beverage3
// console.log(juice1)
// console.log(juice2)
// console.log(juice3)

// Methods
// What are methods? built in methods, exectuing functionality
// What is a function? snippet of code functionality

// What is the difference between a function and method?
// Both methods and function excute code functionality, execute behavior
// A method is a function that belongs to a data type or object

// obejct with static data (types) and behavior
// this - reference to an object you are inside the object
let mathProblem = {
  num1: 4,
  num2: 7,
  num3: 9,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
console.log(mathProblem)
// --> { num1: 4, num2: 7, num3: 9, addUp: [Function: addUp] }
console.log(mathProblem.num1)
// --> 4

// method: addUp is a custom method that belongs to the mathProblem object
console.log(mathProblem.addUp)
// [Function: addUp]
console.log(mathProblem.addUp())
// --> undefined (no return the first time)
// --> 20
