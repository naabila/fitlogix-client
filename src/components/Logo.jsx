import React from 'react'
import { SiOpenaigym } from "react-icons/si";
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <>
        <Link to='/'>
        <div className='flex gap-2 items-center'>
        <SiOpenaigym className='text-[#FF5E00] text-3xl font-bold' />
        <h2 className='text-black font-bold text-3xl'>Fit <span className='text-[#FF5E00]'>Logix</span> </h2>
        </div>
        </Link>
    </>
  )
}

export default Logo