import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import HeroBanner from './components/hero section/HeroBanner'
import AboutMe from './components/about me/AboutMe'
import Projects from './components/projects/Projects'
import ContactMe from './components/contact me/ContactMe'
import Resume from './components/resume/Resume'
import ScrollButton from './components/scroll button/scrollButton'
import Closing from './components/closings/Closing'

const App = () => {

  const [show, setShow] = useState(false);

  const onSubmition = () => {
    setShow(true)
  }

  const changeState = () => {
    setShow(false);
  }

  setTimeout(changeState, 3000);


  return (
    <>

      <HashRouter>

        <Closing show={show}/>

        <ScrollButton />      


        <section className={`${show ? 'all-sections' : ''}`}>

          <HeroBanner  />
          <AboutMe  />
          <Resume />
          <Projects  />
          <ContactMe onSubmition= {onSubmition}/>

        </section>
        
      </HashRouter>

    </> 
  )
}

export default App
