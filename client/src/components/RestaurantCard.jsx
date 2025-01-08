import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

function RestaurantCard() {
  return (
    <>
      <div className='bg-white p-3 w-full rounded-lg md:w-1/2 lg:w-1/3 mb-4 hover:shadow-lg transition duration-700 ease-in-out'>
        <div className='w-full h-40 lg:h-48 relative'>
          <div className='absolute flex justify-between items-end w-full bottom-3'>
            <div className='flex flex-col gap-2 items-start'>
              <span className='bg-zomato-400 text-white px-2 py-1 rounded text-sm'>Pro extra 10% off</span>
              <span className='bg-blue-600 text-white px-2 py-1 rounded text-sm'>₹ 80 OFF</span>
            </div>
            <span className='bg-white bg-opacity-75 p-1 rounded mr-3'>42 min</span>
          </div>
          <img src="https://b.zmtcdn.com/data/pictures/0/20547950/df0933fe3bfb6019f25d364fb98e0dd6_o2_featured_v2.jpg?output-format=webp" alt="" className='w-full h-full rounded-lg' />
        </div>
        <div className='my-2 flex flex-col'>

          <div className='flex items-center justify-between '>
            <h4 className='text-xl font-medium'>Chalukya Samrat Cafe</h4>
            <span className='bg-green-400 p-1 rounded mr-3  flex items-center text-white'>4.1 <AiTwotoneStar /></span>
          </div>

          <div className='flex items-center justify-between text-gray-500 mr-3'>
            <p>South Indian, North Indian</p>
            <p>₹ 350</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default RestaurantCard