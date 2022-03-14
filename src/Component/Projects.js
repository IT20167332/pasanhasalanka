import React from 'react'
import './Css/Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects-t' >
        <div className='project-head'>
          
            <div className='p-text-1'>WORKS</div>
            <div className='p-text-2'>Latest Projects.</div>
            <div className='p-text-3'>Here you can find some of the projects that I created recently.</div>
          </div>
      
        
      </div>
     <div className='projects-body'>
      <div className='con'>
        <ProjectCard 
                    title="Hansalaka Fine Art" 
                    discription="In this web app both frontend and back end develop by me for my brother's business. It is Artwork displaying and selling ecommerce web application develop using MERN stack." 
                    img='./images/Screenshot (752).png'
                    link='https://hansalakafineart.herokuapp.com'
                    />
        
       </div>
       <div className='con'>
        
       </div>
        
      </div>
      
    </div>
  )
}

export default Projects