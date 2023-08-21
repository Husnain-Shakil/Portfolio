import React from 'react'
import './index.css'

const Closing = ({show}) => {
  return (
    <>

        <section className={`closing-section ${show ? '' : 'closing-section-2'}`}>

            <div className='closing'>

                <p className='text'>
                    Thank You for contact. <br /> 
                    Reply you soon🙂
                </p>

            </div>

        </section>

    </>
  )
}

export default Closing
