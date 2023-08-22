import React from 'react'
import Man from '../images/man.jpg'
import Man1 from '../images/man1.jpeg'
import Man2 from '../images/man3.jpg'
import Man3 from '../images/man4.png'
import Woman from '../images/woman1.jpeg'
import Woman3 from '../images/woman3.jpeg'
import Woman2 from '../images/woman2.jpg'



export default function AboutCourse() {
  return (
    < div >
  
  <section className="px-60 pt-10 justify-center"> 
<div className="h-max w-auto  justify-center  bg-black rounded-2xl origin-center"> 

   
  <section className="px-14">

   {/* teacher's picture */}
   <div className="flex md:justify-between pt-10"> 
     <img className="h-20 w-20  rounded-full"  src={Man} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Woman} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Man1} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Woman2} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Man2} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Woman3} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Man3} alt="man"/>
   </div>


   <div className="flex md:justify-between pt-10"> 
     <img className="h-20 w-20  rounded-full"  src={Man} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Woman} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Man1} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Woman2} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Man2} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Woman3} alt="man"/>
     <img className="h-20 w-20  rounded-full"  src={Man3} alt="man"/>
   </div>

  <div className=" pt-10  text-white justify-center" > 
    <p className="text-2xl"> Begin the journey of your dream career today by joining our expansive community of students and mentors</p>
    
    </div>
    <div className="pt-7 pb-10">
    <button  className="text-sm bg-white text-black rounded-xl h-9 w-40">View upcoming courses</button>
       </div>
   
  </section>
      

  </div>
</section>

     </ div>
   
  )
}
