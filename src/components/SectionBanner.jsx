import React from 'react'
import Background from "../../src/assets/section-bg.jpg";
import Shape from "../../src/assets/shape.png"
import { Fade } from 'react-awesome-reveal';
function SectionBanner({head,sub}) {
  return (
    <>
       <div className='h-[300px] lg:h-[600px] relative' style={{
        backgroundImage:`url(${Background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center center"
       }}>
           <div className='flex flex-col justify-center items-center text-center h-full '>
           <Fade className='z-10' direction='left' triggerOnce><h2 className=' font-bold text-2xl md:text-5xl'>{head}</h2></Fade>
           <Fade direction='right' triggerOnce className='z-10'> <p className='text-white max-w-[400px] md:max-w-[600px]'>{sub}</p></Fade>
            <Fade direction='bottom' className='z-10'><img className='z-10' src={Shape} alt="" /></Fade>
           </div>
            {/* overlay */}
       <div className='absolute bg-black/70 top-0 left-0 right-0 bottom-0'></div>
       </div> 
      
    </>
  )
}

export default SectionBanner