import React from 'react'
import newsPhoto from '../images/091e1f14776ab6a79a814237cab58782.jpeg'
import eyes from '../icons/Group.svg'
import calender from '../icons/calander.svg'

function TrendingNews() {
  return (
    <div className="trending">
      <h1 className='news-header'>Trending <span className='call-span'>News</span></h1>
      <div className="news-row">
        <div className="news-card">
          <img src={newsPhoto} alt="news" />
          <div className="card-text">
            <div className="news-card-row">
              <img src={eyes} alt="views" />
              <small>18,988 Views</small>
              <img src={calender} alt="calender" />
              <small>14 Jan 2023</small>
            </div>
            <h4>Experience the Best of College Life</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias esse ipsam, ullam deleniti est a.</p>
          </div>
        </div>
        <div className="news-card">
          <img src={newsPhoto} alt="news" />
          <div className="card-text">
            <div className="news-card-row">
              <img src={eyes} alt="views" />
              <small>18,988 Views</small>
              <img src={calender} alt="calender" />
              <small>14 Jan 2023</small>
            </div>
            <h4>Experience the Best of College Life</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias esse ipsam, ullam deleniti est a.</p>
          </div>
        </div>
      </div>
      <div className="news-row">
      <div className="news-card">
          <img src={newsPhoto} alt="news" />
          <div className="card-text">
            <div className="news-card-row">
              <img src={eyes} alt="views" />
              <small>18,988 Views</small>
              <img src={calender} alt="calender" />
              <small>14 Jan 2023</small>
            </div>
            <h4>Experience the Best of College Life</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias esse ipsam, ullam deleniti est a.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingNews