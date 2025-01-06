import React from 'react'

const DeliverySm=()=>{
  return <>
   <div className='lg:hidden bg-white shadow-md md:w-56'>
            <div className='w-full h-24 '>
                <img src="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png" alt="food" className='w-full h-full rounded-t-md object-cover'/>
            </div>
            <div>
                <h3 className='font-base text-center my-1 text-sm'>Biryani</h3>
            </div>  
      </div>
  
  </>
}

const DeliveryLg=()=>{
  return <>
  <div className='hidden lg:blockrounded-md'>
            <div className='w-full h-24 '>
                <img src="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png" alt="food" className='w-full h-full rounded-t-md object-cover'/>
            </div>
            <div>
                <h3 className='font-base text-center my-1 text-sm'>Biryani</h3>
            </div>  
      </div>
  
  </>
}

function DeliveryCategory() {
  return (
    <>
   <DeliverySm/>
   
    </>
  )}

export default DeliveryCategory