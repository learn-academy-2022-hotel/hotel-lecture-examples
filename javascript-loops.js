// JAVASCRIPT LOOPS LECTURE

//  --- VARIABLE DECLARATIONS AND SCOPE

// var - global scope, can be accessed anywhere inside or outside of a block

//  block is between
//  {
//   this is code block
        // this is more code 
        // more code
        // and more code
//  }

//   let - only available inside the block it's defined in - it can be reassigned but not redeclared.
//   const - cannot be redeclared or reassigned.

if(true) {
    var myName = "Trish"
    console.log(myName)
 }                           // this will work

if(true) {
    var myName = "Trish"
}
console.log(myName)         // this will work

if(true) {
    let yourName = "Molly"
    console.log(yourName)
}                       // this willl work

if(true) {
    let yourName = "Molly"
}
console.log(yourName)   // this will error because the variable yourName is not accessible outside of the block scope


let myCat = "Kevin"
myCat = "Geppetto"
console.log(myCat)    // output Geppetto

const myDog = "Nika"
myDog = "Theo"
console.log(myDog)   // will throw error  - can't reassign a const value

// ----- LOOPS -------

// Iteration:   process of repeating a task over and over until condition is met

//   INFO needed to set up a for loop
//  1. where to start counting
//  2. where to stop counting
//  3. how to get from the start to the stop

//  1. start (let index = 0)
//  2. stop (index < 10 )
//  3. index = index + 1

//  FOR LOOP SYNTAX:  

for(let index=0; index < 10; index = index + 1) {   // longhand
    
}

for(let i=0; i < 10; i++){        // shorthand and common use
    //logic here
}

const numsArray = [1, 2, 3, 4, 5]
  console.log("length: ", numsArray.length)
 for(let i=0; i<5; i++){
    console.log("index", i, "value: ", numsArray[i])
 }

 for(let i=0; i<numsArray.length; i++) {
    if(numsArray[i] % 2 === 0) {
        console.log(`${numsArray[i]} is an even number!`)
    }
 }

//  String interpolation syntax `${variableName}`  
//  allows you to print out the value of variable
