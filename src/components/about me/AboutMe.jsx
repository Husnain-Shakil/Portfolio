import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './index.css'
import SectionHeadings from '../section headings/SectionHeadings'
import AboutImage from '../../assets/images/about-img.jpg'
import Resume from '../../assets/files/resume.pdf'
// import AboutImage from '../../assets/images/about-img.jpg'

const AboutMe = () => {

    const handleClick = (link, e) => {
        e.preventDefault();                  // e.preventDefault() will pevent search tab from updating but it will also stop scrolling that's why we introduce another function, smoothScrollToSection() which will take the id of the components or sections and scroll to that section.
        smoothScrollToSection(link);
    }

    const smoothScrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
        });
     };

  return (
    <section id='about' className='about-section'>

        <SectionHeadings sectionMainHeading= 'About Me' sectionSubHeading= 'Why Choose Me?'/>

        <div className="about">

        <div className='about-card'>

            <div className="about-card-content">

                <div className="image-area">
                  <img className='about-img' src={AboutImage} alt="" />
                </div>

                <div className="text-area">

                    <span className="text-description">
                        Front End Developer with strong knowledge of Javascript library React, along with many personal projects built with different technologies. Strong professional with a BSC willing to be an asset for an organization.
                    </span>

                    <div className="text-highlights">

                        <span className='highlights-heading'>
                            Here are a Few Highlights: 
                        </span>

                        <div className="highlights first-highlight">

                            <span className='highlights-bullet'></span>
                            <span className='highlight'> Front-End web development </span>

                        </div>

                        <div className="highlights">

                            <span className='highlights-bullet'></span>
                            <span className='highlight'> Single page applications using React </span>

                        </div>

                        <div className="highlights">

                            <span className='highlights-bullet'></span>
                            <span className='highlight'> React-Router-DOM </span>

                        </div>
                        
                        <div className="highlights">

                            <span className='highlights-bullet'></span>
                            <span className='highlight'> Redux Toolkit for State Mnanagement </span>

                        </div>

                        <div className="highlights">

                            <span className='highlights-bullet'></span>
                            <span className='highlight'> Use of Material UI for better interface </span>
                            
                        </div>

                        <div className="highlights">

                            <span className='highlights-bullet'></span>
                            <span className='highlight'> Responsive Web-Designs with or without frameworks like Bootstrap & Tailwind </span>
                            
                        </div>

                    </div>

                    <div className='buttons'>

                        <div className='button1'> 
                            <HashLink className='btn1' onClick={(e) => {handleClick('contact', e)}} smooth to= '#contact'>Hire Me</HashLink> 
                        </div>

                        <div className='button1 button2'> 
                            <a download href= {Resume} className='btn1 btn2'>Get Resume</a> 
                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>

    </section>
  )
}

export default AboutMe
