import React from 'react'

 const TeacherComp=(props)=> {
  return (
      <div className=" flex md:px-10 sm:px-2 ">
     { props.details.map((value, index)=>(
    <div className=" pt-10 md:px-4 sm:px-2 " key={index}> 
    <img className="w-20 h-20 rounded-full"  src={value.img} alt="man"/>
   
  </div>
  ))}
  </div>
  )
}

export default TeacherComp;