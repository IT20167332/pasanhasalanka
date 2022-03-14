import React from 'react'
import './Css/ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className='card'>
        <img src={props.img} alt='peoject image'/>
        <h1>{props.title}</h1>
        <p className='pp'>{props.discription}</p>
        <p><a href={props.link} target="_blank"><button>See more..</button></a></p>
    </div>
  )
}

export default ProjectCard