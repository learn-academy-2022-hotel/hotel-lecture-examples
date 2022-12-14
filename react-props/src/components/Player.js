import React from 'react'

const Player = (props) => {
  // console.log(props) - props is an object
  return (
    <>
      <h3>Current episode: {props.currentEpisode}</h3>
      <button onClick={props.triggerNextEpisode}>Next Episode</button>
    </>
  )
}

export default Player
