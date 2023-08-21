import React, { useEffect, useState } from 'react'
import './index.css'
import SectionHeadings from '../section headings/SectionHeadings'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactImg from '../../assets/images/contact-img.jpeg'
import Form from './Form';

const ContactMe = ({ onSubmition }) => {

  const [addClass, setAddClass] = useState(false)

  const hideSlash = () => {
    setAddClass(!addClass);
  }

  useEffect(() => {
    setTimeout(hideSlash, 500)
  }, [addClass] )

  return (
    <>

      <section id='contact' className='contact-section'>

        <SectionHeadings sectionMainHeading= 'Contact Me' sectionSubHeading= 'Lets Keep In Touch'/>

        <div className='contact'>

          <div className='contact-left-section'>

            <div className='contact-left-upper'>

              <div className='contact-heading'> 

                <p className='contact-main-heading'>
                  Get in Touch 
                  <span className='email-icon'>📧</span> 
                  <span id='slashId' className= {`slash ${addClass ? 'slash2' : ''}`} >|</span> 
                </p>

              </div>

              <div className='contact-section-icons'>
                <a href='https://www.linkedin.com/in/muhammad-husnain-shakil-037833249/' target='blank' className='icon'> <LinkedInIcon style={{fontSize: '1rem'}}/> </a>
                <a href='https://github.com/Husnain-Shakil' target='blank' className='icon'> <GitHubIcon style={{fontSize: '1rem'}}/> </a>
                <a href='https://www.facebook.com/profile.php?id=100073257401188' target='blank' className='icon'> <FacebookIcon style={{fontSize: '1rem'}}/> </a>
                <a href='https://www.instagram.com/hsnain1020/' target='blank' className='icon'> <InstagramIcon style={{fontSize: '1rem'}}/> </a>
              </div>

            </div>

            <div className="contact-left-lower">

              <div className="lower-back">

                <p>Send Your Email Here!</p>

                <div className="lower-back-img">
                  <img className='contact-img' src={ContactImg} alt="" />
                </div>

              </div>

            </div>

          </div>

          <div className="contact-right-section">

            <div className="form-section">

              <Form onSubmition= {onSubmition}/>
              
            </div>

          </div>



        </div>

      </section>

    </>
  )
}

export default ContactMe
