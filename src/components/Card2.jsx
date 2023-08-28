import React from 'react'

const Card2 =(props)=> {
  return (
    <div className="md:flex sm:grid-cols-2 sm:flex pl-48">
      
 { props.details.map((value, index)=>(


<section className="pr-10 pt-10"> 
<div className="h-76 w-64  hover:border-orange-400 duration-500  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-64 rounded-xl" key={index}> 
    <img  src={value.img} alt="card2" className="rounded-xl"/>
  </div>

  <div className="pl-3 pt-6 w-56" > 
    <p className="text-sm pt-6"> {value.tittle}</p>
    <p className="text-sm pt-5">{value.description}
</p>
       <a href="home" className="text-orange-500 text-xs pt-5"> {value.learn}</a>
  </div>
  </div>
</section>

 ))}
    </div>
  )
}


export default Card2;