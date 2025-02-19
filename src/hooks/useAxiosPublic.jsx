import React from 'react';
import axios from "axios"
const axiosPublic = axios.create({
    baseURL:'https://fitlogix-nabilas-projects-271be628.vercel.app',
    
  });
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic