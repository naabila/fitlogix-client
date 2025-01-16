import React from 'react'

function Button({children,handleClick

}) {
  return (
    <>
    <button className='bg-deepOrange text-white font-semibold px-8 text-xl hover:bg-customBg transition-all py-3' onClick={handleClick}>{children}</button>
    </>
  )
}

export default Button