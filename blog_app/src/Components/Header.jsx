import React from 'react'

import logo from '../assets/Images/logo.png'
// import banner from '../assets/images/banner.jpeg'


const Header = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Service",link:"/"},
        {name:"Contact Us",link:"/"},
        
    ];
    // console.log(Links);
    
    
  return (
    <div className="shadow-md w-full fixed   top-0 left-0">
        <div className="md:flex items-center  justify-between bg-blue-300  py-4 md:px-10 px-7 ">
            <div className='font-bold text-3xl sticky cursor-pointer flex items-center text-gray-800'>
            <img src= {logo}  className='w-[100px]'  />TECHNO
               
               
               <div className="md:flex items-center px-10">
               <ul className='md:flex md:items-center'>
               {Links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-xl">
                  <a href={link.link} className=" text-blue-600 hover:text-emerald-700">{link.name}</a>
                   </li>
                    ))}
                </ul>

               </div>
               
        </div>
            
           
            <button className='blue rounded-fully bg-purple-900 text-white hover:bg-blue-500'>Hire Us</button>
    

            
        </div>

    
       
    </div>
    
   
  )
}

export default Header