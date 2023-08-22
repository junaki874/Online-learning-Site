import React from 'react';


const Navbar=()=>{
    return (
        <>

<nav className="bg-white  md:flex md:items-center md:justify-between"> 
<div> <h1 className="text-orange-500 font-medium text-4xl font-[Poppins] px-8 pt-5"> SmartEd</h1></div>
<div className="md:flex pl-5"> 

    <ul className="md:flex md:items-center pl-5">
     <li className="mx-4">
          <a href="home" className="text-xl hover:text-orange-600 duration-500"> Courses</a>
          </li>
          <li className="mx-4">
          <a href="home" className="text-xl hover:text-orange-600 duration-500"> Ask Edi</a>
          </li>
          <li className="mx-4">
          <a href="home" className="text-xl hover:text-orange-600 duration-500"> Flashcards</a>
          </li>
          <li className="mx-4">
          <a href="home" className="text-xl hover:text-orange-600 duration-500"> Practice Tests</a>
          </li>
       
    </ul>
    <ul className="md:flex pl-30 mx-20" >
    <li className="mx-2">
          <a href="home" className="text-xl hover:text-orange-600 duration-500"> Help  </a>
          </li>
          
          <li className="mx-2"> | </li> 
          <li className="mx-2">
          <a href="home" className="text-xl hover:text-orange-600 duration-500">  Sign in</a>
          </li>
        </ul> 

        
</div>

</nav>
        </>
    )
}

export default Navbar;