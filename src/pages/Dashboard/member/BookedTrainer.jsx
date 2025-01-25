import React, { useContext, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';
import SectionBanner from '../../../components/SectionBanner';
import { AuthContext } from '../../../ContextProviders/AuthContextProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function BookedTrainer() {
  const{id}=useParams();
  const{user}=useContext(AuthContext);
  // search params
  const [searchParams] = useSearchParams();
  // Retrieve search parameter values
  const slot = searchParams.get('day');
  const className = searchParams.get('className');
  const slotTime = searchParams.get('time');
  const axiosPublic=useAxiosPublic();
  const axiosSecure=useAxiosSecure();
  const navigate=useNavigate();
  const [pakage, setPakage] = useState({ name: "Basic Pakage", value: 10 });
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

  // Onsubmit
  const handleBooking=(e) => {
    e.preventDefault();
  
     // Construct booking data
    const bookData = {
      pakageName: pakage.name, 
      pakageValue: pakage.value,
      trainerName: data?.name || "N/A",
      trainerEmail: data?.email || "N/A",
      experience: data?.experience || "N/A",
      slot,
      id:data._id,
      class: className,
      slotTime,
      trainerImage: data?.image || "",
      clientName: user?.displayName || "Anonymous",
      clientEmail: user?.email || "N/A",
    };
  
    // Log booking data
    console.log("Selected Package:", bookData);
   try{
    const {data}=await axiosSecure.post('/bookedtrainer',bookData);
    navigate("/payment")
    alert("trainer booked");
   }catch(err){
    console.log(err)
   }

  navigate(`/payment?trainerName=${data?.name}&slotName=${slot}&pakageName=${pakage?.name}&pakagePrice=${pakage.value}&className=${className}`)
  };

  
  const{image,name,experience,email,description,days,age,skill,_id}=data
  return (
    <>
      <SectionBanner head='Book a Trainer' sub='Book a personal trainer to achieve your fitness goals with tailored guidance, flexible schedules, and expert support today!' />

      {/* book trainer */}
      <div className="container mx-auto px-5 lg:px-3 mt-10">
        <div className="flex flex-col md:flex-row  gap-8 items-center justify-center">
          <img className='h-[300px] w-[300px] rounded-full' src={image} alt="trainer" />
          <div className="content">
              <p className='flex gap-3'>
                <span className='font-semibold text-deepOrange text-xl'>Trainer name:</span>
                {name}
              </p>
              <p className='flex gap-3'>
                <span className='font-semibold text-deepOrange text-xl'>Age:</span>
                {age}
              </p>
              <p className='flex gap-3'>
                <span className='font-semibold text-deepOrange text-xl'>Experience:</span>
                {experience} years
              </p>
              <p className='flex gap-3'>
                <span className='font-semibold text-deepOrange text-xl'>Class:</span>
                {className}
              </p>
              <p className='flex gap-3'>
                <span className='font-semibold text-deepOrange text-xl'>Slot:</span>
                {slot}
              </p>
              <p className='flex flex-col max-w-[400px] gap-3'>
                <span className='font-semibold text-deepOrange text-xl'>Details:</span>
                {description}
              </p>
              <form onSubmit={handleBooking}>
    <div>
      <label className="font-semibold text-deepOrange text-xl mr-3" htmlFor="Pakages">
        Packages
      </label>
      <select
        value={pakage.value}
        onChange={(e) =>
          setPakage({
            name: e.target.options[e.target.selectedIndex].text, 
            value: e.target.value, 
          })
        }
      >
        <option value="" disabled>
          Select a package
        </option>
        <option value="10">Basic Membership</option>
        <option value="50">Standard Membership</option>
        <option value="100">Premium Membership</option>
      </select>
    </div>
    <button
      type="submit"
      className="bg-deepOrange text-white font-semibold px-8 text-xl hover:bg-customBg transition-all hover:border py-3 mt-10"
    >
      Join Now
    </button>
  </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default BookedTrainer