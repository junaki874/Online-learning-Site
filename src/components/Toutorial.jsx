import React from 'react'
import ReactPlayer from 'react-player'


export default function Toutorial() {
  return (
    <div>
        <div className="flex pl-8">
 
 <section className="pr-10 pt-10"> 
<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
<ReactPlayer url='https://www.youtube.com/watch?v=UR9NBzAyjWw&ab_channel=CodeWithHarry' 
           controls
           width="100%"
           height="100%"
      
 />

</div>

<div className="pl-3 pt-6 w-56" > 
 <p className="text-sm"> Foundation of Mathematics:  A comprehensive Guide</p>
 <p className="text-xs text-gray-400 pt-3">Prof. Samuel Thompson
</p> 
 <p className="text-xs pt-3"> ₹699</p>
    <a href="home" className="text-orange-500 text-xs pt-5">Best seller</a>
</div>
</div>
</section>

<section className="pr-10 pt-10"> 

<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
<ReactPlayer url='https://www.youtube.com/watch?v=BWLDorVaL7c&ab_channel=TheStudyCornerNF' 
           controls
           width="100%"
           height="100%"
      
 />

</div>

<div className="pl-3 pt-6 w-56" > 
 <p className="text-sm"> The Art of Creative Writing
</p>
 <p className="text-xs text-gray-400 pt-3">Dr. Lily Morgan
</p> 
 <p className="text-xs pt-3"> ₹499</p>
    <a href="home" className="text-orange-500 text-xs pt-5">Best seller</a>
</div>
</div>
</section>

<section className="pr-10 pt-10"> 

<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
<ReactPlayer url='https://www.youtube.com/watch?v=WSN_fQXjgjw&ab_channel=codingisforyou' 
           controls
           width="100%"
           height="100%"
      
 />

</div>

<div className="pl-3 pt-6 w-56" > 
 <p className="text-sm"> Coding Made Easy: Learn Programming from Scratch</p>
 <p className="text-xs text-gray-400 pt-3">Prof. Benjamin Collins 
</p> 
 <p className="text-xs pt-3"> ₹399</p>
    <a href="home" className="text-orange-500 text-xs pt-5">Best seller</a>
</div>
</div>
</section>
<section className="pr-10 pt-10"> 

<div className="h-76 w-72  hover:border-slate-800  hover:outline bg-white rounded-xl origin-center"> 
<div  className="h-40 w-72 rounded-xl"> 
<ReactPlayer url='https://www.youtube.com/watch?v=mjPZkn9953k&list=PLmKUwJ0KJQnXBrA_bSxp6Gf5-VSCKdBs0&ab_channel=PolimiOpenKnowledge' 
           controls
           width="100%"
           height="100%"
      
 />

</div>

<div className="pl-3 pt-6 w-56" > 
 <p className="text-sm"> Financial Literacy 101</p>
 <p className="text-xs text-gray-400 pt-3">Prof. Emily Parker
</p> 
 <p className="text-xs pt-3"> ₹999</p>
    <a href="home" className="text-orange-500 text-xs pt-5">Best seller</a>
</div>
</div>
</section>
   </div> 


</div>

  
  )
}
