import React from 'react'
import "../main.css"
import Card from "../images/card.jpg"
import Toutorial from './Toutorial'
import Navbar from './Navber'
import AboutCourse from "./AboutCourse.jsx"
import LiveSession from './LiveSession'
import Excel from './Excel'
import FooterNav from './FooterNav'
import AskEdi from './AskEdi'
import LearningWithEdi from './LearningWithEdi'

export default function Home() {



  return (
    <div>
        <body id="home">  
     <div>

<Navbar/>

<div className="flex md:items-center justify-center pl-10">
  <div className="flex"> 
  
  <input type="search" className=" rounded-full pl-150 border-orange-600 border h-7 w-max md:items-center md:justify-center text-center outline-none justify-center" placeholder="Type a question" />
  
  
  <svg xmlns="http://www.w3.org/2000/svg" class="absolute  h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
    
  </div>
</div>
 </div>

<div className="pt-12"> 
<div className="  bg-cover bg-center px-5 h-screen"  style={{ backgroundImage: `url(${Card})` }}>
 
 <div className="pt-40 pl-10">
   <h1 className="text-white font-roboto text-4xl"> Unlock your learning potential</h1>

 <div className=" pt-10 w-23 text-xl text-white"> <p>Choose from thousands of courses and a vast collection <br/> of study materials to fuel your educational journey
</p></div>
 
 <div className="pt-10"> 
 <button className="bg-orange-500 hover:bg-green-600 text-white rounded-2xl h-8 w-32 "> Explore </button>
 </div>

 </div>
 
 </div>

</div>


<div className="md:justify-center text-center pt-10">
  <h1 className="text-4xl text-black">Explore Our Live Sessions</h1>
  <p className="text-black pt-5 text-xl"> Live sessions provide an opportunity for real-time engagement and <br/>interactive learning experiences</p>
</div> 

  <LiveSession/>

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

{/*...............footer.......*/ }
<FooterNav/>

</body>
    </div>
  )
}
