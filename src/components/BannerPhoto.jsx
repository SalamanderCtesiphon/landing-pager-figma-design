import React from 'react'
import bannerPhoto from '../images/1cc627397622f64d6de0788e63adeb00.jpeg'

function BannerPhoto() {
  return (
    <div className="banner-photo">
      <img  id="photo-for-banner" src={bannerPhoto} alt="picture " />
    </div>
  )
}

export default BannerPhoto