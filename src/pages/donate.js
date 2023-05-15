import { orphanageHouse } from '@/assets'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

function donate() {
  return (
    <div>
      <div className="bg-black h-[600px]">
        <Navbar />
        <div className=" text-white absolute top-80 left-60">
          <h1 className="font-semibold text-6xl">
            Donate today to support an Orphan
          </h1>
        </div>
      </div>
      <div>
      <Image src={orphanageHouse} alt="" />
      </div>
    </div>
  )
}

export default donate