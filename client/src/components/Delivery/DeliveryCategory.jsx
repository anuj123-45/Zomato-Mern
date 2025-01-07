import React from 'react'

const DeliverySm = ({ image, title }) => {
  return <>
    <div className='lg:hidden bg-white shadow-md w-24 md:w-56'>
      <div className='w-full h-24 '>
        <img src={image} alt="food" className='w-full h-full rounded-t-md object-cover' />
      </div>
      <div>
        <h3 className='font-base text-center my-1 text-sm'>{title}</h3>
      </div>
    </div>

  </>
}

const DeliveryLg = ({ image, title }) => {
  return <>
    <div className="hidden lg:block w-64 h-48">
      <div className="w-full h-full">
        <img
          src={image}
          alt="food"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-xl my-1 font-medium">{title}</h3>
      </div>
    </div>

  </>
}

function DeliveryCategory(props) {
  return (
    <>
      <DeliverySm {...props} />
      <DeliveryLg {...props} />
    </>
  )
}

export default DeliveryCategory