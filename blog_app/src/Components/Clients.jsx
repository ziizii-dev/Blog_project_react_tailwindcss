import React from 'react'

const Clients = () => {
  return (
    <div>
        <div className='grid grid-cols-2 mx-8 my-8 mt-40 gap-8'>
            <div className='bg-red-100'>
                <h4 className='text-sm text-blue-700 font-bold mb-8'>Testimonials</h4>
                <div className='text-4xl font-extrabold flex '>Our Clients <div className='text-blue-600 px-4'>Love Us.</div> </div>
                <p className='opacity-80 mt-6 mb-6'>Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               
               <div>
                   {/* <ImQuotesLeft/>
                   <ImQuotesRight/> */}
               </div>
            
            
            </div>
            <div className='bg-blue-200'>N</div>
           
        </div>
    </div>
  )
}

export default Clients