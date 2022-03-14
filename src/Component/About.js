import React from 'react'
import './Css/About.css'
function About() {

  return (
    <div className='about' id='about'>
      <div className='about-t'>
        <div className='about-head'>
          <div className='a-text-1'>About</div>
          <div className='a-text-2'>Personal info</div>
          <div className='a-text-3'>Get to know more about me</div>
        </div>

        <div className='about-body'>
          <div className='about-discription'>
              <h3 className='a-h3'>Hello!</h3>
              <p className='about-p'>
                My name is Pasan Hasalanka and I'm a 3rd-year undergraduate in SLIIT. I'm passionate about full-stack web developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.
              </p>
              <p className='about-p'>
                I will love to hear from you, Whether it's a project, job opportunity, or just a chat. Feel free to contact me.
              </p>
              <a href='https://drive.google.com/file/d/12E3mxlUp2dswjsNx955HULRPhTGktJK9/view?usp=sharing' target="_blank">
                <button className='cv-button'>Download My CV <i className='fas fa-download'></i></button>
              </a>
          </div> 
          <div className='about-skills'>
            <h3 className='a-h3'>Skills</h3>
            <div className='skill-list'>
              <a href='https://www.hackerrank.com/IT20167332' target="_blank">
                <button className='skill-button'>Javascript</button>
                <button className='skill-button'>Java</button>
                <button className='skill-button'>React</button>
                <button className='skill-button'>HTML</button>
                <button className='skill-button'>CSS</button>
                <button className='skill-button'>SQL</button>
                <button className='skill-button'>GIT</button>
              </a>
            </div>
          </div>   
        </div>
      </div>
        
    </div>
        
    
  )
}

export default About