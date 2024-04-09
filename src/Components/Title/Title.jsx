import { useEffect, useState } from 'react'
import './Title.css'

const Title = ({subTitle,title}) => {
  const [opacity,setOpacity] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 140 ? setOpacity(true) : setOpacity(false)
    })
  },[])

  return (
    <div className='title'>
      <p className={`opp ${opacity ? 'active' : ''}`}>{subTitle}</p>
      <h2 className={`opp ${opacity ? 'active' : ''}`}>{title}</h2>
    </div>
  )
}

export default Title