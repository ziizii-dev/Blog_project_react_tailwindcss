import React from 'react'
import teno_3 from '../assets/images/teno_3.jpeg'
import teno_4 from '../assets/images/teno_4.jpeg'
import { IoMdTime } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";
const Projects = () => {
  return (
    <div className='bg-white'>
        <div className='grid grid-cols-2 mx-8 my-8 mt-40 gap-8'>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <div>
                        <img src={teno_3} className="h-[270px] w-full" />
                        <div className='flex gap-24 pt-2'>
                        <h3 className='text-blue-600 font-bold'>Tesla Inc.</h3>
                          <h3 className='opacity-70 text-xs'>Ad Campaign</h3>
                        </div>
                        <h3 className='font-bold'>Personalized Ad Campaign using Google AdWords</h3>
                        <div className='flex gap-10 mt-4'>
                             <h3 className=' text-xs flex gap-1 opacity-80'> <IoMdTime className='font-bold'/> 90 DAYS CAMPAIGN</h3>
                             <h3 className='text-xs flex gap-1 opacity-80'><ImLocation2/> NEW YORK</h3>
                             
                        </div>
                      
                        <button className=' text-sm mt-6 w-full
                          rounded-fully bg-blue-600 text-white  hover:bg-violet-500'>Read Case Study</button>
                    </div>
                </div>
                <div>
                <div>
                    <div>
                        <img src={teno_4} className="h-[270px] w-full" />
                        <div className='flex gap-28 pt-2'>
                        <h3 className='text-blue-600 font-bold'>Nestle</h3>
                          <h3 className='opacity-70 text-xs'>SEO Marketing</h3>
                        </div>
                        <h3 className='font-bold'>Ranking #1 for keywords like Chocolate, Snack</h3>
                        <div className='flex gap-10 mt-4'>
                             <h3 className=' text-xs flex gap-1 opacity-80'> <IoMdTime className='font-bold'/> 180 DAY CAMPAIGN</h3>
                             <h3 className='text-xs flex gap-1 opacity-80'><ImLocation2/> PALO ALTO</h3>
                             
                        </div>
                      
                        <button className=' text-sm mt-6 w-full  rounded-fully bg-blue-600 text-white  hover:bg-violet-500'>Read Case Study</button>
                    </div>
                </div>
                </div>
            </div>
            <div className=' '>
                <h3 className='text-sm text-blue-700 font-bold mb-8'>Our Portfolio</h3>
                <div className='text-4xl font-extrabold'>We've done some <div className='text-indigo-600'> amazing projects.</div> </div>
                <p className='opacity-80 mt-10 mb-14 justify-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>

                <a href=""> 
                   <div className='flex items-center  hover:underline'>
                    <h3>View all Projects</h3> 
                    <ImArrowRight2/>
                   </div>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Projects