import React, { useContext } from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../ContextProviders/AuthContextProvider';
import Button from './Button';
function Header() {
  const{user,logoutUser}=useContext(AuthContext)
  return (
    <Navbar className='py-6 font-semibold' fluid rounded>
    <Navbar.Brand href="https://flowbite-react.com">
      
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      {
        user?
        <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img={user?.photoURL} rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">{user?.displayName}</span>
          <span className="block truncate text-sm font-medium">{user?.email}</span>
        </Dropdown.Header>
       
        <Dropdown.Divider />
        <Dropdown.Item onClick={logoutUser}>Sign out</Dropdown.Item>
      </Dropdown>
      :
      <div className='hidden md:flex'>
       <Link to="/login">
        <Button>Login</Button>
      </Link></div>
      }
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
    <NavLink
        to="/"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange  text-[18px]" : "text-base"
        }
      >Home</NavLink>
      <NavLink
        to="/alltrainer"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange  text-[18px]" : "text-base"
        }
      >All Trainer</NavLink>
      <NavLink
        to="/allclass"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange  text-[18px]" : "text-base"
        }
      >All Class</NavLink>
     {
      user?
      <NavLink
        to="/dashboard"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange  text-[18px]" : "text-base"
        }
      >Dashboard</NavLink>
      :""
     }
     <NavLink
        to="/forum"
        className={ ({ isActive }) =>
          isActive ? "text-deepOrange  text-[18px]" : "text-base"
        }
      >Forum</NavLink>
     <div className='md:hidden'>
      <Link to="/login">
        <button>Login</button>
      </Link>
     </div>
     
     
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header