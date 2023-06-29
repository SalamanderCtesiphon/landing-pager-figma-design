import React from 'react'
import angelina from '../images/a6289dba8969ee846cf132ab9f2cf27d.jpeg'
import rey from '../images/d5f30577bfea27f4a1f603ef3c98e347.jpeg'
import taysa from '../images/86b647046c49432ef1b298001eda93bf.jpeg'
import joe from '../images/0100641ec3448c7c7c31d2deb05f9691.jpeg'


function TopStudents() {
  return (
    <div className="top-students">
      <div className="top-header">
        <h1 className='pitch-title'id='student-header-title' >Top Students</h1>
        <button id='student-btn'>View All Students</button>
      </div>
      <div className="student-cards">
        <div className="student-card">
          <img className='student-img' src={angelina} alt="student" />
          <div className="card-content">
            <h2>Angelina Feeby</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque totam sit soluta ea aliquid.</p>
          </div>
        </div>
        <div className="student-card">
          <img className='student-img' src={rey} alt="ray" />
          <div className="card-content">
            <h2>Angelina Feeby</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque totam sit soluta ea aliquid.</p>
          </div>
        </div>
        <div className="student-card">
          <img className='student-img' src={taysa} alt="taysa" />
          <div className="card-content">
            <h2>Angelina Feeby</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque totam sit soluta ea aliquid.</p>
          </div>
        </div>
        <div className="student-card">
          <img src={joe} alt="joe" className="student-img" />
          <div className="card-content">
            <h2>Angelina Feeby</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque totam sit soluta ea aliquid.</p>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default TopStudents