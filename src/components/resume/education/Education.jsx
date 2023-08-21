import React from 'react'
import './index.css'

const Education = ({ position }) => {
  return (
    <>
      <div 
    //   style={{position: 'absolute', top: `${position}px`, transition: 'top .8s ease'}} 
      className="eduaction-container">

        <div className="about-me-headings">

            <div className="about-me-heading">

                {/* <div className="details-bullet"></div> */}

                <div className='main-sub'>

                    <div className='about-main-heading'>

                        <div className="details-bullet"></div>
                        <span className="institute-name">Islamia University of Bahawalpur</span>

                    </div>

                    <span className="about-sub-heading">Bachelor of science Computer Science</span>

                </div>

                <div className='heading-date'>
                    <span className='date'>2022 - On Going</span>
                </div>

            </div>

            <div className="about-me-heading">

                {/* <div className="details-bullet"></div> */}

                <div className='main-sub'>

                    <div className='about-main-heading'>

                        <div className="details-bullet"></div>
                        <span className="institute-name">GRIC</span>
                        
                    </div>

                    <span className="about-sub-heading">Higher Secondary School Education</span>

                </div>

                <div className='heading-date'>
                    <span className='date'>2019 - 2021</span>
                </div>

            </div>

            <div className="about-me-heading">

                {/* <div className="details-bullet"></div> */}

                <div className='main-sub'>

                    <div className='about-main-heading'>

                        <div className="details-bullet"></div>
                        <span className="institute-name">Government High School</span>
                        
                    </div>

                    <span className="about-sub-heading">Secondary School Education</span>

                </div>

                <div className='heading-date'>
                    <span className='date'>2017 - 2019</span>
                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default Education
