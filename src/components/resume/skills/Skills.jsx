import React from 'react'
import './index.css'
import Skill from './Skill'

const Skills = ({ position }) => {
  return (
    <>
      
      <div className="details-container">

        <div className="skills-container">

            <div className="skills-section">

                <Skill skillName= 'React' percent= '90%' />
                <Skill skillName= 'JavaScript' percent= '80%' />
                <Skill skillName= 'Tailwind CSS' percent= '95%' />
                <Skill skillName= 'CSS3' percent= '85%' />

            </div>

            <div className="skills-section skills-section2">

                <Skill skillName= 'Redux Toolkit' percent= '80%' />
                <Skill skillName= 'Bootstrap5' percent= '85%' />
                <Skill skillName= 'HTML5' percent= '90%' />

            </div>

        </div>

      </div>

    </>
  )
}

export default Skills

