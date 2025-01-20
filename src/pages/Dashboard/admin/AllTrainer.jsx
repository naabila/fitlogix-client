import React from 'react'
import DynamicTitle from '../../../components/DynamicTitle'
import SectionBanner from '../../../components/SectionBanner'
import SectionHeading from '../../../components/SectionHeading';
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function AllTrainer() {
 const axiosPublic=useAxiosPublic();
  const { isLoading, data } = useQuery({
    queryKey: ['trainers'],
    queryFn: async ()=>{
      try{
        const {data}=await axiosPublic.get('/trainers');
        return data
      }catch(err){
        console.log(err)
      }
    },
  })

  if(isLoading){
    return <Loading></Loading>
  }

  if (!data || data.length === 0) {
    return <div>No trainers found.</div>; 
  };


  console.log(data)
  return (
   <>
    <DynamicTitle title='FitLogix | All Trainers' />
    <SectionBanner head='Our Trainers' sub='Our professional trainers are ready to assist you in reaching your training goals' />
    <div className="container mx-auto px-5">
      <SectionHeading heading='Meet Our Expert Trainers' subHeading='Discover our certified trainers dedicated to guiding you on your fitness journey with expertise and personalized support' />
      {/* trainer card */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-8">
      {
        data.map(trainer=>{
          const{name,age,image,experience,days,description,_id}=trainer;
          return(
            <div key={_id} className=" bg-[#3c3c3c] text-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Card"
        />
        
      </div>
      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className='flex items-center gap-2'><h3 className='font-semibold'>Age:</h3>{age}</div>
        <div className='flex items-center gap-2'><h3 className='font-semibold'>Experience:</h3>{experience} years</div>
        <div className='flex items-center gap-2 mt-2'><h3 className='font-semibold'>Slot:</h3>
        {
          days.map((s,indx)=>{
            return <button className='text-deepOrange text-sm border border-deepOrange px-5 rounded-full' key={indx}>{s}</button>
          })
        }
        </div>
        <p className="text-gray-300 mt-2">
        {description.substring(0,90)} ... <Link to={`/trainerdetails/${_id}`}
          className='text-deepOrange text-sm'
          >
            Know more
          </Link>
        </p>
        <div className="socials my-3 flex gap-3 text-deepOrange">
        <CiFacebook />
        <FiTwitter />
        <FaInstagram />
        </div>
      </div>
    </div>
          )
        })
      }
    </div>

    </div>
   </>
  )
}

export default AllTrainer