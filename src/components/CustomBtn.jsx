import React from 'react'

function CustomBtn({children,handleClick}) {
  return (
    <button className='bg-deepOrange text-white font-semibold px-8 text-xl hover:bg-customBg transition-all hover:border py-3' onClick={handleClick}>{children}</button>

  )
}

export default CustomBtn;