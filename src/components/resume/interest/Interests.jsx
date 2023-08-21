import React from 'react'
import './index.css'

const Interests = ({ position }) => {
  return (
    <>
      <div 
    //   style={{position: 'absolute' , top: `${position}px`, transition: 'top .8s ease'}} 
      className="details-container">

        <div className="about-me-headings">

                <div className='main-sub'>

                    <div className='about-main-heading'>

                        <div className="details-bullet"></div>
                        <span className="interest-name">Learning</span>

                    </div>

                    <span className="interest-expla">
                        Learning is the phase that never comes to an end. My learning phase includes seeking information about new technologies and learning different programming languages. Currently pursuing certification in UI/UX Design from Coursera.
                    </span>

                </div>

                <div className='main-sub'>

                    <div className='about-main-heading'>

                        <div className="details-bullet"></div>
                        <span className="interest-name">Solving Coding Challenges</span>
                        
                    </div>

                    <span className="interest-expla">
                        Solving coding problems daily is something I can never compromise with, on different platforms like LeetCode and HackerRank. 
                    </span>

                </div>

                <div className='main-sub'>

                    <div className='about-main-heading'>

                        <div className="details-bullet"></div>
                        <span className="interest-name">Competitive Gaming</span>
                        
                    </div>

                    <span className="interest-expla">
                        I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.
                    </span>

                </div>

        </div>

      </div>
    </>
  )
}

export default Interests
