import { Button } from 'flowbite-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CustomBtn from '../../../components/CustomBtn';
import  trainer from "../../../assets/trainer.jpg"
import { Fade } from 'react-awesome-reveal';
import Loading from '../../../components/Loading';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
function TrainerDetails() {
  const{id}=useParams();
  
  const axiosPublic=useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ['trainer'],
    queryFn: async()=>{
      try{
        const {data}=await axiosPublic.get(`/trainer/${id}`)
        return data;
      }catch(err){
        console.log(err)
      }
    },
  });
  if(isLoading){
    return <Loading></Loading>
  }
  
  if(!data || data.length===0){
    return <p>No data found</p>
  }
  const{image,name,experience,email,description,days,age,skill,_id}=data
  return (
    <>
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center">
        {/* Left Column */}
        <Fade direction="left" triggerOnce>
        <div className="flex flex-col items-center md:items-start">
          <img
            src={image}
            alt="Trainer"
            className="rounded-md"
          />
          <p className="mt-4">
            <span className="font-bold">Experience:</span> {experience} Years
          </p>
          <p>
            <span className="font-bold">Age:</span> {age}
          </p>
         
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:example@example.com" className="text-blue-500">
             {email}
            </a>
          </p>
          <p>
            <span className="font-bold">Phone:</span> 801546142343243
          </p>
          <h3 className="mt-16 lg:mt-4 text-xl font-bold text-orange-600">Available Slots:</h3>
          <div className='flex gap-3 mt-5'>
        {
          days.map((d,indx)=>{
           return(
            
           <Link key={indx} to={`/booktrainer/${_id}?day=${d}`}>
           <input
  type="button"
  value={d} 
  className="text-deepOrange border border-deepOrange px-8 py-2 cursor-pointer rounded"
/>
           
           </Link>
          
           )
          })
        }
        </div>
        </div>
        </Fade>

        {/* Right Column */}
        <Fade direction='right' triggerOnce>
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600">Fitness Trainer</p>
          <h3 className="mt-4 text-xl font-bold text-orange-600">Biography:</h3>
          <p className="text-gray-300">
           {description}
          </p>
          <h3 className="mt-4 text-xl font-bold text-orange-600">Skills:</h3>
          <div className='flex gap-3'>
        {
          skill.map((s,indx)=>{
           return(
            
           <button key={indx} className='text-deepOrange border border-deepOrange px-2'>{s}</button>
          
           )
          })
        }
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