import React, {useState} from 'react'

const Tracker = () => {

   // declare a new state variable(miles) and a method that will update ("set" + Variable name)
   const [miles, setMiles] = useState(0)

  const addMile = () => {
    // don't need curly braces around variable because not in JSX and it's treated like any variable in javascript
    setMiles(miles + 1)
  }

  return(
    // React components return JSX -> HTML with ability to embed JS.  It is an extension of Javascript.
    <>
      {/* wrap variable in curly braces to indicate that we are passing Javascript code */}
      <p>Miles: {miles}</p>
    {/* to use style need 2 sets of curly braces - JS needs to recognize the data type as an object */}
      <button onClick={addMile} style={{ backgroundColor:"green"}}>Add a mile</button>
    </>
  )
}

export default Tracker