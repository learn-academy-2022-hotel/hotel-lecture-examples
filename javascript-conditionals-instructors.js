// Javascript Conditionals - Hotel 11/30/22

// Javascript conditionals - aka decision trees, conditional statements, if/else statements
  // use true evaluations to make a decision and produce an output

// Conditions ()
  // Boolean value - true or false
  // Produced by three types of operators
    // Equality operators == loose or === strict
    // Logical operators && And, || Or, ! Bang operator
    // Relational operators <, >, <=, >=

    // Equality
    // var num = 22
    // console.log(num == 22)
    // output: true
    // console.log(num == "22")
    // output: true - flaw with using loose equality is that it will do a type coercion
    // console.log(num === "22")
    // output: false because different datatypes

    // Relational
    // var ourCohort = "Hotel 2022"
    // console.log(num > ourCohort.length)
    // output: true

    // Logical
      // && - expects all conditions to be true
      // console.log(num === 22 && num > ourCohort.length)
      // output: true because both conditions are true
      // console.log(num === 22 && num < ourCohort.length)
      // output: false because the second condition is false

      // || - expects one condition to be true
      // console.log( num < ourCohort.length || num === 22 )
      // output: true
      // ! - negation, bang operator, opposite
      // console.log(num === 22 && !num < ourCohort.length)
      // output: true because the bang operator gives the opposite of the false statement `num < ourCohort.length`

// Structure of conditional statements
// if(true condition){
//   action it performs
// }

// if - keyword that starts the conditional
    // one if per conditional
    // () - evaluates if the condition is true
    // {} - performs the action of the code block

// let year = 2022
// if(year === 2022){
//   console.log("I am true")
// }
// output: "I am true"
// if(year === 2021){
//   console.log("Last year")
// }
// no output because there is not a true condition available

// else - keyword to create a default output; a catchall
    // one else per conditional
    // does not take in a condition
// if(year === 2021) {
//   console.log("Last year")
// } else {
//   console.log("2022 is almost done")
// }
// output: "2022 is almost done"

// else if - keyword to create additional conditional statements
    // takes in a condition 
    // can have as many as necessary

let myColor = "green"
// output: "Have your considered purple?"

// reassign a new value to the variable
myColor = "black"
// output: "I have a suggestion: purple!!!"
myColor = "blue"
// output: "Because your color contributes to purple, you are acceptable."

// if(myColor === "green") {
//   console.log("Have your considered purple?")
// } else if(myColor === "purple") {
//   console.log("You have exquisite taste")
// } else if(myColor === "blue") {
//   console.log("Because your color contributes to purple, you are acceptable.")
// } else {
//   console.log("I have a suggestion: purple!!!")
// }

// String interpolation aka template literals
    // allows variables to be embedded in strings
    // `${variableName}`

//     myColor = "purple"
//     myColor = "green"

// if(myColor === "green") {
//   console.log(`${myColor}??? Have your considered purple?`)
// } else if(myColor === "purple") {
//   console.log(`${myColor}!!! You have exquisite taste`)
// } else if(myColor === "blue") {
//   console.log(`Because your color ${myColor} contributes to purple, you are acceptable.`)
// } else {
//   console.log(`${myColor}??? I have a suggestion: purple!!!`)
// }

let chores = 5

// if(chores >= 2) {
//   console.log("$10")
// } else if(chores >= 3) {
//   console.log("$15")
// } else if(chores >= 5) {
//   console.log("$40")
// } else {
//   console.log("Here's a hug")
// }
// Output: "$10" to ensure that the condition is properly met place the most stringent first

// Better logic
if(chores >= 5) {
  console.log("$40")
} else if(chores >= 3) {
  console.log("$15")
} else if(chores >= 2) {
  console.log("$10")
} else {
  console.log("Here's a hug")
}
// Output: "$40"