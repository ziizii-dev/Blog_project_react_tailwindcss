import React from 'react'
import default_img from "../assets/images/default_img.png"
import { CiBank } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io5";


const Team = () => {
    let Images = [
        {image:"../assets/images/teno_2.jpeg",name:"name one"},
        {image:"../assets/images/teno_2.jpeg",name:"name two"},
        {image:"../assets/images/teno_2.jpeg",name:"name three"},
        {image:"../assets/images/teno_2.jpeg",name:"name four"},
        {image:"../assets/images/teno_2.jpeg",name:"name five"},
        {image:"../assets/images/teno_2.jpeg",name:"name six"},
        
       
    ]
  return (
    <div className='bg-white pt-24'>
        <div className='grid grid-cols-2 mx-8 my-8'>
            <div className=''>
                <h5 className='text-blue-700 font-bold mb-3'>Our Expertise</h5>
                <p className='text-4xl text-black font-bold '>We have the most <span className='text-purple-600'> professional </span>  marketing team.  </p> 
                <p className='opacity-70 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>

                <div className='flex mt-4'>
                    <div className='text-blue-700'> <CiBank/> </div>
                     <div className='mx-4 max-w-sm'>
                        <h3 className='text-blue-600 font-bold'>Professionalism</h3>
                        <p className='text-xs'>We have the best professional marketing people across the globe just to work with you.</p>
                     </div>
                </div>
                <div className='flex mt-4'>
                    <div className='text-blue-700'> <IoLogoUsd/> </div>
                     <div className='mx-4 max-w-sm'>
                        <h3 className='text-blue-600 font-bold'>Affordable</h3>
                        <p className='text-xs'>We promise to offer you the best rate we can - at par with the industry standard.</p>
                     </div>
                </div>
                <div className='flex mt-4'>
                   
                    <button className='w-40 text-sm mt-6  rounded-fully
                     bg-blue-600 text-white  hover:bg-violet-500'>See Our Portfolio</button>
                </div>
                
                
               
            </div>
           
            <div className=''>
            <div className='flex max-w-1xl mx-2xl  '>
      

            <ul className='grid grid-cols-3 mx-12 py-2 px-2 gap-4 justify-items-center '>
                     {Images.map((data) => (
              
                  <div className=''>
              <li key={data.title} className="md:mr-4 text-xl font-bold place-items-center mb-8 gap-8">
                    <img src={default_img} className="w-28 h-28 rounded-full mx-auto" />
               <h4 className='text-xs font-bold text-purple-600 text-center'>{data.name}</h4>
                 </li> 
           </div> 
                
                  ))}
              </ul>

      {/* </div> */}
      

   </div>
            </div>
        </div>
    </div>
  )
}

export default Team