import React, { useEffect, useState } from 'react'
import './About.css'

const About = () => {
  const [jump,setJump] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 850 ? setJump(true) : setJump(false)
    })
  })

  return (
    <div className='about'>
      <div className="about-left">
        <img className='about-img' src="/assets/about.png" alt="" />
        <img className='about-img2' src="/assets/play-icon.png" alt="" />
      </div>
      <div className="about-right">
        <h3 className={`target ${jump ? 'active' : ''}`}>ABOUT UNIVERSITY</h3>
        <h2 className={`target ${jump ? 'active' : ''}`}>Nurturing Tomorrow's <br /> Leaders Today</h2>
        <p className={`target ${jump ? 'active' : ''}`}>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowlegde,skills, and experiences neede to excel in the dynamic field of education.</p>
        <p className={`target ${jump ? 'active' : ''}`}>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p className={`target ${jump ? 'active' : ''}`}>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers thr perfect pathway to achieve your goals and unlock your full pontential in shaping the future of education</p>

      </div>
    </div>
  )
}

export default About







