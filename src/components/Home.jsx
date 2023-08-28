import React from 'react'
import "../main.css"
import Toutorial from './Toutorial'
import Navbar from './Navber'
import AboutCourse from "./AboutCourse.jsx"
import Card from './Card'
import CardData from './CardData'
import Excel from './Excel'
import FooterNav from './FooterNav'
import AskEdi from './AskEdi'
import LearningWithEdi from './LearningWithEdi'
import Background from './Background'

 const Home=()=> {



  return (
    <div>
        <body id="home">  
     <div>

<Navbar/>

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

<div className="md:justify-center sm::justify-center md:text-center sm::text-center pt-10">
  <h1 className="md:justify-center sm::justify-center md:text-center  md:text-4xl sm:text-xl text-black">Explore Our Live Sessions</h1>
  <p className="text-black pt-5 md:text-xl sm:text-xs md:justify-center sm::justify-center md:text-center "> Live sessions provide an opportunity for real-time engagement and <br/>interactive learning experiences</p>
</div> 

<Card details= {CardData}/>

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
export default Home;