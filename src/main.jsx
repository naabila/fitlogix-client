import React, { StrictMode } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()
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
  <QueryClientProvider client={queryClient}>
  <AuthContextProvider>
  <RouterProvider router={router} />
  <ToastContainer />
  </AuthContextProvider>
  </QueryClientProvider>
    
  </React.StrictMode>,
)
