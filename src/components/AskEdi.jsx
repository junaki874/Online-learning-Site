import React from 'react'
import Laptop from '../images/laptop.png'
export default function AskEdi() {
  return (
    <div className="w-screen h-auto bg-orange-600">
    <div className="flex "> 
    <section className="h-auto w-88 pl-10">

      <p className="text-3xl text-white pt-20 pl-16"> Your pathway to smarter <br/>learning</p>
      <p className="text-xl text-white pt-4 pl-16"> Engage, learn, and grow with our AI Tutor powered <br/> by GPT-4, “Edi”</p>

      <div className="pt-4 pb-20 pl-16"> 
          <button className="bg-white text-black w-20 h-12 rounded-2xl"> Ask Edi</button>
      </div>

      </section>
      <div className="w-3/5 h-3/5 pr-10"> 
        <img className="w-4/5 h-4/5" src={Laptop} alt="laptop"/>
      </div>
        
    </div>
    </div>
  )
}
