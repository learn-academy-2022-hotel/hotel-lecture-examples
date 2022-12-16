React Inputs and Events Hotel 12/16/22

Process
cd into the react-challenges repository
Create a new branch: inputs-initials1-initials2 (ex. inputs-aw-sp)
Create a new React application with no spaces: yarn create react-app inputs-student1-student2 (ex. yarn create react-app inputs-austin-sarah)
cd into the project
Open the project in a text editor
Create a directory in src called components
Code!

React - javascript library to create user interfaces

Boiler plate for functional component
```javascript
// import other components or software needed for application
import React from "react"

// declaring functional component
const App = () => {
  // data needed for the functional component ie. variables or functions lives in between component declaration and return

  // section that sends html in the form of JSX
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
```

- Build a joke sharing app
  - Store data and functions in App.js
  - other components will be the display components
  - share data through props
  - to display the other components we need to import and export

- DOM events - triggered by user interactions, such as typing, clicking a button, hovering over elements
- Event listeners - listen out for the DOM events and trigger actions within our application

- Input tag with its attributes: type, value, and onChange will allow us to collect user inputs to perform actions

- Attributes
  - type states what kind of information can be accepted
  - value represent the state value of the variables used in the application
  - onChange allows us to update the state