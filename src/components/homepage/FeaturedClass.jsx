import React from 'react'
import SectionHeading from '../SectionHeading'
import { Fade } from 'react-awesome-reveal'

function FeaturedClass({latestClassData}) {
  console.log("featured class",latestClassData)
  return (
    <>
        <SectionHeading heading='Featured Class' subHeading='Explore a variety of dynamic classes designed to suit all fitness levels, helping you stay motivated, build strength, and achieve your health goals.' />

        {/* featured class */}
       <div className="container mx-auto my-10">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          latestClassData.map(latest=>{
            const{image,className,details,_id}=latest
            return(
              <Fade duration={500} triggerOnce key={_id} >
              <div className=" mx-auto  rounded-lg shadow-lg shadow-gray-800 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt="Fitness Routine"
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-400 text-sm mb-2">
          
        </div>
        <h3 className="text-deepOrange text-lg font-semibold mb-2">
          {className}
        </h3>
        <p className="text-white text-sm">
          {details}
        </p>
      </div>
              </div>
              </Fade>
            )
          })
        }
        </div>
       </div>
    </>
  )
}

export default FeaturedClass