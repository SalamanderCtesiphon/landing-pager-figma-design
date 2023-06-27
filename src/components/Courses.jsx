import React from 'react'
import lab from '../images/e5a012a2ed1541bbbc6434f54e723662.jpeg'
import bio from '../images/70e51ae8d7911b1b11326bc05aee83cb.jpeg'
import earthScience from '../images/aaed4c372afa7982bec1d478776bef36.jpeg'
import bioChem from '../images/f49772833dda6aa2d82a878f80d49182.jpeg'

function Courses() {
  return (
    <div className="courses">
      <h1 id='courses-title' className="pitch-title">Our <span className="banner"> Courses</span></h1>
      <div className="card-holder">
        <div className="card">
          <img src={lab} alt="science lab" />
          <h2>Engineering</h2>
          <p>Lorem ipsum dolor sit amet serstiturot orbis nonsecutor consectetur, adipisicing elit. Quidem, neque.</p>
        </div>
        <div className="card">
          <img src={bio} alt="science lab" />
          <h2>Natural Sciences</h2>
          <p>Lorem ipsum dolor sit amet amini micci omni consectetur, adipisicing elit. Quidem, neque.</p>
        </div>
        <div className="card">
          <img src={earthScience} alt="science lab" />
          <h2>Earth Sciences</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, neque.</p>
        </div>
        <div className="card">
          <img src={bioChem} alt="science lab" />
          <h2>Bio Chemistry</h2>
          <p>Lorem ipsum dolor sit amet conseadipisicing elit. Quidem,  obneque.</p>
        </div>
      </div>
      <button id='blue-button'>View All Courses</button>
    </div>
  )
}

export default Courses