import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

function AppliedTrainerDetails() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
console.log(id)
  // Fetch trainer details
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['appliedTrainerDetailss', id],
    queryFn: async () => {
      try {
        // Make the GET request
        const response = await axiosSecure.get(`/appliedtrainerdetails/${id}`);
        return response.data; // Return the trainer details
      } catch (err) {
        console.error('Error fetching trainer details:', err);
        throw err; // Propagate error for react-query's error state
      }
    },
  });
console.log(data)
  // Loading state
  if (isLoading) return <Loading />;

  

  // Check if data exists
  if (!data) {
    return <p className="text-center text-gray-500">No details found for this trainer.</p>;
  }

  // Destructure data
  const { name, age, email, status } = data;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Trainer Details</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default AppliedTrainerDetails;
