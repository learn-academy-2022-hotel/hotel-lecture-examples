// JEST Hotel 12/6/2022
  // npm - node package manager adds the required dependencies to run the application properly
  // yarn - yet another resource negotiator - created by FaceBook to overcome the slow download from npm
  // jest - a testing suite for javascript

// commented out VS Code Yargs
    // const { it } = require("node:test")
    // const { describe } = require("yargs")

  // Test Driven Development (TDD) - break the code into a series of tests, smaller problems to approach, helps safely create code

  // Three different tests
    // unit test - test individual pieces of code
    // integration
    // end to end

// Consider three elements when creating tests
  // input - What is the value ypu are passing into your function?
  // expected output - What is supposed to happen because of the input?
  // the results you received - What value did you receive after invoking your function?

// RED-GREEN REFACTOR PROCESS
  // RED
    // Write the test
    // See the test fail
  // GREEN
    // Write the code
    // See the test pass
  // REFACTOR
  // Refactor, if necessary

//  PROMPT: Write a function that offers tea to a person.

  // RED
    // Write the test

    // describe method that groups the test, takes two arguments the name of the function and a call back function
    describe("tea", () => {

      // it method contains two arguments---the description of the function and a callback function
      it("offers tea to a person", () => {

        // expect statement contains the function call and then jest matcher appending the expected output
        expect(tea()).toEqual("Aloha, Hotel2022, pinky up. Here's some Yerba Mate tea.")
      })
    })

    // See the test fail
    // $ yarn test

    // Sometimes VSCode will add yargs to help with the testing suite. Either delete those lines or comment them. Example below
    // const { it } = require("node:test")
    // const { describe } = require("yargs")

    // GOOD FAILURE
    // FAIL  ./jest.test.js
    // tea
    //   ✕ offers tea to a person
  
    // ● tea › offers tea to a person
  
    //   ReferenceError: tea is not defined


  // GREEN
    // Write the code

    // PSEUDOCODE
    // input - none, self-invoking
    // output - string
      // "Aloha, Hotel2022, pinky up. Here's some Yerba Mate tea."
    // declare a function named tea

    const tea = () => {
      return "Aloha, Hotel2022, pinky up. Here's some Yerba Mate tea."
    }

    // See the test pass
    // $ yarn jest
    // PASS  ./jest.test.js
    // tea
    //   ✓ offers tea to a person (1 ms)

  // REFACTOR
  // Refactor, if necessary


  // PROMPT
  // Write a test for a function that logs whether or not an item is soup. 
  
    // RED
      // Write the test
      describe("soupTest", () => {
        it("logs whether or not an item is soup", () => {
          expect(soupTest("yes")).toEqual("This is soup")
          expect(soupTest("no")).toEqual("This is not soup")
          expect(soupTest("")).toEqual("Maybe your food is soggy")
          expect(soupTest("random")).toEqual("Maybe your food is soggy")
        })
      })

      // See the test fail
      // GOOD FAIL!!!
        //   soupTest
        //   ✕ logs whether or not an item is soup (1 ms)
      
        // ● soupTest › logs whether or not an item is soup
      
        //   ReferenceError: soupTest is not defined

  // GREEN
    // Write the code
    // PSEUDOCODE
      // declare a function called soupTest
      // input - a string
      // output - a string
        // If "yes" then return "This is soup"
        // If "no" then return "This is not soup"
        // use conditional statements to produce expected return

      // FUNCTION
      // const soupTest = (string) => {
      //   if(string === "yes") {
      //     return "This is soup"
      //   } else if(string === "no") {
      //     return "This is not soup"
      //   }
      // }

    // See the test pass
    // PASSING
      //   soupTest
      // ✓ logs whether or not an item is soup
  // REFACTOR
  // Refactor, if necessary
  const soupTest = (string) => {
    if(string.toUpperCase() === "YES") {
      return "This is soup"
    } else if(string.toUpperCase() === "NO"){
      return "This is not soup"
    } else { 
      return "Maybe your food is soggy"
    }
  }
  // Check to see if test still pass after the refactor

  // Using variables to store values

  // PROMPT
  // Write a function that takes in two arrays and adds the arrays together and sorts the values in alphabetical order.

  
  // RED
  // Write the test
  describe("coldWeatherAct", () => {
    it("takes in two arrays and adds the arrays together and sorts the values in alphabetical order", () => {

        let coldActivities = ["sleep", "drink hot cocoa", "sit by the fireplace", "make soup"]
        let moreStuff = ["sledding", "skiing", "snow mobiling"]

        expect(coldWeatherAct(coldActivities, moreStuff)).toEqual(["drink hot cocoa", "make soup", "sit by the fireplace", "skiing", "sledding", "sleep", "snow mobiling"])
      })
    })
    // See the test fail
    // Failing in a good way.
    // ● coldWeatherAct › takes in two arrays and adds the arrays together and sorts the values in alphabetical order

    // ReferenceError: coldWeatherAct is not defined

  // GREEN
    // Write the code
    // PSEUDOCODE
      // declare a function called coldWeatherAct that combines two arrays in alphabetical order
      // input - two arrays containing strings
      // output - one array that has the values in alphabetical order
        // if given ["sleep", "drink hot cocoa", "sit by the fireplace", "make soup"] and ["sledding", "skiing", "snow mobiling"] then return ["drink hot cocoa", "make soup", "sit by the fireplace", "skiing", "sledding", "sleep", "snow mobiling"]
        // to add arrays together - .push() or .concat()
        // to place in alphabetical order - .sort()

      const coldWeatherAct = (array1, array2) => {
        return array1.concat(array2).sort()
      }

    // See the test pass
    // All tests are still passing
    // PASS  ./jest.test.js
    // tea
    //   ✓ offers tea to a person (1 ms)
    // soupTest
    //   ✓ logs whether or not an item is soup
    // coldWeatherAct
    //   ✓ takes in two arrays and adds the arrays together and sorts the values in alphabetical order (1 ms)
    
  // REFACTOR
  // Refactor, if necessary


  // Creating a Project Level Repo
    // cd into the javascript-foundations-challenges repository
    // Create a new branch: jest-initials1-initials2 (ex. jest-aw-sp)
    // Create a new directory mkdir jest-student1-student2 (ex. jest-austin-sarah)
    // cd into the directory you just created
    // touch a file called: jest.test.js
    // Add the dependencies by running $ yarn add jest in the terminal
    // Open the Jest directory in a text editor
    // Code!

  // Pushing Changes to GitHub
    // $ cd .. 
    // $ git status
    // $ git add <file-name>
    // $ git commit -m "meaningful message"
    // $ git push origin <branch-name>