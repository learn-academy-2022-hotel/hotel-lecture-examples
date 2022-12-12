import React, { useState } from 'react'
import Tracker from './components/Tracker'

const App = () => {
 
  return(
    <>
      <h2>Mile Tracker</h2>
      <h3>October</h3>
      {/* component call <ComponentCall/> */}
      <Tracker /> 
      <h3>November</h3>
      <Tracker />
      <h3>December</h3>
      <Tracker />
      <p>the end</p>
    </>
  )
}

export default App;
