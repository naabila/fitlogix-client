import React from 'react'
import Loading from '../../../components/Loading';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SectionHeading from '../../../components/SectionHeading';
import { Table } from 'flowbite-react';

function Balance() {
  const axiosPublic=useAxiosPublic();
  // trainer data
  const { isLoading, data } = useQuery({
    queryKey: ['trainers'],
    queryFn: async ()=>{
      try{
        const {data}=await axiosPublic.get('/latestpayments');
        return data ||[]
      }catch(err){
        console.log(err)
      }
    },
  });

  // payment data
  const { isLoading:paymentLoading, data:paymentData } = useQuery({
    queryKey: ['payment'],
    queryFn: async ()=>{
      try{
        const {data}=await axiosPublic.get('/payment');
        return data ||[]
      }catch(err){
        console.log(err)
      }
    },
  });

  if (isLoading || paymentLoading) {
    return <Loading />;
  }
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No class to show at this moment</p>
      </div>
    );
  }
console.log("payment",paymentData)

// Total Balance
const totalBalance=paymentData.reduce((acc,curr)=>{
return(
  curr.price+acc
)
},0);
console.log(totalBalance)


  return (
    <>
    <SectionHeading heading="Latest Transactions" />
    <div className="container mx-auto">
      {/* table */}
    <div className="overflow-x-auto mt-8 md-my-16">
    <Table>
      <Table.Head className='border border-deepOrange'>
      <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Serial No.</Table.HeadCell>
      <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>TrainerName</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>User Name</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Price</Table.HeadCell>
        <Table.HeadCell className='bg-[#3c3c3c] py-5 text-white'>Pakage</Table.HeadCell>
       
      </Table.Head>
      {
        data.map((d,indx)=>{
          const{trainerName,user,_id,
            clientName,
            pakageName,
            pakageValue}=d
          return(
            <Table.Body key={_id} className="divide-y">
        <Table.Row className="bg-[#3c3c3c] text-white dark:border-gray-700 dark:bg-gray-800 border border-deepOrange">
        <Table.Cell>{indx+1}</Table.Cell>
       
          <Table.Cell className="whitespace-nowrap font-medium white dark:text-white">
            {trainerName}
          </Table.Cell>
          
         
          <Table.Cell>{
            clientName}</Table.Cell>
          <Table.Cell>${
            pakageValue}</Table.Cell>
          <Table.Cell>{
            pakageName}</Table.Cell>
          
        </Table.Row>
       
     
      </Table.Body>
          )
        })
      }
    </Table>
  </div>
  <h2 className='text-right text-2xl mt-5'>Total Balance is: <span className='text-deepOrange'>${totalBalance}</span> </h2>
    </div>

    
  </>
  )
}

export default Balance
