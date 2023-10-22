import React from 'react'
import Quiz3 from './Quiz3';
import Quiz2 from './Quiz2';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';



 const Quiz=() =>{
  return (
  
  <>
   
    <section  className=" h-auto w-screen bg-gray-300" >
       
       <nav className="flex flex-col items-center justify-center px-5 py-5 mx-auto md:h-auto lg:py-0">

       <div className="w-full bg-purple-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-max xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      
         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Multiple Choice Question and Answer
             </h1>
             
            

             <form className="space-y-4 md:space-y-6">
               
               <h2>1.When a pop() operation is called on an empty queue, what is the condition called?

</h2>
                
            
                 <button type="submit" className="w-full text-black bg-white focus:bg-red-400 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                   Garbage Value
                 </button>

                 <button type="submit" className="w-full text-black bg-white focus:ring-4 focus:outline-none focus:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                   Syntax Error
                   </button> <br/>


                   <button type="submit" className="w-full focus:bg-green-400 text-black bg-white onclick:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Underflow
                   </button> <br/>

                   <button type="submit" className="w-full text-black bg-white focus:bg-red-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Overflow
                   </button> <br/>

                   <Quiz2/>

                  <Quiz3/>
                 <Quiz4/>
                   <Quiz5/>

               

             </form>


          
         </div>
     </div>
     </nav>
  </section>  
                
            
  
  
  </>

  
  )
}

export default Quiz;