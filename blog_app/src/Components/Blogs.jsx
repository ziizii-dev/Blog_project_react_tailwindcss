import React from 'react'
import teno_4 from '../assets/images/teno_4.jpeg'
import { IoMdTime } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { ImPriceTag } from "react-icons/im";
import { FiUser } from "react-icons/fi";
const Blogs = () => {
  return (
    <div className='mt-40'>
      <div > 
          <div className='text-center'>
          <h3 className='text-indigo-600 font-bold mb-4'>Blog</h3>
          <p className='text-4xl font-bold'> We Love <span className='text-indigo-600'> Writing.</span></p>
          <p className='text-sm opacity-60 mt-4'>Some amazing blog posts that are written by even 
           <div>more amazing people.</div></p>
          </div>
      </div>
      <div className='grid grid-cols-3 mx-8 my-8 mt-16 gap-8'>
        <div className=''>
          {/*....... card start........... */}
                  <div>
                        <img src={teno_4} className="h-[220px] w-[290px]" />
                        
                        <div className='grid bg-red-100 w-[260px] ms-2 me-2'>
                        <div className='flex gap-4 pt-2'>
                        <h3 className='text-sm opacity-70 font-bold flex gap-2'><FiUser/> Adam Wathan</h3>
                          <h3 className='opacity-70 text-xs flex gap-2 justify-center'><ImPriceTag/>SEO </h3>
                        </div>
                        <h3 className='font-bold text-sm'>Optimizing your website for your main keyword</h3>
                       <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <button className=' text-sm mt-6   rounded-fully bg-blue-600 text-white  hover:bg-violet-500'>Read Case Study</button>

                        </div>
                        
                      
                    </div>  
        
        
        
        </div>
        <div className='bg-blue-400'>B</div>
        <div className='bg-green-400'>G</div>
      </div>
    </div>
  )
}

export default Blogs