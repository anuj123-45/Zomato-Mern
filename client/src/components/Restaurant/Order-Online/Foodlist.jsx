import React from 'react'
// components
import FoodItem from './FoodItem'

const Foodlist = (props) => {
    return (
        <>
            <div className='flex flex-col gap-3'>
                <h2 className='text-xl bg-white w-full px-2 py-1 z-10 font-semibold sticky top-0'>{props.title}</h2>
                <div className='flex flex-col gap-3'>
                    {
                        props.items.map((food) => (
                            <FoodItem {...food} />
                        ))
                    }
                </div>

            </div>



        </>
    )
}

export default Foodlist
