import React from 'react'
import { useParams } from 'react-router-dom';
// components
import Delivery from './Delivery';
import Dinning from './Dinning';
import NightLife from './NightLife'


const Master = () => {
  const { type } = useParams();
  return (
    <>
      <div className='my-5'>
        {type === "delivery" && <Delivery />}
        {type === "diningout" && <Dinning />}
        {type === "nightlife" && <NightLife />}
      </div>

    </>
  )
}

export default Master