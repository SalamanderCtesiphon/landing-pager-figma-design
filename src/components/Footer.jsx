import React from 'react'
import logo from '../icons/logo.svg'
import twitter from '../icons/Vector(2).svg'
import facebook from '../icons/Vector(3).svg'
import instagram from '../icons/Vector(4).svg'
import youtube from '../icons/Vector(5).svg'
import phone from '../icons/phone.svg'
import mail from '../icons/Clip path group.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container1">
        <div className="footer-container1-header">
          <img src={logo} alt="logo" />
          <h2>Univy</h2>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius voluptate est sit provident enim similique, at sunt consequuntur laborum fugiat molestias quis exercitationem accusamus?
          </p>
        <div className="icon-holder-footer">
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="twitter" />
          <img src={instagram} alt="twitter" />
          <img src={youtube} alt="twitter" />
        </div>
      </div>
      <div className="footer-container2">
        <div className="footer-container2-row1">
          <h3>Our Company</h3>
          <a href="#">About Us</a>
          <a href="#">Home</a>
          <a href="#">Campus Life</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-container2-row2">
          <h3>Support</h3>
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-container2-row3">
          <h3>Contact Information</h3>
          <div className='line1'>
            <img src={phone} alt="" />
            <p>+25 555 0201547</p>
          </div>
          <div className="line1">
            <img src={mail} alt="mail" />
            <p>support@mail.com</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer