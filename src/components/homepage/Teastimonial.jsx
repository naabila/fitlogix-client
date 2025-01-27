import React from 'react'
import SectionHeading from '../SectionHeading'
import testimonial from "../../../src/assets/testimonial.jpg";
import { FaQuoteRight } from "react-icons/fa";
import TestimonialSlider from './TestimonialSlider';

function Teastimonial({reviewData}) {
  return (
    <>
         <section className="py-16 lg:py-24 px-6 md:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative lg:w-1/2">
          <img
            src={testimonial}
            alt="Gym Member"
            className="max-w-lg rounded-lg shadow-lg"
          />
          <div className="absolute bottom-6 -left-4 bg-deepOrange w-16 h-12 transform -skew-x-12"></div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 text-white relative">
        {/* quote icon */}
        <div className='absolute -top-16 -left-32'><FaQuoteRight className='text-[138px] text-gray-400/10' /></div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What they say about us</h3>
          
          {/* User Info */}
          <TestimonialSlider reviewData={reviewData} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Teastimonial