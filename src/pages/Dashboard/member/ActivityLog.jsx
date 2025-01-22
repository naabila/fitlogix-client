import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../ContextProviders/AuthContextProvider";
import { Button, Modal} from "flowbite-react";

import Loading from "../../../components/Loading";
import SectionHeading from "../../../components/SectionHeading";
import { FaRegEye } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function ActivityLog() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
const [openModal, setOpenModal] = useState(false);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["rejected", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/rejectedtrainer/${user?.email}`);
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

//data destructure
const { name, email, _id, status, image,feedback } = data;

  return (
    <>
      <SectionHeading heading="Activity Log" />
      {/* table */}
      <div className="overflow-x-auto mt-8 md-my-16">
        <Table>
          <Table.Head className="border border-deepOrange">
            
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">
              Image
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">
              Email
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">
              Status
            </Table.HeadCell>
           
          </Table.Head>
          
              <Table.Body key={_id} className="divide-y">
                <Table.Row className="bg-[#3c3c3c] text-white dark:border-gray-700 dark:bg-gray-800 border border-deepOrange">
                  
                  <Table.Cell>
                    <img
                      className="h-[80px] w-[80px] object-cover"
                      src={image}
                      alt="member"
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium white dark:text-white">
                    {name}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium white dark:text-white">{email}</Table.Cell>
                  <Table.Cell>
                  <div className="flex gap-2 items-center">
                  {status} <FaRegEye onClick={()=>setOpenModal(true)} className="text-xl text-deepOrange" />
                  </div>
                   </Table.Cell>
                
                </Table.Row>
              </Table.Body>
          
        </Table>
      </div>

       {/* Modal */}
               <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header className='bg-[#3c3c3c]'>
                <h2>Give Feedback</h2>
              </Modal.Header>
              <Modal.Body className='bg-[#3c3c3c]'>
                <div className="space-y-6">
                <div className='flex gap-5 items-center'>
                 
                 <div>
                   <h2>{feedback}</h2>
                 
                 </div>
                </div>
                  
                </div>
              </Modal.Body>
              <Modal.Footer className='bg-[#3c3c3c]'>
                <Button onClick={()=>setOpenModal(false)} className='bg-deepOrange'>Close</Button>
               
              </Modal.Footer>
            </Modal>
    </>
  );
}

export default ActivityLog;
