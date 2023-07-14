import React from 'react'
import About from '../Components/About'
import Blogs from '../Components/Blogs'
import Body from '../Components/Body'
import Clients from '../Components/Clients'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import IntroPost from '../Components/introPost'
import Projects from '../Components/Projects'
import Services from '../Components/Services'
import Team from '../Components/Team'


function Home() {
  return (
    <div className='mt-[20] '>
        <Header/>
   
          <About/>

          <Body/>
          <Services/>
          <Team/>
          <Projects/>
          <Clients/>
        {/* <IntroPost/>

        <Blogs/>

        <Footer/> */}
    </div>
  )
}

export default Home