import React, { useState, useEffect } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { getImage } from '../Redux/Reducer/image/image.action';
import { Link } from 'react-router-dom';

function RestaurantCard(props) {
  const dispatch = useDispatch();
  const [image, setimage] = useState({
    images: []
  });

  useEffect(() => {
    props.photos && dispatch(getImage(props.photos)).then((data)=>setimage(data.payload.image));
  }, [props.photos])

  return (
    <>
      <Link to={`/restaurant/${props._id}`} className='w-full'>
      <div className='bg-white p-3 w-full rounded-lg md:w-1/2 lg:w-1/3 mb-4 hover:shadow-lg transition duration-700 ease-in-out'>
        <div className='w-full h-40 lg:h-48 relative'>
          <div className='absolute flex justify-between items-end w-full bottom-3'>
            <div className='flex flex-col gap-2 items-start'>
              {
                props.isPro && (
                  <span className='bg-zomato-400 text-white px-2 py-1 rounded text-sm'>Pro extra 10% off</span>
                )
              }
              {
                props.isOff && (
                  <span className='bg-blue-600 text-white px-2 py-1 rounded text-sm'>₹ {`${props.isOff}`} OFF</span>
                )
              }
            </div>
            <span className='bg-white bg-opacity-75 p-1 rounded mr-3'>{props.duarationOfDelivery} min</span>
          </div>
          <img src={image.images.length && image.images[0].location} alt="food" className='w-full h-full rounded-lg' />
        </div>
        <div className='my-2 flex flex-col'>

          <div className='flex items-center justify-between '>
            <h4 className='text-xl font-medium'>{props.name}</h4>
            <span className='bg-green-400 p-1 rounded mr-3  flex items-center text-white'>{props.restaurantReviewValue} <AiTwotoneStar /></span>
          </div>

          <div className='flex items-center justify-between text-gray-500 mr-3'>
            <p>{props.cuisine.length > 5 ? props.cuisine.slice(0, 3).join(", ") + "..." : props.cuisine.join(", ")}</p>

            <p>₹ {props.averageCost} for one</p>
          </div>

        </div>

      </div>
      </Link>
    </>
  )
}

export default RestaurantCard