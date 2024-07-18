import React from 'react'
import { Hero } from '../components/hero/Hero'
import { NavbarFloat } from '../components/navbar/Navbar'
import Events from '../components/events/page'
import { StickyScrollRevealDemo } from '../components/events/scroll'
import Page from '../components/works/page'
import { ThreeDCardDemo } from '../components/cards/Card3d'
import { BentoGridDemo } from '../components/hero/Grid'
import Footer from '../components/footer/Footer'

function page() {
  return (
    <div>
      <NavbarFloat/>
      <Hero/>
      <h1 className='text-7xl text-gray-400 flex justify-center items-center mt-10'>Events</h1>
      <StickyScrollRevealDemo/>
      <h1 className='text-7xl text-gray-400 flex justify-center items-center mt-10'>Members</h1>
      <h3 className='text-2xl text-gray-400 flex justify-center items-center mt-5'>Meet our Team!!</h3>
      <ThreeDCardDemo/>
      {/*<h1 className='text-7xl text-gray-400 flex justify-center items-center mb-[6%]'>Timeline</h1>*/}
      <h1 className='text-7xl text-gray-400 flex justify-center items-center mb-2 mt-10'>Gallery</h1>
      {/* <Gallery/> */}
      <Page/>
      {/*<BentoGridDemo/>*/}

      <Footer/>
    </div>
  )
}

export default page