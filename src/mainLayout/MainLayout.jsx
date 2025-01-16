import React from 'react'
import Header from "../components/Header";
import { Outlet } from "react-router";
import HeadRoom from "react-headroom"
function MainLayout() {
  return (
    <>
    <HeadRoom>
    <Header />
    </HeadRoom>
        
        <Outlet />
    </>
  )
}

export default MainLayout