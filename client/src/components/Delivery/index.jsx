import React, { useState } from 'react'
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


function Delivery() {
  const [restaurantList, setrestaurantList] = useState([
    {
      _id: "12345",
      photos: ["https://b.zmtcdn.com/data/pictures/chains/8/53088/503a95985aff70b44bc574f0e3e65701.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
      name: "Thalassery Restaurant",
      cusine: ["Continental", "Oriental", "Asian"],
      averageCost:400,
      isPro:false,
      isOff:100,
      duarationOfDelivery:39,
      restaurantReviewValue:4.3,
    },
    {
      _id: "12345-2",
      photos: ["https://b.zmtcdn.com/data/pictures/0/18369830/e2bf85438d48783f12c79c99ef8ae70c_o2_featured_v2.jpg"],
      name: "California Burrito",
      cusine: ["Mexican", "American", "Continental", "Healthy Food", "Beverages", "Fast Food"],
      averageCost:200,
      isPro:false,
      isOff:false,
      duarationOfDelivery:38,
      restaurantReviewValue:4.5,
    },
    {
      _id: "12345-3",
      photos: ["https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg"],
      name: "Sri Udupi Food Hub",
      cusine: ["South Indian", "Chinese", "Biryani", "North Indian", "Sandwich", "Desserts", "Juices", "Beverages"],
      averageCost:300,
      isPro:false,
      isOff:20,
      duarationOfDelivery:34,
      restaurantReviewValue:4.3,
    }
  ])

  return (
    <>
      <DeliveryCarousel />
      <Brand />
      <div className='flex justify-between flex-wrap'>
        {
          restaurantList.map((list) => (
            <RestaurantCard {...list} key={list._id} />
          ))
        }

      </div>
    </>
  )
}

export default Delivery;