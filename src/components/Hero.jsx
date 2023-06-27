import React from 'react'
import navL from '../icons/navL.svg'
import navR from '../icons/navR.svg'

function Hero() {
  return (
    <div className="hero-content">
      <div className="hero">
        <div className="hero-container1">
          <img id='navL' src={navL} alt="navigate left" />
        </div>
        <div className="hero-container2">
          <small>Univy University</small>
          <h1 className="banner-title">Discover Your <br></br>Future at <span class="banner">Univy</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam qui rerum.</p>
          <button id='apply-btn'><span id="apnw">Apply Now </span><img id='navicon' src={navR} alt="navicon" /></button>
        </div>
        <div className="hero-container3">
          <img id='navR' src={navL} alt="navigate left" />
        </div>
      
      </div>
      <div className="blocks">
        <div id='block1'>
          <h4>Education</h4>
          <h2>Intensive Study</h2>
        </div>
        <div id='block2'>
          <h4>Shop</h4>
          <h2>Explore Debriefing Items</h2>
        </div>
        <div id='block3'>
          <h4>Schedule</h4>
          <h2>View Course Schedule</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero