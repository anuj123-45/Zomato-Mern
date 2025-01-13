import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
    return (
        <>
            <div className='w-full  md:w-1/2 lg:w-1/3 p-4'>
                <div className='w-full h-full bg-white rounded-lg hover:shadow-lg transition duration-700 ease-in-out '>
                <div className={`w-full h-56 bg-${props.bg}-100 rounded-t-2xl`}>
                    <img src={props.image} alt="supplements" className='w-full h-full' />
                </div>
                <div className='px-3 flex flex-col gap-3 py-2 rounded-b-2xl'>
                    <div className='flex items-center gap-3'>
                        <div className="w-4 h-4">
                            <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" alt="veg" className='w-full h-full' />
                        </div>
                        <ReactStars
                            count={5}
                            value={3}
                            size={20}
                            isHalf={true}
                            emptyIcon={<BsStarFill />}
                            halfIcon={<BsStarHalf />}
                            fullIcon={<BsStar />}
                            activeColor="#ffd700"
                        />
                        <span className='text-gray-500'>3</span>
                    </div>
                    <h3 className='text-xl font-bold text-gray-700'>Burn - Weight Balance</h3>
                    <p className="text-sm font-light text-gray-400">
                        This formula with VFill™ technology will help improve metabolism and
                        support fat burn.
                    </p>
                    <div className="mt-4">
                        <hr />
                    </div>
                    <div>
                        <span>
                            {" "}
                            <s className="text-gray-300 font-light mr-3">₹600</s>{" "}
                            <strong>₹320</strong>
                        </span>
                        <p>Monthly pack - 30 capsules</p>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default NutritionCard