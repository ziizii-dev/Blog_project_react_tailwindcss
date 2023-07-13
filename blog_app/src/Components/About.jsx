import React from 'react'
import banner from '../assets/images/banner.jpeg'
import neno_1 from '../assets/images/teno_1.jpeg'

const About = () => {
  return (
    

      <div className='h-96 w-full bg-cover flex'>
        
        {/* <img src={banner} className='h-full w-full object-cover mix-blend-overlay absolute' />  */}
        <div className='p-24 mt-20 flex  grid-rows-4 grid-flow-col gap-60'>
            
            <div className='grid grid-row-8 flex-2 text-lg'>
              <h3> We have now launched operations in Europe.</h3>
                 <h2 className='text-balck text-3xl font-light mt-5'> <span className='font-bold'>Hire the best</span>  <span className='bg-white font-bold text-purple-900'>Marketing Team.</span> </h2>
                 <button className='mt-12 w-48 bg-purple-900 text-sm rounded-fully py-2  hover:bg-blue-500'>Read Customer Stories</button>
             
            </div>
            <div className='grid grid-row-4 flex-1'>
                <img src={neno_1} className='h-40' /> 
            </div>
        
       
        </div>
      
     
    </div>
    
    
  )
}

export default About