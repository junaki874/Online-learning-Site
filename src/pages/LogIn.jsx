import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import back from "../images/bk.png"
import SignUp from "./SignUp";




 const LogIn=() =>{
  return (
  
    <>
    <Router>
  
    <section style={{backgroundImage: `url(${back})` }} className=" h-screen w-screen bg-gray-200" >
       
       <nav className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      
         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  
             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Login
             </h1>
             
            
  
             <form className="space-y-4 md:space-y-6">
                 <div>
                     <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  
                     <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
  
                 </div>
  
                 <div>
                     <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                     <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                 </div>
  
                 
            
                 <button type="submit" className="w-full text-white bg-green-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Login
                 </button>
  
                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    
                     Haven't an account? To register click <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up </Link>
                    
                </p>
               
  
             </form>
  
  
          
         </div>
     </div>
     </nav>
  </section>  
                <Switch>
                <Route path="/signup">
                         <SignUp/>
                       </Route>
                </Switch>
            
    </Router>
  
  </>

  
  )
}

export default LogIn;