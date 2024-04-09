import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs.jsx' 
import Title from './Components/Title/Title.jsx' 
import About from './Components/About/About.jsx' 
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from "./Components/Footer/Footer.jsx"




function App() {


  return(

      <>
      
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our PROGRAM' title='What We offer'/>
          <Programs/>
          <About/>
          <Title subTitle='Gallery' title='Campus Photo'/>
          <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Students Says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
        </div>
        
        
      </>
      
    
    )
}


export default App
