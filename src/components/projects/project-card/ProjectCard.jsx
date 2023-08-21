import React from 'react'
import './index.css'

const ProjectCard = ({ src, title, tech, url }) => {
  return (
    <>

        <div className='project-card-container'>

            <img className='project-card-image' src={src} alt="" />

            <div className="disc">

                <h2>{title}</h2>
                <h3>Technologies Used:</h3>
                <span className='tech-link'> {tech}  </span>
                <a target='_blank' href={url} > visit site </a>

            </div>

        </div>  

    </>
  )
}

export default ProjectCard
