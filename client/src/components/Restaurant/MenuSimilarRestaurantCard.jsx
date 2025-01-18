import React from 'react'
import { FaStar } from "react-icons/fa";


const MenuSimilarRestaurantCard = (props) => {
  return (
    <>
 
 <div className='bg-white shadow-md w-full sm:w-48 md:w-64 lg:w-80 p-2 '>
  <div className='w-full h-48'>
    <img
      src={props.image}
      alt="food"
      className='w-full h-full rounded-md object-cover'
    />
  </div>
  <div className='flex flex-col gap-2 p-3'>
    <h3 className='font-semibold  my-1 text-lg'>{props.title}</h3>
    <div className="flex items-center gap-3 text-sm">
      <span className="flex items-center gap-1">
        <span className="flex items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
          3.3
          <FaStar />
        </span>
        Dining
      </span>
      <span className="w-2 h-5 border-r border-gray-500" />
      <span className="flex items-center gap-1">
        <span className="flex items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
          4.2
          <FaStar />
        </span>
        Delivery
      </span>
    </div>
    <div className='flex flex-col'>
      <h4>North Indian, Mughlai, Chinese</h4>
      <p className='text-gray-400'>Marathahalli, Bangalore</p>
    </div>
  </div>
</div>


    </>
  )
}

export default MenuSimilarRestaurantCard