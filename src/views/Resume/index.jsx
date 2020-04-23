import React from 'react';
import Jumbotron from './components/Jumbotron'

import '../../styles/style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Particles from 'react-particles-js'
import ParticlesConfig from './components/ParticlesConfig'
import Skills from './components/Skills'
import Works from './components/Works'
import Volunteers from './components/Volunteers'

const index = () => {
  AOS.init()
  
  return (
    <div style={{ background: "linear-gradient(to bottom, #0b486b, #f56217)" }}>
      <Particles
        style={{
          position: "fixed",
          height: "100%"
        }}
        params={ParticlesConfig}
      />
      <Jumbotron />
      <Skills />
      <Works />
      <Volunteers />      
    </div>
  );
}

export default index;
