import React, { useContext } from 'react';
import DynamicTitle from '../../../components/DynamicTitle';
import SectionHeading from '../../../components/SectionHeading';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Loading from '../../../components/Loading';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../ContextProviders/AuthContextProvider';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

function ManageSlots() {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // Fetch slots
  const { isLoading: slotLoading, data: slotData, refetch } = useQuery({
    queryKey: ['trainers'],
    enabled: !!user?.email,
    queryFn: async () => {
      try {
        const { data } = await axiosPublic.get(`/slots/${user?.email}`);
        return data || [];
      } catch (err) {
        console.error(err);
      }
    },
  });

  // Fetch booked slots
  const { isLoading: bookedSlotLoading, data: bookedSlotData } = useQuery({
    queryKey: ['booked-trainers'],
    enabled: !!user?.email,
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/bookedtrainer/${user?.email}`);
        return data || [];
      } catch (err) {
        console.error(err);
      }
    },
  });

  // Loading states
  if (slotLoading || bookedSlotLoading) {
    return <Loading />;
  }

  // No data state
  if (!slotData?.length && !bookedSlotData?.length) {
    return <div>No slots or booked slots found.</div>;
  }
  console.log('booked slot', bookedSlotData)
  // Delete slot function
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#FF5E00',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/deleteslot/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            refetch();
          }
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  return (
    <>
      <DynamicTitle title="FitLogix | Manage Slots" />
      <SectionHeading heading="All Slots" />

      {/* Slot Table */}
      <div className="overflow-x-auto mt-8">
        <Table>
          <Table.Head>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Serial No.</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Name</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Email</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Slot Time</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Slot Name</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Class Name</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {slotData.map((slot, index) => (
              <Table.Row key={slot._id} className="bg-[#3c3c3c] text-white border border-deepOrange">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{slot.fullName}</Table.Cell>
                <Table.Cell>{slot.email}</Table.Cell>
                <Table.Cell>{slot.slotTime}</Table.Cell>
                <Table.Cell>{slot.slotName}</Table.Cell>
                <Table.Cell>{slot.className}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => handleDelete(slot._id)}
                    className="bg-deepOrange text-white py-2 px-5 font-semibold"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <SectionHeading heading="Booked Slots" />

      {/* Booked Slot Table */}
      <div className="overflow-x-auto mt-8">
        <Table>
          <Table.Head>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Serial No.</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Slot Name</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Class Name</Table.HeadCell>
            <Table.HeadCell className="bg-[#3c3c3c] py-5 text-white">Client Name</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {bookedSlotData.map((slot, index) => (
              <Table.Row key={slot._id} className="bg-[#3c3c3c] text-white border border-deepOrange">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{slot.slot}</Table.Cell>
                <Table.Cell>{slot.class}</Table.Cell>
                <Table.Cell>{slot.clientName}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default ManageSlots;
