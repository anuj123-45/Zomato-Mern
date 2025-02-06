import React from 'react'

const FoodItem = (props) => {
    return (
        <>
           
                    <div className="flex justify-between items-center">
                        {/* Left Side: Item Name */}
                        <h5 className="text-base sm:text-lg font-medium">{props.name}</h5>

                        {/* Right Side: Amount & Counter */}
                        <div className="flex flex-col items-center">
                            <small className="text-gray-600 text-sm sm:text-base">₹ {parseInt(props.price)*parseInt(props.quantity)}</small>

                            <div className="flex items-center bg-zomato-400 text-white gap-2 px-3 py-1 rounded-lg mt-1">
                                <button className="px-2 text-base sm:text-lg">-</button>
                                <span className="text-base sm:text-lg">1</span>
                                <button className="px-2 text-base sm:text-lg">+</button>
                            </div>
                        </div>
                    </div>
                    <hr className='my-2'/>
        </>
    )
}

export default FoodItem
