import React from 'react'
// components
import Navbar from '../components/Navbar/index'
import FoodTabs from '../components/FoodTab/index'



const HomeLayout = (props) => {
  return (
    <>
      <Navbar/>
      <FoodTabs/>
      <div className="container mx-auto px-4 lg:px-20">
        {props.children}
      </div>

    </>
  )
}

export default HomeLayout