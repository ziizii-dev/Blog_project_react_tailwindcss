import React from 'react'
import teno_2 from '../assets/images/teno_2.jpeg'

const Services = () => {
    let Services =[
        {image:'../assets/images/teno_2.jpeg',title:"Ads Management",desc:"We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."},
        {image:'../assets/images/teno_2.jpeg',title:"Ads Management",desc:"We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."},
        {image:'../assets/images/teno_2.jpeg',title:"Ads Management",desc:"We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."},
        {image:'../assets/images/teno_2.jpeg',title:"Ads Management",desc:"We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."},
        {image:'../assets/images/teno_2.jpeg',title:"Ads Management",desc:"We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."},
        {image:'../assets/images/teno_2.jpeg',title:"Ads Management",desc:"We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."},
        

    ];
//    console.log(Services);
  return (
    < div className='bg-white'>
     <div className='text-4xl text-black font-bold text-center mt-24'>Our Professional <span className='text-purple-600'>Services</span>  </div>
      
     <div className='flex max-w-1xl mx-2xl gap-8 '>
      

        <ul className='grid grid-cols-3 mx-12 py-6 px-4 gap-16 justify-items-center '>
               {Services.map((data) => (
                
             <div className=' border-dashed rounded-lg border-2 border-indigo-600
            '>
                <li key={data.title} className="md:mr-4 text-xl font-bold mt-8 mb-8">
                      <img src={teno_2} className="w-20 h-20 rounded-full mx-auto" />
                    <h4 className='text-center text-base text-purple-800'>{data.title}</h4>
                    <h5 className='text-xs leading-7 opacity-60 text-justify px-6'>{data.desc} </h5>
                 
                 {/* <h4 className='text-xs font-bold text-purple-600 '>{data.name}</h4> */}
                   </li> 
             </div> 
                  
                    ))}
                </ul>

        {/* </div> */}
        

     </div>

    
    </div>
  
    
  )
}

export default Services