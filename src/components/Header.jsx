import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import Headroom from "react-headroom";
import { AuthContext } from "../ContextProviders/AuthContextProvider";

import Logo from "./Logo";
import CustomBtn from "./CustomBtn";

function Header() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
   
    <Headroom>
      
      <Navbar
        className="bg-customBg z-50 bg-opacity-80 py-6 font-semibold  shadow-md lg:px-20"
        fluid
        rounded
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <Logo />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={logoutUser}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <div className="hidden md:flex">
              <Link to="/login">
                <CustomBtn>Login</CustomBtn>
              </Link>
            </div>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-deepOrange text-[18px]"
                : "text-white text-base hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/alltrainer"
            className={({ isActive }) =>
              isActive
                ? "text-deepOrange text-[18px]"
                : "text-white text-base hover:text-gray-300"
            }
          >
            All Trainer
          </NavLink>
          <NavLink
            to="/allclass"
            className={({ isActive }) =>
              isActive
                ? "text-deepOrange text-[18px]"
                : "text-white text-base hover:text-gray-300"
            }
          >
            All Class
          </NavLink>
          {user ? (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-deepOrange text-[18px]"
                  : "text-white text-base hover:text-gray-300"
              }
            >
              Dashboard
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            to="/forum"
            className={({ isActive }) =>
              isActive
                ? "text-deepOrange text-[18px]"
                : "text-white text-base hover:text-gray-300"
            }
          >
            Forum
          </NavLink>
          <div className="md:hidden">
            <Link to="/login">
              <button className="text-white">Login</button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
      
    </Headroom>
   
    
  );
}

export default Header;
