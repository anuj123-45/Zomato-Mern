import React from 'react'
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


function Delivery() {
  return (
    <>
      <DeliveryCarousel />
      <Brand/>
      <div className='flex justify-between flex-wrap'>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      </div>
    </>
  )
}

export default Delivery;