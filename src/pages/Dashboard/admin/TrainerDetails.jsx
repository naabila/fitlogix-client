import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomBtn from '../../../components/CustomBtn';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import trainerBgImage from "../../../assets/trainer.jpg";
import { Fade } from 'react-awesome-reveal';
import Loading from '../../../components/Loading';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../ContextProviders/AuthContextProvider';
import DynamicTitle from '../../../components/DynamicTitle';

function TrainerDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  // Fetch trainer details
  const { data: trainer = {}, isLoading: isTrainerLoading } = useQuery({
    queryKey: ['trainer', id],
    enabled: !!id,
    queryFn: async () => {
      try {
        const { data } = await axiosPublic.get(`/trainer/${id}`);
        return data || {};
      } catch (err) {
        console.error('Error fetching trainer details:', err);
        return {};
      }
    },
  });

  // Fetch slot data
  const { data: slots = [], isLoading: isSlotsLoading } = useQuery({
    queryKey: ['slots', trainer?.email],
    enabled: !!trainer?.email,
    queryFn: async () => {
      try {
        const { data } = await axiosPublic.get(`/slots/${trainer?.email}`);
        return data || [];
      } catch (err) {
        console.error('Error fetching slots:', err);
        return [];
      }
    },
  });

  // Show loading spinner while fetching trainer data
  if (isTrainerLoading) {
    return <Loading />;
  }

  // Handle case where trainer data is not available
  if (!trainer || Object.keys(trainer).length === 0) {
    return <p className="text-center text-xl font-bold text-red-500">No trainer data found.</p>;
  }

  // Destructure trainer details
  const { image, name, experience, email, description, age, skill } = trainer;

  return (
    <>
    <DynamicTitle title='FitLogix | Trainers details' />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Column */}
          <Fade direction="left" triggerOnce>
            <div className="flex flex-col items-center md:items-start">
              <img src={image} alt="Trainer" className="rounded-md" />
              <p className="mt-4">
                <span className="font-bold">Experience:</span> {experience} Years
              </p>
              <p>
                <span className="font-bold">Age:</span> {age}
              </p>
              <p>
                <span className="font-bold">Email:</span>{' '}
                <a href={`mailto:${email}`} className="text-blue-500">
                  {email}
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span> 801546142343243
              </p>
              
            </div>
          </Fade>

          {/* Right Column */}
          <Fade direction="right" triggerOnce>
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-sm text-gray-600">Fitness Trainer</p>
              <h3 className="mt-4 text-xl font-bold text-orange-600">Biography:</h3>
              <p className="text-gray-300">{description}</p>
              <h3 className="my-4 text-xl font-bold text-orange-600">Skills:</h3>
              <div className="grid grid-cols-2  md:grid-cols-3 gap-3">
                {skill?.map((s, index) => (
                  <button
                    key={index}
                    className="text-deepOrange border border-deepOrange px-2  py-2 rounded-full"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <h3 className="mt-8 text-xl font-bold text-orange-600">Available Slots:</h3>
              <div className="flex gap-3 mt-5">
                {isSlotsLoading ? (
                  <p>Loading slots...</p>
                ) : slots.length > 0 ? (
                 
                     <Table>
                          <Table.Head className='border border-deepOrange'>
                          <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Serial No.</Table.HeadCell>
                          <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Class</Table.HeadCell>
                            <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Slot time</Table.HeadCell>
                            <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Slot name</Table.HeadCell>
                            <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Book trainer</Table.HeadCell>
                          
                          </Table.Head>
                          {
                            slots.map((slot,indx)=>{
                             
                              return(
                                <Table.Body key={slot._id} className="divide-y">
                            <Table.Row className="bg-[#3c3c3c] text-white dark:border-gray-700 dark:bg-gray-800 border border-deepOrange">
                            <Table.Cell>{indx+1}</Table.Cell>
                            <Table.Cell>
                                {slot.className}
                              </Table.Cell>
                              <Table.Cell className="whitespace-nowrap font-medium white dark:text-white">
                                {slot.slotTime}
                              </Table.Cell>
                              
                             
                              <Table.Cell>{slot.slotName}</Table.Cell>
                             
                              <Table.Cell>
                              <Link to={`/booktrainer/${id}?day=${slot.slotName}&className=${slot.className}&time=${slot.slotTime}`}>
                              <button className='bg-deepOrange text-white py-2 px-5 font-semibold'>Book</button>
                              </Link>
                               
                              
                              </Table.Cell>
                            </Table.Row>
                           
                         
                          </Table.Body>
                              )
                            })
                          }
                        </Table>
                   
                
                ) : (
                  <p className="text-gray-500">No slots available for this trainer. Please check back later.</p>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Become a Trainer Section */}
      <Fade>
        <div className="container mx-auto">
          <section
            style={{
              backgroundImage: `url(${trainerBgImage})`,
              backgroundPosition: 'center center',
            }}
            className="bg-center max-h-[60vh] bg-no-repeat bg-gray-700 bg-blend-multiply my-10"
          >
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                Become a Trainer
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Transform lives and inspire others as a fitness trainer.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <Link to="/betrainer">
                  <CustomBtn>Be a Trainer</CustomBtn>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Fade>
    </>
  );
}

export default TrainerDetails;
