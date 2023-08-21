import React, { useState } from 'react'
import './index.css'
import { HashLink } from 'react-router-hash-link'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = (link, e) => {
        e.preventDefault();                  // e.preventDefault() will pevent search tab from updating but it will also stop scrolling that's why we introduce another function, smoothScrollToSection() which will take the id of the components or sections and scroll to that section.
        setActiveLink(link);
        smoothScrollToSection(link);
    }

    const smoothScrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
        });
     };

  return (
    <>
      
      <div className='navbar'>

        <h2 className='logo'>Portfolio</h2>

        <div onClick={() => setShowMenu(true)} className='toggle'>  <MenuIcon style={{fontSize: '2rem'}} />  </div>

        <div onClick={() => setShowMenu(false)} className={`nav-section ${showMenu === true ? 'nav-section-mobile' : ''}`}>

          <div className='nav'>

            <ul>

                <li className= {`${activeLink === 'home' ? 'active' : '' }`}>
                    <HashLink onClick={(e) => {handleClick('home', e)}} className='link' smooth to='#home'> Home </HashLink>
                </li>

                <li className= {`${activeLink === 'about' ? 'active' : '' }`}>
                    <HashLink onClick={(e) => {handleClick('about', e)}} className='link' smooth to= '#about'> About </HashLink>
                </li>

                <li className= {`${activeLink === 'resume' ? 'active' : '' }`}>
                    <HashLink onClick={(e) => {handleClick('resume', e)}} className='link' smooth to= '#resume'> Resume </HashLink>
                </li>

                <li className= {`${activeLink === 'projects' ? 'active' : '' }`}>
                    <HashLink onClick={(e) => {handleClick('projects', e)}} className='link' smooth to= '#projects'> Projects </HashLink>
                </li>

                <li className= {`${activeLink === 'contact' ? 'active' : '' }`}>
                    <HashLink onClick={(e) => {handleClick('contact', e)}} className='link' smooth to= '#contact'> Contact </HashLink>
                </li>

            </ul>

          </div>
            
        </div>

      </div>

    </>

  )
}

export default Navbar
