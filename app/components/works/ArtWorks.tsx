import React from 'react'
import { artworks } from '@/data'

function ArtWorks() {
  return (
    

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {artworks.map((item) => (
        <div>
            <img className="h-auto max-w-full rounded-lg" src={item.img} alt=""/>
        </div>
        ))
    }
</div>
  )
}

export default ArtWorks
