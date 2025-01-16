import React from 'react'
import Header from "../components/Header";
import { Outlet } from "react-router"
function MainLayout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default MainLayout