import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
   <>
    <Sidebar />
    <Outlet></Outlet>
   </>
  )
}

export default DashboardLayout