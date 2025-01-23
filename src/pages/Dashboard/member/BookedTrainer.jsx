import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';

function BookedTrainer() {
  const{id}=useParams();
  const [query,setQuery]=useSearchParams();
  console.log('query',query.get('day'))
  const axiosPublic=useAxiosPublic()
 
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

  console.log(data)
  const{image,name,experience,email,description,days,age,skill,_id}=data
  return (
    <div>BookedTrainer</div>
  )
}

export default BookedTrainer