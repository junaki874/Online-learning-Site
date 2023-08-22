import React from 'react'
import Fb from "../images/fb.svg"
import Instagram from "../images/ins.svg"


export default function FooterNav() {
  return (
   

<div>
  <nav  className="pt-10 bg-white shadow  md:flex md:items-center md:justify-between">
<div>  <p className="text-xl text-orange-500 pl-10"> SmartEd </p></div>
<div className="flex text-xs md:flex md:items-center"> 
  <ul className="flex text-xs md:flex md:items-center md:justify-between"> 
    <li> 
    <img src={Instagram} alt="insta" className="pr-4  h-9 w-9" />
      </li> 
      <li className="pr-10"> <img className=" h-5 w-5 " src={Fb} alt="fb"/> </li>
  </ul>


</div>

  </nav>
  

<footer   className="pt-5 pb-12  text-xs md:flex md:items-center md:justify-between">
 <div className="flex text-xs md:flex md:items-center pl-5"> 
 <p className="text-xs"> @2023 SmartEd Inc. All Rights Reserved.</p>
 </div>
    <div className="text-xs">
       <ul className="md:flex md:items-center pl-5 text-xs">
       <li className="mx-4 ">
            <a href="home" className="text-xs hover:text-orange-600 duration-500"> About us</a>
            </li>
            <li className="mx-4 text-xs">
            <a href="home" className="text-xs hover:text-orange-600 duration-500"> Terms of Service</a>
            </li>
            <li className="mx-4 text-xs">
            <a href="home" className="text-xs hover:text-orange-600 duration-500"> Privacy Policy</a>
            </li>
            <li className="mx-4 text-xs">
            <a href="home" className="text-xs hover:text-orange-600 duration-500"> Cookie Notice</a>
            </li>
         
      </ul>
   
    </div>

 
</footer>
   </div>
  )
}
