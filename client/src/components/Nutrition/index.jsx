import React from 'react'
import NutritionHeroCarousal from './NutritionHeroCarousal'
import NutritionCarousal from './NutriCarousal'
import NutritionCard from './NutritionCard'




function Nutrition() {
  return (
    <>
      <NutritionHeroCarousal />
      <div className='my-20'>
        <NutritionCarousal/>
      </div>
      <div className='my-10 flex justify-between flex-wrap'>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      <NutritionCard   image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"/>
      
      
      </div>
      

    </>
  )
}

export default Nutrition