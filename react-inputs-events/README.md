## React Inputs and Events Hotel 12/16/22

### Create React App
- cd into the react-challenges repository
- Create a new branch: inputs-initials1-initials2 (ex. inputs-aw-sp)
- Create a new React application with no spaces: yarn - create react-app inputs-austin-sarah)
- cd into the project
- Open the project in a text editor
- Create a directory in src called components
- Code!

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

Input tag will accept text in the field it provides on the browser and trigger the handleChange function.

```javascript
  <input 
    type="text"
    onChange={handleChange}
  />
``` 

e.target presents the element that triggered the event 

e.target.value allows us to access the contents of the input field.

- Reading user input
```javascript
  const handleChange = (e) => {
    console.log(e.target.value)
  }
```

- Storing/updating state of the user input
  - Create a state variable and set function using useState() react hook
  - modify handleChange() to perform set function
```javascript
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }
``` 
  - Add value attribute to input tag to represent what is being seen in the input field
```javascript
  <input 
    type="text"
    onChange={handleChange}
    value={name}
  />
``` 

- Displaying data
  - Pass props to component call
  - Accepts the props on the display component `Jokes.js`
  - Set condition which will require a value in `name` variable to be present before displaying a message 
```javascript
  {props.name && <h2>{props.name}, click the box for some jokes</h2>}
```

## Pushing changes to remote repo
- cd out to the repo level
- $ git status
- $ git add <file-name>
- $ git commit -m "meaningful message"
- $ git push origin <branch-name>

