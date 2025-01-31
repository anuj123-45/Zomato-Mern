import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import ReactStars from 'react-stars'

const FoodItem = (props) => {
    return (
        <>


            <div className='flex  md:gap-3 items-center justify-between'>

                <div className='w-24 md:w-3/12 h-36 md:px-3'>
                    <img src={props.image} alt="" className='w-full h-full rounded-md' />
                </div>

                <div className='w-7/12'>
                <div className='md:hidden flex items-center justify-between'>
                    <h3>{props.title}</h3>
                    <button className='bg-zomato-100 text-zomato-400 px-3 py-1 border border-zomato-400 rounded flex items-center gap-2'><FaPlus />Add</button>
                    </div>
                    <ReactStars count={5} value={props.rating} size={20} />
                    <h5>₹{props.price}</h5>
                    <p className='truncate text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className=' hidden md:block w-2/12'>
                    <button className='bg-zomato-100 text-zomato-400 px-3 py-1 border border-zomato-400 rounded flex items-center gap-2'><FaPlus />Add</button>
                </div>

            </div>


        </>
    )
}

export default FoodItem
