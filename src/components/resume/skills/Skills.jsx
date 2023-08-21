// import React from 'react'
// import './index.css'
// import Skill from './skill'

// const Skills = () => {
//   return (
//     <>
//       <div className="details-container">

//          <div className="skills-container">

//             {/* <div className="details-bullet"></div> */}

//             <div className="skills-section">

//                 <div className="skill">

//                     <div className="name-bullet">

//                         <div className="details-bullet"></div>

//                         <div className="skill-name">React</div>

//                     </div>

//                     <div className="skill-percent">
//                         <div className='react-percent percent'></div>
//                     </div>

//                 </div>

//                 <div className="skill">
                    
//                     <div className="skill-name">JavaScript</div>

//                     <div className="skill-percent">
//                         <div className='javascript-percent percent'></div>
//                     </div>

//                 </div>

//                 <div className="skill">

//                     <div className="skill-name">Bootstrap5</div>

//                     <div className="skill-percent">
//                         <div className='bootstrap-percent percent'></div>
//                     </div>

//                 </div>

//                 <div className="skill">

//                     <div className="skill-name">CSS3</div>

//                     <div className="skill-percent">
//                         <div className='css-percent percent'></div>
//                     </div>

//                 </div>

//             </div>

//             {/* <div className="bullet"></div> */}

//             <div className="skills-section">

                
//                 <div className="skill">

//                     <div className="skill-name">Redux Toolkit</div>

//                     <div className="skill-percent">
//                         <div className='redux-percent percent'></div>
//                     </div>

//                 </div>

//                 <div className="skill">

//                     <div className="skill-name">Tailwind CSS</div>

//                     <div className="skill-percent">
//                         <div className='tailwind-percent percent'></div>
//                     </div>

//                 </div>

//                 <div className="skill">

//                     <div className="skill-name">HTML5</div>

//                     <div className="skill-percent">
//                         <div className='html-percent percent'></div>
//                     </div>

//                 </div>

//                 <Skill skillName={'React'}/>

//             </div>

//          </div>

//       </div>
//     </>
//   )
// }

// export default Skills


import React from 'react'
import './index.css'
import Skill from './skill'

const Skills = ({ position }) => {
  return (
    <>
      
      <div 
      // style={{position: 'absolute' , top: `${position}px`, transition: 'top .8s ease'}} 
      className="details-container">

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

