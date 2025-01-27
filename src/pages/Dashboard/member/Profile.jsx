import React, { useContext } from 'react'
import SectionBanner from '../../../components/SectionBanner'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../ContextProviders/AuthContextProvider';
import { Card } from "flowbite-react";
import DynamicTitle from '../../../components/DynamicTitle';

function Profile() {
  const axiosSecure=useAxiosSecure();
  const{user}=useContext(AuthContext);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["rejected", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/profile/${user?.email}`);
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
      <SectionBanner head='Your Profile' />
      <DynamicTitle title='FitLogix | profile' />
      <div className="flex items-center justify-center mt-8">
      <Card className="max-w-md border border-deepOrange bg-[#3c3c3c] " imgSrc={data.image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-white ">
        {data.name}
      </h5>
      <p className="font-normal text-white dark:text-gray-400">
        <span className='font-semibold text-deepOrange'>Role:</span> {data.role}
        <p className="font-normal text-white dark:text-gray-400">
        <span className='font-semibold text-deepOrange'>Email:</span> {data.email}
      </p>
      <p className="font-normal text-white dark:text-gray-400">
        <span className='font-semibold text-deepOrange'>Last login time:</span> {user?.
metadata.
lastSignInTime

}
      </p>
      </p>
    </Card>
      </div>
     
    </>
  )
}

export default Profile