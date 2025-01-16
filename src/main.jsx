import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import router from './routs/Routes.jsx';
import 'flowbite';
import AuthContextProvider from './ContextProviders/AuthContextProvider.jsx';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
  <RouterProvider router={router} />
  <ToastContainer />
  </AuthContextProvider>
    
  </React.StrictMode>,
)
