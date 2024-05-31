import React from 'react'
import { Hero } from '../components/hero/Hero'
import { NavbarFloat } from '../components/navbar/Navbar'
import Events from '../components/events/page'
import { StickyScrollRevealDemo } from '../components/events/scroll'
import { ThreeDCardDemo } from '../components/cards/Card3d'
import { BentoGridDemo } from '../components/hero/Grid'
import Footer from '../components/footer/Footer'
import { Gallery } from '../components/gallery/page'

function page() {
  return (
    <div>
      <NavbarFloat/>
      <Hero/>
      <h1 className='text-7xl text-gray-400 flex justify-center items-center'>Events</h1>
      <StickyScrollRevealDemo/>
      <h1 className='text-7xl text-gray-400 flex justify-center items-center'>Members</h1>
      <ThreeDCardDemo/>
      <h1 className='text-7xl text-gray-400 flex justify-center items-center mb-[6%]'>Timeline</h1>

      <h1 className='text-7xl text-gray-400 flex justify-center items-center mb-[6%]'>Gallery</h1>
      {/* <Gallery/> */}
      <BentoGridDemo/>
      <Footer/>
    </div>
  )
}

export default page