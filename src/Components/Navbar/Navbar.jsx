import React, { useEffect, useState } from 'react' 
import './Navbar.css'
import { Link } from 'react-scroll';



const Navbar = () => {
  const [menu,setMenu] = useState('Home')
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 5 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [ham,setHam] = useState(false)
  const [mobileMenu,setMobileMenu] = useState(false)
  
  const handleClick = () => {
    (!ham ? setHam(true) : setHam(false))
    console.log(ham)
    (!mobileMenu ? setMobileMenu(true) : setMobileMenu(false))

  }


  
  return (
    <>
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <div className='navimg-container'>
          <img src="/assets/logo.png" alt="" />
        </div>
        <div onClick={()=>{handleClick()}} class='menu-toggle'>
          <span className={`top ${ham ? 'closed'  : ''}`}></span>
          <span className={`middle ${ham ? 'closed' : ''}`}></span>
          <span className={`bottom ${ham ? 'closed' : ''}`}> </span>
        </div>
        <ul className={mobileMenu ? 'mobile-nav' : ''}>
          <li onMouseMove={()=>{setMenu('Home')}} className={menu === 'Home' ? 'active' : ''}><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
          <li onMouseMove={()=>{setMenu('Program')}} className={menu === 'Program' ? 'active' : ''}><Link to='programs' smooth={true} offset={-270} duration={500}>Program</Link></li>
          <li onMouseMove={()=>{setMenu('About Us')}} className={menu === 'About Us' ? 'active' : ''}><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li onMouseMove={()=>{setMenu('Campus')}} className={menu === 'Campus' ? 'active' : ''}><Link to='campusphoto' smooth={true} offset={-150} duration={500}>Campus</Link></li>
          <li onMouseMove={()=>{setMenu('Testimonials')}} className={menu === 'Testimonials' ? 'active' : ''}><Link to='testimonials' smooth={true} offset={-100} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn' href="#">Contact Us</Link></li>
        </ul>
      </nav>

        
    </>
  )
}

export default Navbar