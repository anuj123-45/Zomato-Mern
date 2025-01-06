import React from 'react'
import DeliveryCategory from './DeliveryCategory'

const DeliveryCarousel = () => {
    return (
        <>
            <h1 className='text-xl font-semibold mb-4'>Inspiration for your first order</h1>
            <div className='flex flex-wrap justify-between gap-3'>
                <DeliveryCategory />
                <DeliveryCategory />
                <DeliveryCategory />
                <DeliveryCategory />
                <DeliveryCategory />
                <DeliveryCategory />
            </div>
        </>
    )
}

export default DeliveryCarousel