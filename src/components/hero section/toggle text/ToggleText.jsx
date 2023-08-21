import React, { useState, useEffect } from 'react'
import './index.css'

const ToggleText = () => {

    const arr = ['React Developer🌐', 'Front End Developer💻', 'Enthusiastic Dev😎']

    const [word, setWord] = useState(0)
    const [addClass, setAddClass] = useState(false)


//  for arr toggling
    const timer = () => {
      return setWord((prevValue) => {
        return (
          prevValue + 1
        ) % arr.length                   // whenever the value of (prevValue + 1) exceeds or equal to arr.length, % will wraps the index back to the beginning of the array.
      })
    }

    useEffect(() => {
      setTimeout(timer, 2000)
    }, [word])
    

 //  for slash toggling
    const hideSlash = () => {
        setAddClass(!addClass);
      }
    
      useEffect(() => {
        setTimeout(hideSlash, 500)
      }, [addClass] )

  return (
    <div className='heroBanner-skills'>
      <p className='skill'> {arr[word]} </p>
      <span id='slashId' className= {`heroBanner-slash ${addClass ? 'heroBanner-slash2' : ''}`} >|</span>
    </div>
  )
}

export default ToggleText