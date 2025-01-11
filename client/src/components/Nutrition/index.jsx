import React from 'react'
import NutritionHeroCarousal from './NutritionHeroCarousal'
import NutritionCarousal from './NutriCarousal'



function Nutrition() {
  return (
    <>
      <NutritionHeroCarousal />
      <div className='my-20'>
        <NutritionCarousal/>
      </div>
      

    </>
  )
}

export default Nutrition