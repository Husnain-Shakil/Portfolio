import React from 'react'
import './index.css'

const SectionHeadings = ({ sectionMainHeading, sectionSubHeading }) => {
  return (
    <>

        <div className="heading-section">

            <h1 className='heading'> {sectionMainHeading} </h1>
            <p className='sub-heading'> {sectionSubHeading} </p>

            <div className='heading-separator'>

                <div className='separator-line'>
                    <hr className='line'/>
                </div>

                <div className="separator-blob">
                    <hr className='blob'/>
                </div>

            </div>

        </div>

    </>
  )
}

export default SectionHeadings
