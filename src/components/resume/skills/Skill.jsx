import React from 'react'

const Skill = ({ skillName, percent }) => {
  return (
    <>
    
        <div className="skill">

            <div className="name-bullet">
                
                <div className="details-bullet"></div>
                <span className="skill-name"> {skillName} </span>
                
            </div>

            <div className="skill-percent">
                <div style={{width: `${percent}` }} className='react-percent percent'></div>
            </div>

        </div>

    </>
  )
}

export default Skill
