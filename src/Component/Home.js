import React from 'react'
import {Link} from 'react-scroll'
import './Css/Home.css'
function Home() {
  return (
    <div className='home' id='home'>
        <div className='max-width'>
          <div className='containner'>
            <div className='text-1'>Hello There...</div>
            <div className='text-2'>I am Pasan Hasalanka Ubayasena</div>
            <div className='text-3'>And I'm a <span>Web Dveloper</span></div>
          </div>
          <div className='button-div'>
          <Link className='navbar-link' to='about' spy={true} smooth={true} offset={-50} duration={500}>
            <button className='button-1'>More About Me</button>
          </Link>
          <Link className='navbar-link'  to='projects' spy={true} smooth={true} offset={-50} duration={500}>
            <button className='button-1'>Latest Projects</button>
          </Link>
          </div>
        </div>
       
    </div>
    
  )
}

export default Home