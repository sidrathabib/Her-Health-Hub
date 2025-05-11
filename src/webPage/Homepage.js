// import { Carousel } from 'bootstrap'
import React from 'react'
import Hero from '../components/home/Hero'
import MissionAndTopics from '../components/home/MissionAndTopics'
// import HomeNews from '../components/home/HomeNews'


const Homepage = () => {
  return (
    <div>
        <Hero></Hero>
        <MissionAndTopics></MissionAndTopics>
        {/* <HomeNews></HomeNews> */}
    </div>
  )
}

export default Homepage