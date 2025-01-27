import React from 'react'
import SectionHeading from '../SectionHeading'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function BlogPost({forumData}) {
    
  return (
    <>
        <SectionHeading heading='Latest Fitness Article' subHeading='A recent study reveals that aerobic fitness, measured by VO₂ max, is a stronger predictor of longevity than body mass index (BMI), emphasizing the importance of cardiovascular health over weight alone' />

        {/* featured class */}
       <div className="container mx-auto my-10">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          forumData.map(latest=>{
            const{image,className,details,_id,title}=latest
            return(
              <Fade duration={500} triggerOnce key={_id} >
              <Link to={`/forumdetails/${_id}`}>
              <div className="mx-auto overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt="Fitness Routine"
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="">
        <div className="flex items-center text-gray-400 text-sm mb-2">
         
        </div>
        <h3 className="text-deepOrange text-xl font-bold mb-2">
        {title}
        </h3>
        <p className="text-white text-sm">
          {details}
        </p>
      </div>
              </div>
              </Link>
              
              </Fade>
            )
          })
        }
        </div>
       </div>
    </>
  )
}

export default BlogPost