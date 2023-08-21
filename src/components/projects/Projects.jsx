import React from 'react'
import './index.css'
import SectionHeadings from '../section headings/SectionHeadings'
import Carousel from './Carousel'
import WhiteImage from '../../assets/images/download.png'

const Projects = () => {

  return (
    <>

      <section id='projects' className='projects'>

        <SectionHeadings sectionMainHeading= 'Projects' sectionSubHeading= 'What I Build!'/>

        <div className='slider'>

          <Carousel />

          <div className='projects-footer-container'>

            <div className='projects-footer-parent'>
             <img className='projects-white-img' src={WhiteImage} alt="" />
            </div>

          </div>

        </div>

      </section> 


    </>
  )
}

export default Projects

