import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';


const Navbar=()=>{
    return (
        <>
<Router>

<nav className="bg-white md:flex md:items-center md:justify-between sm:flex sm:items-center "> 
<div> <h1 className="text-orange-500 font-medium md:text-4xl sm:text-xs font-[Poppins] md:px-8 md:pt-5 sm:px-2 sm:pt-3"> SmartEd</h1></div>
<div className="md:flex md:pl-5 sm:flex sm:pl-2"> 

    <ul className="md:flex md:justify-between sm::justify-between xs::justify-between md:items-center md:pl-5 sm:flex sm:items-center sm:pl-2">
     <li className="md:mx-4 sm:mx-1 md:flex sm:flex">
          <Link to="/Home" className="md:text-xl sm:text-xs hover:text-orange-600 duration-500"> Courses</Link>
          </li>
          <li className="md:mx-4 sm:mx-1">
          <Link to="/Home" className="md:text-xl md:flex sm:flex sm:text-xs hover:text-orange-600 duration-500"> Ask Edi</Link>
          </li>
          <li className="md:mx-4 sm:mx-1">
          <Link to="/Home" className="md:text-xl sm:text-xs md:flex sm:flex hover:text-orange-600 duration-500"> Flashcards</Link>
          </li>
          <li className="md:mx-4 sm:mx-1">
          <Link to="/Home" className="md:text-xl md:flex sm:flex sm:text-xs hover:text-orange-600 duration-500"> Practice Tests</Link>
          </li>
       
    </ul>
    <ul className="md:flex sm:flex md:pl-30 sm:pl-2 md:mx-20 sm:mx-4" >
    <li className="md:mx-2 sm:mx-1">
          <Link to="/Home" className="md:text-xl sm:text-xs hover:text-orange-600 duration-500"> Help  </Link>
          </li>
          
          <li className="md:mx-2 sm:mx-1 ">
              <p  className=" md:text-xl sm:text-xs hover:text-orange-600 duration-500"> | </p>
          </li> 
          <li className="md:mx-2 sm:mx-1">
          <Link href="/SignUp" className=" md:text-xl sm:text-xs hover:text-orange-600 duration-500">  Sign in</Link>
          </li>
        </ul> 

       
</div>

</nav>

<Switch>
    <Route path="/Home"> 
          <Home/>
        </Route>
        <Route path="/SignUp">
       <SignUp/>
        </Route>
    
</Switch>
</Router>
        </>
    )
}

export default Navbar;