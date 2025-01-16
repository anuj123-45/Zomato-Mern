import React from "react"
// HOC
import HomeLayoutHOC from "./HOC/Home.HOC"
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC"

// component
import Temp from './components/Temp'
import { Routes, Route, Navigate } from "react-router-dom"
// pages
import Home from "./Page/Home"



function App() {


  return (
    <>
      <Routes>
      <Route exact path="/" element={<Navigate to="/delivery" replace />} />
        {HomeLayoutHOC({ path: "/:type", component: Home })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/overview", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/order-online", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/reviews", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/menu", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/photos", component: Temp })}
      </Routes>
    </>
  )
}

export default App
