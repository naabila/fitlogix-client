import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomBtn from '../../../components/CustomBtn';
import  trainer from "../../../assets/trainer.jpg"
import { Fade } from 'react-awesome-reveal';
function TrainerDetails() {
  return (
    <>
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Column */}
        <Fade direction="left" triggerOnce>
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/10/18/21/woman-6784555_640.jpg"
            alt="Trainer"
            className="rounded-md"
          />
          <p className="mt-4">
            <span className="font-bold">Experience:</span> 3 Years
          </p>
          <p>
            <span className="font-bold">Age:</span> 28
          </p>
          <p>
            <span className="font-bold">Weight:</span> 77 kg
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:example@example.com" className="text-blue-500">
              example@example.com
            </a>
          </p>
          <p>
            <span className="font-bold">Phone:</span> 801546142343243
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-red-600">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
        </Fade>

        {/* Right Column */}
        <Fade direction='right' triggerOnce>
        <div>
          <h2 className="text-2xl font-bold">David Smith</h2>
          <p className="text-sm text-gray-600">Fitness Trainer</p>
          <h3 className="mt-4 text-xl font-bold text-orange-600">Biography:</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
            ante quis justo egestas euismod. Aenean feugiat nisi commodo quam
            ornare dictum.
          </p>
          <h3 className="mt-4 text-xl font-bold text-orange-600">Skills:</h3>
          <div className="mt-2">
            <p className="flex justify-between">
              <span>Yoga</span>
              <span>95%</span>
            </p>
            <div className="w-full bg-gray-300 rounded h-2">
              <div className="bg-orange-500 h-2 rounded" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="mt-2">
            <p className="flex justify-between">
              <span>Boxing</span>
              <span>68%</span>
            </p>
            <div className="w-full bg-gray-300 rounded h-2">
              <div className="bg-orange-500 h-2 rounded" style={{ width: "68%" }}></div>
            </div>
          </div>
          <div className="mt-2">
            <p className="flex justify-between">
              <span>GYM</span>
              <span>89%</span>
            </p>
            <div className="w-full bg-gray-300 rounded h-2">
              <div className="bg-orange-500 h-2 rounded" style={{ width: "89%" }}></div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>

    {/* become a trainer CTA */}
    
    <Fade>
    <div className="container mx-auto">
    <section
     style={{
    backgroundImage: `url(${trainer})`,
    backgroundPosition:"center center"
  }}
      className='bg-center max-h-[60vh] bg-no-repeat  bg-gray-700 bg-blend-multiply'
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
          Become a Trainer
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Transform lives and inspire others as a fitness trainer.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link to='/betrainer'>
            <CustomBtn>Be a trainer</CustomBtn>
          </Link>
             
        </div>
      </div>
    </section>
    </div>
    </Fade>


    </>
  )
}

export default TrainerDetails