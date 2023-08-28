import TeacherComp from './TeacherComp'
import TeacherData from './TeacherData'



export default function AboutCourse() {
  return (
    < div >
  
  <section className="md:px-60 sm:px-10 pt-10 justify-center"> 
<div className="h-max sm:auto md:w-auto bg-black rounded-2xl origin-center"> 

<TeacherComp details={TeacherData} />
<TeacherComp details={TeacherData} />
   
  <section className="px-14">

  <div className=" pt-10  text-white justify-center" > 
    <p className="text-2xl"> Begin the journey of your dream career today by joining our expansive community of students and mentors</p>
    
    </div>
    <div className="pt-7 pb-10">
    <button  className="text-sm bg-orange-500 hover:bg-green-400 text-white rounded-xl h-10 w-44">View upcoming courses</button>
       </div>
   
  </section>
      

  </div>
</section>

     </ div>
   
  )
}
