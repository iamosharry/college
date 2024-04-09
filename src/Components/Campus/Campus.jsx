import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
    <>
      <div className='campusphoto'>
        <div className='img-content'>
          <img src="src/assets/gallery-1.png" alt="" />
        </div>
        <div className='img-content'>
          <img src="src/assets/gallery-2.png" alt="" />
        </div>
        <div className='img-content'>
          <img src="src/assets/gallery-3.png" alt="" />
        </div>
      </div>
      <div className='campusbtn'>
        <button className='btn'>See More here</button>
      </div>
    </>
    
  )
}

export default Campus