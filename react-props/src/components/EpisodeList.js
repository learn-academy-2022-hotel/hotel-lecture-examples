import React from 'react'

const EpisodeList = (props) => {
  // display component - just UI, getting passed info and rendering
  // console.log(props)
  // props is the name of the object: {title: 'Teaching TypeScript'}
  // props.title - returns the value
  return (
    <>
      <div className="card">{props.title}</div>
    </>
  )
}

export default EpisodeList
