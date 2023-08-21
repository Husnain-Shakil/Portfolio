import React, { useState } from 'react'
import './index.css'
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import Education from './education/Education';
import Skills from './skills/Skills';
import Interests from './interest/Interests';;
import SectionHeadings from '../section headings/SectionHeadings';


const Resume = () => {

  const [activeLink, setActiveLink] = useState('education')

  const handleClick = (link) => {
     setActiveLink(link)
  }

  return (
    <> 

      <section id='resume' className='resume-section'>

        <SectionHeadings sectionMainHeading= 'Resume' sectionSubHeading= 'My Formal Bio Details'/>
 
        <div className="resume">

        <div className="card">

          <div className="card-bullets">
            
            <div className="bullet-container">

              <div className="bullet-icons"></div>

              <div className="bullets">

                <div className={`bullet ${activeLink === 'education' ? 'active' : ''}`}>  
                  <div className="icon"> <SchoolIcon /> </div>
                  <div onClick={() => {handleClick('education')}} className="text"> Education </div>  
                </div>

                <div className={`bullet ${activeLink === 'skills' ? 'active' : ''}`}> 
                  <div className="icon"> <CodeIcon /> </div>
                  <div onClick={() => {handleClick('skills')}} className="text"> Programming Skills </div>  
                </div>

                <div className={`bullet ${activeLink === 'interests' ? 'active' : ''}`}>
                  <div className="icon"> <PaletteIcon /> </div>
                  <div onClick={() => {handleClick('interests')}} className="text"> Interests </div>  
                </div>

              </div>

            </div>

          </div>

          <div className='bullet-details'>
            
            <div className="details-carousel">

              {activeLink === 'education' ? <Education /> : ''}
              {activeLink === 'skills' ? <Skills /> : ''}
              {activeLink === 'interests' ? <Interests /> : ''}

            </div>

          </div>

        </div>

        </div>

      </section> 
    </>
  )
}

export default Resume
