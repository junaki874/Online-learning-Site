
import React from 'react'
import "../main.css"
import Toutorial from './Toutorial'
import AboutCourse from "./AboutCourse.jsx"
import Excel from './Excel'
//import FooterNav from './FooterNav'
import AskEdi from './AskEdi'
import LearningWithEdi from './LearningWithEdi'
import Background from './Background'
import CardSession from './CardSession'

const Home=()=> {
  return (
     <div>
         
         <div> 
         
<div className="md:flex sm:flex  md:items-center sm:items-center md:justify-center sm:justify-center pl-10">
  <div className="flex "> 
  
  <input type="search" className=" rounded-xl md:pl-150 sm:place-content-center border-orange-600 border h-8 md:w-80 sm:w-40 md:items-center md:justify-center sm:items-center sm:justify-center text-center outline-none justify-center" placeholder="Type a question" />
  
  
  <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
    
  </div>
</div>
 </div>


 <Background/>

 
<CardSession/>

{/*...............video box-1.......*/ }

<div className="shadow pt-10 pb-10">
  
  <p className="text-xl pl-10"> Learners are watching</p>
{/*...............video box-1.......*/ }

  <Toutorial/>
  </div>
  
  <AskEdi/>
  <LearningWithEdi/>

  <Excel/>

  <AboutCourse/>

{/*...............footer<FooterNav/>.......*/ }

         
          </div>

  )
}
export default  Home;