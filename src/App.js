import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/home/Hero'
import MissionAndTopics from './components/home/MissionAndTopics'



const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <MissionAndTopics></MissionAndTopics>
      <Footer></Footer>
    </div>

  )
}

export default App