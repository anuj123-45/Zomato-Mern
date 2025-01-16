import React from 'react'
import { useLocation } from 'react-router-dom'

const Temp = () => {
  const location=useLocation();
  return (
    <div>Temp component {location.pathname}</div>
  )
}

export default Temp