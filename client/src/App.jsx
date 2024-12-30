import React from "react"
// HOC
import HomeLayoutHOC from "./HOC/Home.HOC"
// component
import Temp from './components/Temp'
import { Routes } from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
      {HomeLayoutHOC({ path: "/", component: Temp})}
      </Routes>
    </>
  )
}

export default App
