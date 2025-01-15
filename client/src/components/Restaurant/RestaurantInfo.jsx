import React from 'react'
import { IoIosStar } from "react-icons/io";
const RestaurantInfo = (props) => {
    return (
        <>
            <div className='flex justify-between flex-col-reverse md:flex-row md:items-center   mt-5'>

                <h1 className='text-xl md:text-3xl font-semibold md:font-bold'>{props.name}</h1>

                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1'>
                        <span className='flex items-center rounded-md   bg-green-500 text-white px-2'>{props.restaurantRating}<IoIosStar /></span>
                        <span >
                            <strong className='text-xs'>2</strong>
                            <p className='border-b border-gray-300  border-dashed text-xs'>Dinning Ratings</p>
                        </span>
                    </div>

                    <div className='flex items-center gap-1'>
                        <span className='flex items-center rounded-md   bg-green-500 text-white px-2'>{props.deliveryRatings}<IoIosStar /></span>
                        <span>
                            <strong className='text-xs'>186</strong>
                            <p className='border-b border-gray-300  border-dashed text-xs'>Delivery Ratings</p>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-lg text-gray-600'>{props.cusine}</h3>
                <h3 className='text-gray-400'>{props.address}</h3>
                <h3><span className='text-orange-700'>Open Now</span>- 11am - 8am</h3>
            </div>


        </>
    )
}

export default RestaurantInfo