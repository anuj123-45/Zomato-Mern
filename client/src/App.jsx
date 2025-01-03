import React from "react"
// HOC
import HomeLayoutHOC from "./HOC/Home.HOC"
// component
import Temp from './components/Temp'
import Master from "./components/master"
import { Routes } from "react-router-dom"


function App() {


  return (
    <>
      <Routes>
      {HomeLayoutHOC({ path: "/", component: Temp})}
      {HomeLayoutHOC({ path: "/:type", component: Master})}
      </Routes>
    </>
  )
}

export default App
