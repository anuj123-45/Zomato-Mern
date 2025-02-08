import React from "react"
// HOC
import HomeLayoutHOC from "./HOC/Home.HOC"
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC"
import CheckoutHOC from "./HOC/Checkout.HOC"

// component

import { Routes, Route, Navigate} from "react-router-dom"
// pages
import Home from "./Page/Home"
import Overview from "./Page/Restaurant/Overview"
import Redirect from "./Page/Restaurant/Redirect"
import OrderOnline from "./Page/Restaurant/OrderOnline"
import Reviews from "./Page/Restaurant/Reviews"
import Menu from "./Page/Restaurant/Menu"
import Photos from "./Page/Restaurant/Photos"
import Checkout from "./Page/Checkout"





function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/delivery" replace />} />
        {HomeLayoutHOC({ path: "/:type", component: Home })}
        <Route exact path="/restaurant/:id" element={<Redirect />} />
        {RestaurantLayoutHOC({ path: "/restaurant/:id/overview", component: Overview })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/order-online", component: OrderOnline })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/reviews", component: Reviews })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/menu", component: Menu })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/photos", component: Photos})}
        {CheckoutHOC({ path: "/checkout", component: Checkout })}
      </Routes>
    </>
  )
}

export default App
