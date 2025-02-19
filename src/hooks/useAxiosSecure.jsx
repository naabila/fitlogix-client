import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProviders/AuthContextProvider";


const axiosSecure = axios.create({
    baseURL:'https://fitlogix-nabilas-projects-271be628.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
          }
        return config;
    }, (error)=> {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        console.log(error)
        const status = error.response.status;

       
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logoutUser();
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;