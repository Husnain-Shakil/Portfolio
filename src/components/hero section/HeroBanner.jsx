import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './index.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ProfileImage from '../../assets/images/profile-image.png'
import WhiteImage from '../../assets/images/download.png'
import Resume from '../../assets/files/resume.pdf'
import Navbar from './navbar/Navbar';
import ToggleText from './toggle text/ToggleText'

const HeroBanner = () => {

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
    <>

    <div id='home' className="home-container">

      <div className="header-container">
         
        <Navbar />

      </div>

      <div className='profile-container'>

          <div className='profile-parent'>

            <div className="text-section">

              <div className='icons'>
                <a href='https://www.linkedin.com/in/muhammad-husnain-shakil-037833249/' target='blank' className='icon'> <LinkedInIcon /> </a>
                <a href='https://github.com/Husnain-Shakil' target='blank' className='icon'> <GitHubIcon /> </a>
                <a href='https://www.facebook.com/profile.php?id=100073257401188' target='blank' className='icon'> <FacebookIcon /> </a>
                <a href='https://www.instagram.com/hsnain1020/' target='blank' className='icon'> <InstagramIcon /> </a>
              </div>

              <h2 className='greetings'>Hello! I'M <span className='name'> Husnain </span> </h2>

              <ToggleText />

              <p className='knack'>Knack of building react web apps with modern ui/ux design.</p>

              <div className='buttons'>

                <div className='button1'> 
                  <HashLink className='btn1' onClick={(e) => {handleClick('contact', e)}} smooth to= '#contact'> Hire Me </HashLink> 
                </div>

                <div className='button1 button2'> 
                  <a download href= {Resume} className='btn1 btn2'>Get Resume</a> 
                </div>

              </div>

            </div>

            <div className='image-section'>

              <div className='image'>
                <img className='img' src={ProfileImage} alt="" />
              </div>

            </div>

          </div>

      </div> 

      <div className='footer-container'>

        <div className='footer-parent'>
          <img className='white-img' src={WhiteImage} alt="" />
        </div>

      </div>

    </div>
    </>
  )
}

export default HeroBanner
