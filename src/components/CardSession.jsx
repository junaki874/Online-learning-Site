import React from 'react'
import Card2 from './Card'
import CardData from './CardData'


export default function CardSession() {
  return (
    <div>


<div className="md:justify-center sm::justify-center md:text-center sm::text-center pt-10">
  <h1 className="md:justify-center sm::justify-center md:text-center  md:text-4xl sm:text-xl text-black">Explore Our Live Sessions</h1>
  <p className="text-black pt-5 md:text-xl sm:text-xs md:justify-center sm::justify-center md:text-center "> Live sessions provide an opportunity for real-time engagement and <br/>interactive learning experiences</p>
</div> 


<Card2 details={CardData}/>

    </div>
  )
}
