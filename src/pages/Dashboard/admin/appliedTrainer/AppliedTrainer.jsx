import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import SectionHeading from '../../../../components/SectionHeading';
import CustomBtn from '../../../../components/CustomBtn';
import { Link } from 'react-router-dom';
import Loading from '../../../../components/Loading';

function AppliedTrainer() {
 const axiosSecure=useAxiosSecure();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['appliedTrainer'],
    queryFn: async ()=>{
      try{
        const {data}=await axiosSecure.get('/appliedtrainer');
        return data
      }catch(err){
        console.log(err)
      }
    },
    
  })
  if (isPending) {
    return <Loading></Loading>
  }
  console.log(data)
  
  return (
    <>
      <SectionHeading heading="Applied Trainer" 
        subHeading="View all applications for trainer roles, review candidate qualifications, and manage recruitment efficiently for your fitness team."
      />

      {/* table */}
      <div className="overflow-x-auto mt-8 md-my-16">
      <Table>
        <Table.Head className='border border-deepOrange'>
          <Table.HeadCell className='bg-[#3c3c3c] py-8  text-white'>Applicant name</Table.HeadCell>
          <Table.HeadCell className='bg-[#3c3c3c] py-8  text-white'>Age</Table.HeadCell>
          <Table.HeadCell className='bg-[#3c3c3c] py-8  text-white'>Email</Table.HeadCell>
          <Table.HeadCell className='bg-[#3c3c3c] py-8  text-white'>Status</Table.HeadCell>
          <Table.HeadCell className='bg-[#3c3c3c] py-8 text-white'>
            See more
          </Table.HeadCell>
        </Table.Head>
        {
          data.map(d=>{
            const{name,email,age,_id,status}=d
            return(
              <Table.Body key={_id} className="divide-y">
          <Table.Row className="bg-[#3c3c3c] text-white dark:border-gray-700 dark:bg-gray-800 border border-deepOrange">
            <Table.Cell className="whitespace-nowrap font-medium white dark:text-white">
              {name}
            </Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{status}</Table.Cell>
            <Table.Cell>
            <Link to={`/dashboard//${_id}`}>
              <button className='bg-deepOrange text-white py-2 px-5 font-semibold'>Details</button>
            </Link>
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

export default AppliedTrainer