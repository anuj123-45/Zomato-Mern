import React , {useEffect} from "react"
// HOC
import HomeLayoutHOC from "./HOC/Home.HOC"
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC"

// component
import Temp from './components/Temp'
import { Routes, Route, Navigate} from "react-router-dom"
// pages
import Home from "./Page/Home"
import Overview from "./Page/Restaurant/Overview"
import Redirect from "./Page/Restaurant/Redirect"



function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/delivery" replace />} />
        {HomeLayoutHOC({ path: "/:type", component: Home })}
        <Route exact path="/restaurant/:id" element={<Redirect />} />
        {RestaurantLayoutHOC({ path: "/restaurant/:id/overview", component: Overview })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/order-online", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/reviews", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/menu", component: Temp })}
        {RestaurantLayoutHOC({ path: "/restaurant/:id/photos", component: Temp })}
      </Routes>
    </>
  )
}

export default App
