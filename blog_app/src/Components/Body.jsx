import React from 'react'
import banner from '../assets/images/banner.jpeg'
import neno_1 from '../assets/images/teno_1.jpeg'

const Body = () => {
    let Clients =[
       {name:"Cliens",qty:"2282+"},
       {name:"Projects",qty:"3891+"},
       {name:"Awards",qty:"1000+"},
    ]
  return (
   
    <div className='h-96 w-full bg-cover  bg-white'>
        
    {/* <img src={banner} className='h-full w-full object-cover mix-blend-overlay absolute' />  */}
    <div className='p-8 mt-20 flex  grid-rows-4 grid-flow-col gap-80'>



    <div className='grid grid-row-6 flex-2  text-blue-900'>
            <div className='flex '>
            <img src={neno_1} className='h-40 w-80 px-2' /> 
              <img src={neno_1} className='h-40 w-80' /> 
            </div>
    </div>
        
       
        <div className='grid grid-row-6 flex-2  text-blue-900'>
            <h5 className='text-purple-900 text-bold'>Our Track Record</h5>
            <h2 className='text-black text-3xl font-bold mt-5'>We have been doing this since 
            <span className='font-bold text-purple-800'> 1999.</span></h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
             {/* <h2 className='text-balck text-3xl font-light mt-5'>Hire the best Marketing Team.</h2> */}

            
               <ul className='flex px-0 mt-6 mb-6'>
               {Clients.map((data) => (
                  <li key={data.name} className="md:mr-4 text-xl">
                    <h4>{data.qty}</h4>
                 <h4 className='text-sm font-bold text-purple'>{data.name}</h4>
                   </li> 
                    ))}
                </ul>

            

             <button className='w-40 rounded-fully bg-violet-600 text-white  hover:bg-blue-500'>Learn More</button>
            
        </div>
       
        
       
   
    </div>
   
 
</div>
  )
}

export default Body