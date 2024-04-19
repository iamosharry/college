import React, { useEffect, useState } from 'react'
import './Programs.css'

const Programs = () => {
  const [slideX,setSlideX] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 300 ? setSlideX(true) : setSlideX(false)
    })
  })

  return (
    <div className='programs'>
      <div className={`program  ${slideX ? 'active' : ''}`}>
        <img src="/assets/program-1.png" alt="" />
        <div className="caption">
          <img src="/assets/program-icon-1.png" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={`program  ${slideX ? 'active' : ''}`}>
        <img src="/assets/program-2.png" alt="" />
        <div className="caption">
          <img src="/assets/program-icon-2.png" alt="" />
          <p>Master's Degree</p>
        </div>
      </div>
      <div className={`program  ${slideX ? 'active' : ''}`}>
        <img src="/assets/program-3.png" alt="" />
        <div className="caption">
          <img src="/assets/program-icon-3.png" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs