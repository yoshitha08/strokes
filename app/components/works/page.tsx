import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { useState } from 'react'
import ArtWorks from './ArtWorks'
import GdWorks from './GdWorks'
import Photographs from './Photographs'
import { artworks,gdworks,photographs } from '@/data'

function page() {
  
  return (
    <>
    <div id = "gallery" className="container min-w-full p-10">
      <h1 className='text-3xl text-gray-400 flex justify-center items-center mt-5 mb-7'>ArtWorks</h1>
      <ArtWorks/>
      <h1 className='text-3xl text-gray-400 flex justify-center items-center mt-20 mb-7'>Graphic Designs</h1>
      <GdWorks/>
      <h1 className='text-3xl text-gray-400 flex justify-center items-center mt-20 mb-7'>Photographs</h1>
      <Photographs/>
    </div>

    </>
  )
}

export default page