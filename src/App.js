import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/home/Hero";
import MissionAndTopics from "./components/home/MissionAndTopics";
import PCOS from "./webPage/PCOS";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <MissionAndTopics></MissionAndTopics>
      <Footer></Footer>
      <PCOS></PCOS>
    </div>
  );
};

export default App;
