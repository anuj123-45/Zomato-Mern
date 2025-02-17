import React, { useState, useEffect } from 'react';
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';
import { useSelector } from 'react-redux';

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.restaurantReducer.restaurants);
  console.log(reduxState.allRestaurants);

  useEffect(() => {
    if (reduxState?.allRestaurants) {
      setRestaurantList(reduxState.allRestaurants);
    }
  }, [reduxState.allRestaurants]);

  console.log(restaurantList);

  return (
    <>
      <DeliveryCarousel />
      <Brand />
      <div className="flex flex-wrap -mx-2">
  {restaurantList?.map((restaurant) => (
    <div key={restaurant._id} className="w-full md:w-1/2 lg:w-1/3 p-2">
      <RestaurantCard {...restaurant} />
    </div>
  ))}
</div>



    </>
  );
}

export default Delivery;
