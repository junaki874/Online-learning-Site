import React from 'react'
import Owl from "../images/Owl.png"

function LearningWithEdi() {
  return (
    <div className="pt-10">
        <div className="text-black text-3xl justify-items-center text-center "> 
        <p >Why you’ll love learning with Edi</p>
        </div>
      
        <div className="md:px-72 md:pt-10 sm:px-20  grid grid-cols-3 justify-items-center"> 

      <div> 
      <div> 
        <section className=" bg-gray-300 w-72 h-44  rounded-2xl">
           <div>
            <p className="text-sm  px-5  pt-5"> Intelligent Conversational Interface</p>
            <p className="text-xs px-5 pt-5"> Edi can engage in natural language conversations with users, understanding their queries and providing accurate and relevant responses in real-time.</p>

        </div>
         </section>
        </div>

        <div className="pt-16">
        <section className=" bg-gray-300 w-72 h-44   rounded-2xl">
           <div>
            <p className="text-sm px-5  pt-5"> Adaptive Learning Algorithms:</p>
            <p className="text-xs px-5 pt-5"> Edi utilizes adaptive learning algorithms to analyze user performance, identify areas of improvement, and recommend targeted resources or practice materials.</p>

        </div>
         </section>
          </div>
      </div>
      {/* .............Second box line start............... */}


      <div> 
      <div className='pt-32'> 
       
           <img className="h-auto w-auto rounded-full" src={Owl} alt='owl' />
      
        </div>

       
      </div>



      {/*.............. third box line start ............*/}
      <div> 
      <div> 
        <section className=" bg-gray-300 w-72 h-44  rounded-2xl">
           <div>
            <p className="text-sm px-5  pt-5"> Progress Tracking and Feedback</p>
            <p className="text-xs px-5 pt-5"> Tracks and analyzes user progress, providing feedback on performance, strengths, & areas needing improvement. It offers personalized recommendations for further study.</p>

        </div>
         </section>
        </div>

        <div className="pt-16">
        <section className=" bg-gray-300 w-72 h-44  rounded-2xl">
           <div>
            <p className="md:text-sm sm:text-xs px-5  pt-5"> Study Reminders and Scheduling</p>
            <p className="text-xs px-5 pt-5"> Sends reminders, suggests study schedules to help users stay organized and maintain a consistent learning routine. Is available round the clock 24/7.</p>

        </div>
         </section>
          </div>
      </div>



    </div>
    </div>
  )
}

export default LearningWithEdi