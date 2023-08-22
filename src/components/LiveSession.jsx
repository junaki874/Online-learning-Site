import React from 'react'
import Card2 from "../images/card2.jpeg"
import Card3 from "../images/card3.jpeg"
import Card4 from "../images/card4.jpeg"
import Card6 from "../images/card6.jpeg"
import Card7 from "../images/card7.jpeg"
import Card8 from "../images/card8.jpg"

export default function LiveSession() {
  return (
      <div> 
   
    {/*...............section box.......*/ }

    <div className="flex pl-48">

<section className="pr-10 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
    <img  src={Card2} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6"> Interactive Flashcards</p>
    <p className="text-sm pt-5">Master key concepts and boost retention with our interactive flashcards feature.
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> Learn more</a>
  </div>
  </div>
</section>

<section className="pr-12 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
    <img  src={Card3} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6"> Expert Webinars</p>
    <p className="text-sm pt-5">Join live webinars conducted by subject matter experts, where they delve into specific topics, and answer questions from participants.
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> Learn more</a>
  </div>
  </div>
</section>

<section className="pr-10 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
    <img  src={Card4} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6"> Virtual Q&A Sessions</p>
    <p className="text-sm pt-5">Participate in live Q&A sessions with experienced educators who are available to address your queries & to encourage active learning.
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> Learn more</a>
  </div>
  </div>
</section>

</div>
{/*...............section box-2.......*/ }

<div className="flex pl-48">

<section className="pr-10 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
    <img  src={Card6} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6"> Group Study Sessions</p>
    <p className="text-sm pt-5">Collaborate with fellow learners in live group study sessions facilitated by qualified tutors.
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> Learn more</a>
  </div>
  </div>
</section>


<section className="pr-12 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
    <img  src={Card7} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6">Exam Preparation Workshops</p>
    <p className="text-sm pt-5">Live exam preparation workshops designed to equip you with effective study strategies, time management techniques, & exam tips.
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> Learn more</a>
  </div>
  </div>
</section>


<section className="pr-10 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
    <img  src={Card8} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6"> Language Conversation Classes</p>
    <p className="text-sm pt-5">live language conversation classes where you can practice speaking and improve your language skills in an interactive environment.
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> Learn more</a>
  </div>
  </div>
</section>

</div>
</div>
  )
}
