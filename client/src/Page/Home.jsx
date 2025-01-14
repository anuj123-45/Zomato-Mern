import React from 'react'
import { useParams } from 'react-router-dom';
// components
import Delivery from '../components/Delivery';
import Dinning from '../components/Dinning';
import NightLife from '../components/NightLife'
import Nutrition from '../components/Nutrition';


const Home = () => {
  const { type } = useParams();
  return (
    <>
      <div className='my-5'>
        {type === "delivery" && <Delivery />}
        {type === "diningout" && <Dinning />}
        {type === "nightlife" && <NightLife />}
        {type === "nutrition" && <Nutrition />}
      </div>

    </>
  )
}

export default Home