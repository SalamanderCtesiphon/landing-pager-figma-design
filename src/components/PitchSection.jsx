import React from 'react'
import pitch from '../images/40ca3f0fa08f983f057418ddd94928a0.jpeg'

function PitchSection() {
  return (
    <div className="pitch">
      <div className="pitch-box1">
        <h1 className='pitch-title'>Why <span className="banner">Univy </span><br /> University?</h1>
        <img src={pitch} alt="student phote" id='pitch-pic'/>
        <p id='pitch-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id placeat excepturi. Expedita eos similique autem, debitis quos explicabo praesentium dolorem quam quod cum obcaecati?</p>
      </div>
      <div className="pitch-box2">
        <div className="subbox1">
          <h1>Visit Our Campus</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa esse eligendi veritatis numquam? Suscipit mollitia pariatur vitae rerum iusto? Impedit quasi vitae nisi ipsam itaque labore. Impedit commodi corrupti voluptates!</p>
          <div className="nav-button-holder">
            <button id='pitch-btn1'>Schedule a Visit</button>
            <button id='pitch-btn2'>Visit Our Gallery</button>
          </div>
        </div>
        <div className="subbox2">
          <h1 id='fourk'>4K+</h1>
          <h1>Number of Students per Year</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate eaque, eum, iusto veniam aspernatur fugit praesentium aut eos officiis unde, voluptatibus error nihil itaque ipsam deserunt voluptas aliquid dicta!</p>
          <div className="nav-button-holder">
            <button id='pitch-btn3'>View Student Count</button>
            <button id='pitch-btn4'>See Our Alumni</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PitchSection