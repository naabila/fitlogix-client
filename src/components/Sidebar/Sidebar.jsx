import React from 'react'
import Logo from '../Logo'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineForum } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import useRole from '../../hooks/useRole';
function Sidebar() {
//user roles
const[role,isLoading]=useRole();


   const adminLinks=<div className='flex flex-col gap-8'>
      <NavLink
              to="allusers"
              className={ ({ isActive }) =>
                isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
              }
            ><FaRegUser className='text-base' /><span>All Users</span> </NavLink>
            <NavLink
              to="allsubscriber"
              className={ ({ isActive }) =>
                isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
              }
            ><MdOutlineUnsubscribe className='text-base' /><span>All Subscriber</span> </NavLink>
            <NavLink
              to="appliedtrainer"
              className={ ({ isActive }) =>
                isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
              }
            ><IoMdPaper className='text-base' /><span>Applied Trainer</span> </NavLink>
            <NavLink
              to="balance"
              className={ ({ isActive }) =>
                isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
              }
            ><MdAccountBalance className='text-base' /><span>Balance</span> </NavLink>
            <NavLink
              to="addclass"
              className={ ({ isActive }) =>
                isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
              }
            ><SiGoogleclassroom className='text-base' /><span>Add New Class</span> </NavLink>
             <NavLink
              to="forum"
              className={ ({ isActive }) =>
                isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
              }
            ><MdOutlineForum  className='text-base' /><span>Forum</span> </NavLink>
            <NavLink
        to="addforum"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><MdForum className='text-base' /><span>Add Forum</span> </NavLink>

            

   </div>

//trainer links
const trainerLinks=<div className='flex flex-col gap-8'>
<NavLink
        to="manageslots"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><IoMdTimer className='text-base' /><span>Manage Slots</span> </NavLink>
      <NavLink
        to="addslot"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><FaAddressCard  className='text-base' /><span>Add Slots</span> </NavLink>
      <NavLink
        to="addforum"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><MdForum className='text-base' /><span>Add Forum</span> </NavLink>
      

      </div>

const memberLinks=<div className='flex flex-col gap-8'>
<NavLink
        to="activity"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><RxActivityLog  className='text-base' /><span>Activity Log</span> </NavLink>
      <NavLink
        to="profile"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><CgProfile  className='text-base' /><span>Profile</span> </NavLink>
      <NavLink
        to="bookedtrainer"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange text-xl flex items-center gap-2 " : " text-xl flex items-center gap-2 "
        }
      ><GrYoga className='text-base' /><span>Booked Trainer</span> </NavLink>
      

      </div>
  return (
    <>
      
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-[#3c3c3c] text-white ">
      <Logo />
      <ul className="space-y-2 font-medium mt-8">
      {
  role === "admin"
    ? adminLinks
    : role === "trainer"
    ? trainerLinks
    : memberLinks
}

        
        
        
      </ul>
   </div>
</aside>



    </>
  )
}

export default Sidebar