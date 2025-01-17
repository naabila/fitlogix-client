import React, { useContext } from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../ContextProviders/AuthContextProvider';

function useRole() {
    const axiosSecure=useAxiosSecure();
    const{user,loading}=useContext(AuthContext);
    const {  data:role,isLoading } = useQuery({
        queryKey: ['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data}=await axiosSecure.get(`/users/role/${user?.email}`);
            return data.role;
        },
      })
  return (
    [role,isLoading]
  )
}

export default useRole;
