import React from 'react'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../../components/Loading';
import SectionHeading from '../../../../components/SectionHeading';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

function AllTrainerAdmin() {
    const axiosSecure=useAxiosSecure();
  const { isLoading, data,refetch } = useQuery({
    queryKey: ['trainers'],
    queryFn: async ()=>{
      try{
        const {data}=await axiosSecure.get('/trainers');
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

// delete trainer function
const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#FF5E00",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) { 
          const res = await axiosSecure.delete(`/deletetrainer/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch(); // Refresh data only after deletion
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  



  return (
    <>
    <SectionHeading heading="All Trainer" 
      subHeading="Discover our certified trainers dedicated to guiding you on your fitness journey with expertise and personalized support"
    />

    {/* table */}
    <div className="overflow-x-auto mt-8 md-my-16">
    <Table>
      <Table.Head className='border border-deepOrange'>
      <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Serial No.</Table.HeadCell>
      <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Image</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Applicant name</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Age</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Email</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Status</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c]  py-5 text-white'>
          See more
        </Table.HeadCell>
      </Table.Head>
      {
        data.map((d,indx)=>{
          const{name,email,age,_id,status,image}=d
          return(
            <Table.Body key={_id} className="divide-y">
        <Table.Row className="bg-[#3c3c3c] text-white dark:border-gray-700 dark:bg-gray-800 border border-deepOrange">
        <Table.Cell>{indx+1}</Table.Cell>
        <Table.Cell>
            <img className='h-[80px] w-[80px] object-cover' src={image} alt="member" />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium white dark:text-white">
            {name}
          </Table.Cell>
          
         
          <Table.Cell>{age}</Table.Cell>
          <Table.Cell>{email}</Table.Cell>
          <Table.Cell>{status}</Table.Cell>
          <Table.Cell>
          
            <button onClick={()=>handleDelete(_id)} className='bg-deepOrange text-white py-2 px-5 font-semibold'>Delete</button>
          
          </Table.Cell>
        </Table.Row>
       
     
      </Table.Body>
          )
        })
      }
    </Table>
  </div>
  </>
  )
}

export default AllTrainerAdmin