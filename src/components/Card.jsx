import React from 'react'

const Card =(props)=> {
  return (
    <div className="  grid md:grid-cols-3 sm:grid-cols-2  md:pl-48 sm:gap-4">

 { props.details.map((value, index)=>(


<section className="md:pr-5 sm:pr-2 sm:pt-5 md:pt-10"> 
<div className="md:h-76 md:w-64 sm:w-40 hover:bg-gray-200 duration-100 bg-white rounded-xl origin-center"> 

<div  className="md:h-40 md:w-64 sm:w-40 sm:h-32 rounded-xl" key={index}> 
    <img  src={value.img} alt="card2" className="rounded-xl"/>
  </div>

  <div className="md:pl-3  md:w-56 sm:w-40" > 
    <p className="md:text-sm sm:text-xs md:pt-6 sm:pt-3 "> {value.tittle}</p>
    <p className="md:text-sm sm:text-xs  md:pt-6 sm:pt-3 ">{value.description}
</p>
       <a href="home" className="text-orange-500 text-xs  md:pt-5 sm:pt-2 "> {value.learn}</a>
  </div>
  </div>
</section>

 ))}
    </div>
  )
}


export default Card;