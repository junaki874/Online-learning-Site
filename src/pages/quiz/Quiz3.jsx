import React from 'react'

export default function Quiz3() {
  return (
    < >
    
            
            <h2>
            3. Which ReactJS function renders HTML to the web page?
</h2>
             
         
              <button type="submit" className="w-full text-black bg-white focus:bg-red-400 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              render()
              </button>

              <button type="submit" className="w-full text-black bg-white focus:ring-4 focus:outline-none focus:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              renders()
                </button> <br/>


                <button type="submit" className="w-full focus:bg-green-400 text-black bg-white onclick:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                ReactDOM.render()
                </button> <br/>

                <button type="submit" className="w-full text-black bg-white focus:bg-red-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                ReactDOM.renders()
                </button> <br/>

           
            

         </>
  )
}
