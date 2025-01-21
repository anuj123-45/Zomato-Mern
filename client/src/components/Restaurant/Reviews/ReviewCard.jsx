import React from 'react'
import { IoMdStar } from "react-icons/io";


const ReviewCard = () => {
    return (
        <>

            <div className='flex flex-col gap-2 my-4'>

                <div className='flex items-center justify-between'>

                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 rounded-full'>
                            <img src="https://b.zmtcdn.com/data/user_profile_pictures/662/9edb0c26f0dbca2367cb82b49ab47662.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="avatar" className='w-full h-full rounded-full object-cover' />

                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>Anuj Gupta</h3>
                            <small className='text-gray-500'>5 Reviews &#8226; 3 Followers</small>

                        </div>
                    </div>

                    <button className='text-zomato-400 border border-zomato-400 py-1 px-3 rounded-md'>Follow</button>
                </div>

                <div>
                    <div className='flex items-center gap-3'>
                        <span className='text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center'>
                            3 <IoMdStar />
                        </span>
                        <h5 className='font-regular uppercase'>Delivery</h5>
                        <small className='text-gray-500'>3 days ago</small>
                    </div>

                    <div className='w-full'>
                        <p className='w-full text-gray-600 font-light text-base'>
                            I strongly recommends not to buy food through Zomato on train because they delivered only half items of the order and the hotel members frequently call and instist to cancel the order after receiving payment through online and packing of the items are also very worst particularly in GUNTAKAL JUNCTION SRI BAHAGYA SUNDAR HOTEL.
                        </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ReviewCard