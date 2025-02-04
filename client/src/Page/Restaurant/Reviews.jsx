import React, { useState } from 'react'
// components
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard'
import AddReview from '../../components/Restaurant/Reviews/AddReview';

const Reviews = () => {
    const [reviews, setReviews] = useState(["", "", ""]);

    return (
        <>
            <div className='w-full flex  flex-col md:flex-row relative gap-1'>
                <div className='w-full md:w-8/12 flex flex-col gap-3'>
                <div className='md:hidden'>
                <AddReview/>
                </div>
                    {
                        reviews.map((review) => <ReviewCard {...review} />)
                    }
                </div>
                <aside className=" hidden items-start md:flex  flex-col gap-2  md:w-2/6  top-2  sticky h-fit bg-white p-3 rounded-md shadow-md">
                <AddReview/>
                </aside>
            </div>
        </>
    )
}

export default Reviews
