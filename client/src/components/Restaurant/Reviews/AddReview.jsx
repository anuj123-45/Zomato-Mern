import React, {useState} from 'react'
import ReviewModal from './ReviewModal'


const AddReview = () => {

const [isOpen, setIsOpen] = useState(false)
const openModal=()=> setIsOpen(true)
const handleRating = (value) => {
  console.log(value);
};
  return (
    <>
    <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} handleRating={handleRating}/>
     <h3 className='text-xl font-medium'>Rate your experience</h3>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-2'>

                            <input type="radio" name='review' id="dinning" />
                            <label htmlFor="dinning">Dinning</label>
                        </div>
                        <div className='flex gap-2'>

                            <input type="radio" name='review' id='delivery' />
                            <label htmlFor="delivery">Delivery</label>

                        </div>

                    </div>
                   
                    <button onClick={openModal} className='text-zomato-400'>Write a Review</button>
    
    
    </>
  )
}

export default AddReview
