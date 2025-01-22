import React from 'react'
import SectionBanner from '../../../components/SectionBanner'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function Profile() {
  const axiosSecure=useAxiosSecure();
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
  return (
    <>
      <SectionBanner head='Your Profile' />
     
    </>
  )
}

export default Profile