import React from 'react';
import { Carousel } from "flowbite-react";
import { Link } from 'react-router-dom';
import Header1 from "../../../client/src/assets/h1.jpg";
import Header2 from "../../../client/src/assets/h2.jpg"
import Header3 from "../../../client/src/assets/h3.jpg"
function Hero() {
  return (
    <>
    <div  className="h-[50vh] md:h-[80vh] relative">
      <Carousel>
      {/* slide 1 */}
      <div style={{
      background:`url(${Header1})`,
      backgroundSize:'cover',
      backgroundPosition:'center center',
      backgroundRepeat:'no-repeat'
    }} className="relative flex justify-center h-full items-center flex-col">
        {/* slider content */}
        <div className="slider-1 z-20">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Transform Your Fitness Journey Today</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Achieve your fitness goals with expert guidance, personalized plans, and unmatched motivation. Start your journey to a healthier you now.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to='/allclass' href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-deepOrange hover:bg-lightOrange focus:ring-4 focus:ring-deepOrange dark:focus:ring-deepOrange">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to='/alltrainer' href="#" className="inline-flex justify-center hover:text-deepOrange items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-deepOrange rounded-lg border border-deepOrange hover:bg-transparent focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
        </div>
        {/* overlay */}
        <div className='absolute z-10 bg-black/50 top-0 bottom-0 right-0 left-0'></div>
      </div>

      {/* slide 2 */}
      <div style={{
      background:`url(${Header2})`,
      backgroundSize:'cover',
      backgroundPosition:'top center',
      backgroundRepeat:'no-repeat'
    }} className="relative flex justify-center h-full items-center flex-col">
        {/* slider content */}
        <div className="slider-1 z-20">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Unlock Your Full Potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Build strength, endurance, and confidence with tailored workouts and nutrition advice designed to help you conquer your fitness goals.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to='/allclass' href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-deepOrange hover:bg-lightOrange focus:ring-4 focus:ring-deepOrange dark:focus:ring-deepOrange">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to='/alltrainer' href="#" className="inline-flex justify-center hover:text-deepOrange items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-deepOrange rounded-lg border border-deepOrange hover:bg-transparent focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
        </div>
        {/* overlay */}
        <div className='absolute z-10 bg-black/50 top-0 bottom-0 right-0 left-0'></div>
      </div>

       {/* slide 3 */}
      <div style={{
      background:`url(${Header3})`,
      backgroundSize:'cover',
      backgroundPosition:'top center',
      backgroundRepeat:'no-repeat'
    }} className="relative flex justify-center h-full items-center flex-col">
        {/* slider content */}
        <div className="slider-1 z-20">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Fitness Redefined, Results Guaranteed</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"> Join a community that empowers you to push limits, crush goals, and embrace a healthier, stronger lifestyle every day.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to='/allclass' href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-deepOrange hover:bg-lightOrange focus:ring-4 focus:ring-deepOrange dark:focus:ring-deepOrange">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to='/alltrainer' href="#" className="inline-flex justify-center hover:text-deepOrange items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-deepOrange rounded-lg border border-deepOrange hover:bg-transparent focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
        </div>
        {/* overlay */}
        <div className='absolute z-10 bg-black/50 top-0 bottom-0 right-0 left-0'></div>
      </div> 
       
      </Carousel>
    </div>
     
  </>
  )
}

export default Hero