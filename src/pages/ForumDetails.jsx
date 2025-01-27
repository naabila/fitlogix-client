import React from 'react'
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import SectionBanner from '../components/SectionBanner';

function ForumDetails() {
    const{id}=useParams();
    const axiosPublic=useAxiosPublic();
    const { isLoading,data } = useQuery({
        queryKey: ['forumdetails'],
        queryFn: async ()=>{
          try{
            const {data}=await axiosPublic.get(`/forumdetails/${id}`);
            return data ||[]
          }catch(err){
            console.log(err)
          }
        },
      });
    
      if (isLoading) {
        return <Loading />;
      }
      if (!data || data.length === 0) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>No post to show at this moment</p>
          </div>
        );
      }
    console.log("payment",data)
  return (
    <>
        <SectionBanner head='Blog Post' />
        <div className="container mx-auto my-10">
            <div className="grid px-5 grid-cols-1 md:grid-cols-2 items-center ">
                <img src={data.image} alt="blog image" />
                <div>
                <h2 className='text-deepOrange text-2xl'>{data.title}</h2>
                <p>{data.details}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForumDetails