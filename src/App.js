import React from 'react';
import './App.css';
import AboutMe from './AboutMe/AboutMe.js';
import Banner from './Banner/Banner';
import Project from './Project/Project';
import Hobby from './Hobby/Hobby'
function App () {
  return (
    <div className="App">
      <Banner/>
      <AboutMe/>
      <Project/>
      <Hobby/>
    </div>
  );
}

export default App;
