import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const slider = useRef(0)
    let tx = 0

  const slideBackward = () => {
    if(tx < - 0 ){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
  }
  const slideFackward = () => {
    if(tx > - 50 ){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }



  return (
    <div className='testimonials'>
      <img src="src/assets/back-icon.png" className='back-btn' alt="" onClick={slideBackward} />
      <img src="src/assets/next-icon.png" className='next-btn' alt="" onClick={slideFackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
              <div className="slide">
                <div className="user-info">
                  <img src="src/assets/user-1.png" alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
              </div>
            </li>
          <li>
              <div className="slide">
                <div className="user-info">
                  <img src="src/assets/user-2.png" alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
              </div>
            </li>
          <li>
              <div className="slide">
                <div className="user-info">
                  <img src="src/assets/user-3.png" alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
              </div>
            </li>
          <li>
              <div className="slide">
                <div className="user-info">
                  <img src="src/assets/user-4.png" alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
              </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials