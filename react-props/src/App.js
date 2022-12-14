import React, { useState } from 'react'
import EpisodeList from './components/EpisodeList'
import Player from './components/Player'
import './App.css'

const App = () => {
  // in our app, App.js is logic component - handling the business of the app

  // static data
  const episodes = ["Teaching TypeScript", "Stoic Coding", "Full Time Content Creation", "Democratizing Data", "Breaking into Dev Rel", "10 Common Accessibility Mistakes to Avoid"]

  // state values - currentEpisode is data, setCurrentEpisode is the method that updates currentEpisode
  // episodes[0] is the initial value of currentEpisode
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])

  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextEpisode])
    // console.log(nextEpisode) - I typically remove all console logs after they have served their purpose but leaving this as a note to the development process
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>
      <div className="episode-cards">
        {episodes.map((episode) => {
          return <EpisodeList title={episode} />
        })}
      </div>
      <Player currentEpisode={currentEpisode} triggerNextEpisode={triggerNextEpisode} />
    </>
  )
}

export default App
