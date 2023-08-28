import React from 'react'
import Card from "../images/card.jpg"

export default function Background() {
  return (
    <div className="pt-12"> 
    <div className=" bg-cover  md:bg-center sm:bg-center md:px-5 sm:mx-2 md:h-screen sm:w-auto md:w-auto sm:h-screen"  style={{ backgroundImage: `url(${Card})` }}>
     
     <div className="pt-40 pl-10">
       <h1 className="text-white font-roboto md:text-4xl sm:text-xl"> Unlock your learning potential</h1>
    
     <div className=" pt-10 w-23 md:text-xl sm:text-xs text-white"> <p>Choose from thousands of courses and a vast collection <br/> of study materials to fuel your educational journey
    </p></div>
     
     <div className="pt-10"> 
     <button className="bg-orange-500 hover:bg-green-600 text-white rounded-2xl md:h-9 md:w-36 sm:h-7 sm:w-28 md:text-center md:text-xl sm:text-xs"> Explore </button>
     </div>
    
     </div>
     
     </div>
    
    </div>
  )
}
