import React from 'react'
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
    
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <div className="flex-grow">
      
        <Outlet></Outlet>
      </div>
      
      <Footer />
    </div>
    </>
  )
}

export default MainLayout