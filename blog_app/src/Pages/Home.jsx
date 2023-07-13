import React from 'react'
import About from '../Components/About'
import Blogs from '../Components/Blogs'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import IntroPost from '../Components/introPost'


function Home() {
  return (
    <div className='mt-[20] be'>
        <Header/>
   
          <About/>

          <Body/>
        {/* <IntroPost/>

        <Blogs/>

        <Footer/> */}
    </div>
  )
}

export default Home