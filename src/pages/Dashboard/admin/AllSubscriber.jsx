import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Loading from '../../../components/Loading';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import SectionHeading from '../../../components/SectionHeading';

function AllSubscriber() {
 const axiospublic=useAxiosPublic();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const { data } = await axiospublic.get('/newsletter');
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
    return <div className="flex justify-center items-center h-screen"><p>No Activity to show at this moment</p></div>;
  }
  console.log(data)
  return (
    <>
    <SectionHeading heading='Newsletter Subscribers' />
      {/* table */}
          <div className="overflow-x-auto mt-8 md-my-16">
          <Table>
            <Table.Head className='border border-deepOrange'>
            <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Serial No.</Table.HeadCell>
            <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Image</Table.HeadCell>
              <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Name</Table.HeadCell>
             
              <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Email</Table.HeadCell>
              
            </Table.Head>
            {
              data.map((d,indx)=>{
                const{name,email,image,_id}=d
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
                
               
                
                <Table.Cell>{email}</Table.Cell>
                
                
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

export default AllSubscriber