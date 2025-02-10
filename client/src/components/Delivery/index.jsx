import React, { useState, useEffect } from 'react';
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';
import { useSelector } from 'react-redux';

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.restaurantReducer.restaurants);
  console.log({ reduxState });

  useEffect(() => {
    if (reduxState?.allRestaurants) {
      setRestaurantList(reduxState.allRestaurants);
      console.log(reduxState.allRestaurants);
    }
  }, [reduxState.allRestaurants]);  // ✅ Fixed dependency array
  
  return (
    <>
      <DeliveryCarousel />
      <Brand />
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((list) => (
          <RestaurantCard {...list} key={list._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
