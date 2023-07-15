import React from 'react'
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import tecno_1 from "../assets/images/teno_1.jpeg"
import tecno_2 from "../assets/images/teno_2.jpeg"
import tecno_3 from "../assets/images/teno_3.jpeg"
import Pagination from './Pagination';


const Clients = () => {
  
  const data = [
    {
      // image: '/Users/sabahna/Desktop/blogVite_app/blog_app/src/assets/images/logi',
     image:tecno_1,
      name: 'AdanCuppy',
      description: 'Description One',
    },
    {
      // image: '../assets/images/teno_2.jpeg',
      image:tecno_2,
      name: ' Name Two',
      description: 'Description two',
    },
    {
      // image: '../assets/images/teno_3.jpeg',
      image:tecno_3,
      name: 'Name three',
      description: 'Description three',
    },
    // Add more data objects as needed
  ];

  const itemsPerPage = 1;

  // return <Pagination data={data} itemsPerPage={itemsPerPage} />;
 
  return (

    <div>
        <div className='grid grid-cols-2 mx-8 my-8 mt-40 gap-8'>
            <div className='bg-red-100'>
                <h4 className='text-sm text-blue-700 font-bold mb-8'>Testimonials</h4>
                <div className='text-4xl font-extrabold flex '>Our Clients <div className='text-blue-600 px-4'>Love Us.</div> </div>
                <p className='opacity-80 mt-6 mb-6'>Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               
               <div>
                  <div className='text-blue-600'> <ImQuotesLeft/></div>
                       <p className='text-xl opacity-70'>Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <div className='text-blue-600'>  <ImQuotesRight/></div>
               </div>
               <Pagination data={data} itemsPerPage={itemsPerPage} />
               
            
            
            </div>
            <div className='bg-blue-200'>
              {/* <img src={} alt="" /> */}
              <Pagination data={data} itemsPerPage={itemsPerPage} />
            
            </div>

           
        </div>
    </div>
  )
}

export default Clients