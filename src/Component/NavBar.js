import React, {useState, useEffect } from 'react'
import {Link} from 'react-scroll'

import "./Css/NavBar.css"


function NavBar() {

  
  const [MenuButton, setMenuButton] = useState(false)
  const [click, setclick] = useState(true)

  const showButton =()=>{
    if(window.innerHeight <=960){
      setMenuButton(true);
    }else{
      setMenuButton(false);
    }
  }

  useEffect(()=>{
      showButton()
  })
  try {
    window.addEventListener('scroll',()=>{
      let content = document.querySelector('.navbar');
      let content2 = document.querySelector('.navbar-logo');
      let scrollCount = window.scrollY;

      if(scrollCount > 675){
        content.classList.add('navbar-active')
        content2.classList.add('navbar-logo-active')
      }else{
        content.classList.remove('navbar-active')
        content2.classList.remove('navbar-logo-active')
      }
    })
  } catch (error) {
    
  }

  
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
          <h1 >UBAYASENA</h1>
          <Link className='navbar-link' onClick={()=>{setclick(!click)}} to='/' spy={true} smooth={true} offset={-50} duration={500}>
            <i className={click? 'fas fa-bars icon': 'fas fa-times icon'} onClick={()=>{setclick(!click)}}></i>  
          </Link>
               
      </div>

      
      <div className='navbar-item'>
        <ul className={click? 'navbar-ul ':'navbar-ul navbar-ul-active'}>
          <Link className='navbar-link' onClick={()=>{setclick(!click)}} to='home' spy={true} smooth={true} offset={-50} duration={500}>
            <li>
                Home
            </li> 
          </Link>
          <Link className='navbar-link' onClick={()=>{setclick(!click)}} to='about' spy={true} smooth={true} offset={-50} duration={500}>
            <li>
                About
            </li> 
          </Link>
         
         
          <Link className='navbar-link' onClick={()=>{setclick(!click)}} to='projects' spy={true} smooth={true} offset={-50} duration={500}>
            <li>
              Projects
            </li> 
          </Link> 
          <Link className='navbar-link' onClick={()=>{setclick(!click)}} to='contact' spy={true} smooth={true} offset={-50} duration={500}>
            <li>
              Contact
            </li>  
          </Link> 
             
        </ul>
        
      </div>

      
    </nav>
  );
}

export default NavBar;
