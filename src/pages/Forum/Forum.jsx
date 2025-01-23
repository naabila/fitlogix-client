import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Loading from '../../components/Loading';
import { useQuery } from '@tanstack/react-query';
import SectionHeading from '../../components/SectionHeading';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Forum() {
  const axiosPublic = useAxiosPublic();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["forum"],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/forum');
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No Activity to show at this moment</p>
      </div>
    );
  }

  return (
    <>
      <SectionHeading
        heading="Explore the Fitness Forum"
        subHeading="Dive into Discussions, Share Your Insights, and Stay Motivated on Your Fitness Journey"
      />
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {data.map((d) => {
            const { title, image, details, role, _id } = d;

            return (
              <div key={_id} className="flex relative flex-col gap-3 bg-[#3c3c3c] shadow-lg p-5 rounded-md border border-deepOrange">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm">{details}</p>
                  
                </div>
                <div className="flex items-center gap-5 justify-start mt-5">
                <div className='relative'>
                <FaArrowUp className='text-deepOrange' />
                {/* upvote */}
                <p className='absolute -top-5 right-0'>1</p>
                </div>
               <div className='relative'>
               <FaArrowDown className='text-deepOrange relative' />
                {/* down pote */}
                <p className='absolute -top-5 right-0'>1</p>
               </div>
                </div>
                {/* badge */}
                <div className="absolute bg-deepOrange text-white top-8 right-8 px-3 rounded-full">{role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Forum;
