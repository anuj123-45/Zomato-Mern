import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

function PictureCarousalCard() {
  return (
    <>

      <div className='w-full h-64 relative px-3'>
        {/* Image */}
      <div className='w-full h-full relative'>
        
        {/* Blackish Overlay */}
        <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
      <img
          src="https://b.zmtcdn.com/data/pictures/4/20790444/989668ef4432354cdb8f144fa2077faa.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="dinning"
          className='w-full h-full object-cover transition duration-700 ease-in-out rounded-lg'
        />
      </div>


        {/* Content */}
        <div className='absolute bottom-3 text-white left-4'>
          <h4>Top Trending Spots</h4>
          <h6 className='flex items-center'>
            29 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>

    </>
  )
}

export default PictureCarousalCard