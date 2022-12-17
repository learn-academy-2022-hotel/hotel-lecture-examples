import React from "react"
import "../App.css"

// declaring functional component
const Jokes = (props) => {
  // data needed for the functional component ie. variables or functions lives in between component declaration and return

  // section that sends html in the form of JSX
  return (
    <>
      {props.name && <h2>{props.name}, click the box for some jokes</h2>}
      <div className="box" onClick={props.differentJoke}>
        {props.jolly}
      </div>
    </>
  )
}

export default Jokes