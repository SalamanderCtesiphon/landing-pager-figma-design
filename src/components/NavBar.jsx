import React from 'react'
import logo from '../icons/Vector.svg'
import dropDown from '../icons/dropdown.svg'
import searchIcon from '../icons/search.svg'

function NavBar() {
  return (
    <header>
      <div className="header-box1">
        <img src={logo} alt="site logo" id='site-icon'/>
        <h1>Univy</h1>
      </div>
      <div className="header-box2">
        <div className="link-box">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Campus Life <img src={dropDown} alt="drop down icons" /></a>
          <a href="#">Contact Us</a>
        </div>
        <button><img src={searchIcon} alt="search icon" /> Search</button>
      </div>
     
    </header>
  )
}

export default NavBar