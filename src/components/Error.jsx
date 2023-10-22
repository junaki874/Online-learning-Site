import React from 'react'
import err from "../images/err.jpg"

export default function Error() {
  return (
    <div class="flex flex-col items-center h-full">
        <div  class="sm:max-w-md pt-32 pb-10 ">
         <img src={err} alt="error page" />

        </div>
        
    </div>
      
   
  )
}
