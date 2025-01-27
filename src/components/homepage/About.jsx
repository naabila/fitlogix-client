import React from 'react'
import About1 from "../../../src/assets/about1.jpg";
import About2 from "../../../src/assets/about2.jpg";
import { Fade } from 'react-awesome-reveal';
function About() {
    return (
        <section className="text-white py-16 px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <Fade direction='left' triggerOnce>
            <div>
              <h4 className="text-deepOrange text-sm uppercase font-semibold mb-2">Who We Are</h4>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Building fitness is building your body and confidence
              </h2>
              <p className="text-gray-300 mb-6">
              Empower yourself physically and mentally to achieve your full potential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="flex items-center text-deepOrange font-semibold mb-2">
                    <span className="mr-2">&#8594;</span> Personal Trainer
                  </p>
                  <p className="text-gray-400">Expert guidance to tailor your workouts, build strength, and boost confidence, ensuring you achieve your fitness goals with personalized attention and support.</p>
                </div>
                <div>
                  <p className="flex items-center text-deepOrange font-semibold mb-2">
                    <span className="mr-2">&#8594;</span> Cardio Programs
                  </p>
                  <p className="text-gray-400">Dynamic cardio routines designed to improve endurance, burn calories, and strengthen your heart, helping you stay energized and confident in your fitness journey.</p>
                </div>
                <div>
                  <p className="flex items-center text-orange-500 font-semibold mb-2">
                    <span className="mr-2">&#8594;</span> Quality Equipment
                  </p>
                  <p className="text-gray-400">State-of-the-art fitness equipment ensuring safety, durability, and efficiency, empowering you to achieve optimal results and elevate your training experience with confidence.</p>
                </div>
                <div>
                  <p className="flex items-center text-deepOrange font-semibold mb-2">
                    <span className="mr-2">&#8594;</span> Healthy Nutrition
                  </p>
                  <p className="text-gray-400">Balanced nutrition plans to fuel your body, enhance recovery, and support your fitness goals, promoting overall health and confidence in your lifestyle choices.</p>
                </div>
              </div>
            </div>
            </Fade>
          
    
            {/* Image Content */}
            <Fade direction='right' triggerOnce>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={About2}
                  alt="Athlete 1"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* <div className="absolute top-16 right-0 transform translate-x-6 md:translate-x-8">
                <img
                  src={About1}
                  alt="Athlete 2"
                  className="rounded-lg shadow-lg"
                />
              </div> */}

              {/* shape */}
              {/* <div className="absolute bottom-2 right-2 bg-orange-500 w-16 h-16 md:w-20 md:h-20 rounded-lg"></div> */}
            </div>
            </Fade>
           
          </div>
        </section>
      );
}

export default About