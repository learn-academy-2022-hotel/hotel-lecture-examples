import React, {useState} from "react"
import Jokes from "./components/Jokes"

// declaring functional component
const App = () => {
  // data needed for the functional component ie. variables or functions lives in between component declaration and return
  const jokesArray = ["Who is the snowman's favorite rapper? Ice Cube", "What do you get when you cross a snowman with a vampire? Frostbite.", "What do you call an elf that runs away from Santa's workshop? A rebel without a Claus!", "Q: Why did the programmer quit his job? A: Because he didn't get arrays ", "What nationality is Santa Claus? North Polish.", "How do you wash your hands over the holiday? With Santatizer."]

  const [jolly, setJolly] = useState("")

  const [name, setName] = useState("")

  const differentJoke = () => {
    const num = Math.floor(Math.random() * jokesArray.length)
    setJolly(jokesArray[num])
  }

  const handleChange = (e) => {
    setName(e.target.value)
    // console.log(e)
  }

  // section that sends html in the form of JSX
  // pass props through the component call
  return (
    <>
      <input 
        type="text"
        onChange={handleChange}
        value={name}
      />
      <h1>Let's deck the halls with laughter!</h1>
      <Jokes name={name} jolly={jolly} differentJoke={differentJoke}/>
    </>
  )
}

export default App