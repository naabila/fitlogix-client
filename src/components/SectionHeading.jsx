import React from 'react'
import { Fade } from 'react-awesome-reveal'

function SectionHeading({heading,subHeading}) {
  return (
    <>
      <div className='flex items-center justify-center mt-10'>
      <div className="flex flex-col gap-3 text-white lg:max-w-screen-md text-center items-center">
      <Fade direction='left' triggerOnce>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{heading}</h2>
        </Fade>
        <Fade direction='right' triggerOnce>
            <p className='text-sm md:text-base'> {subHeading} </p>
        </Fade>
      </div>
      </div>
    </>
  )
}

export default SectionHeading