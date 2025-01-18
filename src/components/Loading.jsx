import React from 'react'
import { Spinner } from "flowbite-react";
function Loading() {
  return (
    <div>
     <div className="flex my-10 flex-wrap gap-2 items-center justify-center">
      
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
     
    </div>
    
    </div>
  )
}

export default Loading