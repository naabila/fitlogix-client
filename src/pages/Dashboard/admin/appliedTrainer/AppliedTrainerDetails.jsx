import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import { Button, Modal,Label,Textarea } from "flowbite-react";
import { useState } from "react";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Fade } from 'react-awesome-reveal';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';


function AppliedTrainerDetails() {
  
  const [openModal, setOpenModal] = useState(false);
  const[feedback,setFeedback]=useState('')
  const axiosSecure = useAxiosSecure();
  const axiosPublic=useAxiosPublic();
  const navigate=useNavigate()
  const { id } = useParams();

  // Fetch trainer details
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['appliedTrainerDetailss', id],
    queryFn: async () => {
      try {
        // Make the GET request
        const response = await axiosSecure.get(`/appliedtrainerdetails/${id}`);
        return response.data; 
      } catch (err) {
        console.error('Error fetching trainer details:', err);
        throw err; 
      }
    },
  });


// Loading state
  if (isLoading) return <Loading />;
// Check if data exists
  if (!data) {
    return <p className="text-center text-gray-500">No details found for this trainer.</p>;
  }

// Accept trainer
const handleAcceptTrainer = async (data) => {
 try{
  const applicantData=data;
  const res=await axiosPublic.post('/accepttrainer',applicantData);
  
  if(res.data.insertedId){
    toast.success("trainer added successfully");
    navigate('/dashboard/appliedtrainer')
  }
 }catch(err){
  console.log(err)
 }
  
};

//Reject Trainer
const handleReject = async (data) => {
  try{
   const applicantData={name:data.name,email:data.email,status:data.status="rejected",image:data.image,feedback,applicantId:data._id};
   console.log("reject",applicantData)
   const res=await axiosSecure.post('/rejecttrainer',applicantData);
   
   if(res.data.insertedId){
     setOpenModal(false)
     console.log(res.data)
     navigate('/dashboard/appliedtrainer')
   }
  }catch(err){
   console.log(err)
  }
   
 };

  // Destructure data
  const { name, age,image, email,description,skill,experience } = data;

  return (
   <div className="container mx-auto p-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
           {/* Left Column */}
           <Fade direction="left" triggerOnce>
           <div className="flex flex-col items-center md:items-start">
             <img
               src={image}
               alt="Trainer"
               className="rounded-md"
             />
             
             <p>
               <span className="font-bold">Age:</span> {age}
             </p>
            
             <p>
               <span className="font-bold">Email:</span>{" "}
               <Link href="mailto:example@example.com" className="text-blue-500">
                {email}
               </Link>
             </p>
             <p>
               <span className="font-bold">Phone:</span> 801546142343243
             </p>
             <div className="flex space-x-4 mt-4">
             <button className='bg-deepOrange text-white font-semibold px-8 text-xl hover:bg-customBg transition-all hover:border py-3'  onClick={()=>handleAcceptTrainer(data)}>Accept</button>

             <button onClick={() => setOpenModal(true)} className='bg-deepOrange text-white font-semibold px-8 text-xl hover:bg-customBg transition-all hover:border py-3' >Reject</button>
             </div>
           </div>
           </Fade>
   
           {/* Right Column */}
           <Fade direction='right' triggerOnce>
           <div>
             <h2 className="text-2xl font-bold">{name}</h2>
             <p className="text-sm text-gray-600">Fitness Trainer</p>
             <h3 className="mt-4 text-xl font-bold text-orange-600">Biography:</h3>
             <p className="text-white">
              {description}
             </p>
             <h3 className="mt-4 text-xl font-bold text-orange-600">Skills:</h3>
             <div>
              {
                skill.map((s,indx)=>{
                  return(
                    <button className='text-deepOrange px-3 py-2 border border-deepOrange m-2 rounded-full' key={indx}>{s}</button>
                  )
                })
              }
             </div>
           </div>
           </Fade>
         </div>

         {/* Modal */}
         <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='bg-[#3c3c3c]'>
          <h2>Give Feedback</h2>
        </Modal.Header>
        <Modal.Body className='bg-[#3c3c3c]'>
          <div className="space-y-6">
          <div className='flex gap-5 items-center'>
            <img className='h-[200px] w-[200px] object-cover' src={image} alt="trainer" />
           <div>
             {/* name */}
             <div className='flex gap-2'>
             <p className='font-semibold '>Name:</p>
            <p>{name}</p>
            </div>
            {/* age */}
            
            <div className='flex gap-2'>
             <p className='font-semibold '>Age:</p>
            <p>{age}</p>
            </div>
            {/* email */}
            <div className='flex gap-2'>
             <p className='font-semibold '>Email:</p>
            <p>{email}</p>
            </div>
            {/* experience */}
            <div className='flex gap-2'>
             <p className='font-semibold '>Experience:</p>
            <p>{experience}</p>
            </div>
            {/* description */}
            <div className='flex flex-col gap-2'>
             <p className='font-semibold '>Details:</p>
            <p>{description}</p>
            </div>

           </div>
          </div>
            <div>
                       <Label
                         htmlFor="Feedback"
                         value="Feedback"
                         className="mb-2 block text-white"
                       />
                       <Textarea
                         id="className"
                         name="className"
                         type="text"
                         placeholder="Enter class name"
                         value={feedback}
                         onChange={(e) => setFeedback(e.target.value)}
                         required
                       />
                     </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='bg-[#3c3c3c]'>
          <Button onClick={()=>handleReject(data)} className='bg-deepOrange'>Submit</Button>
         
        </Modal.Footer>
      </Modal>
       </div>
  );
}

export default AppliedTrainerDetails;
