import React from 'react'
import Navbar from '../components/Navbar/CheckoutNavbar'


const CheckoutLayout = (props) => {
  return (
 <>
 <Navbar/>
 
<div className='container mx-auto px-4 lg:px-20'>
    {props.children}
    
    
    </div> 
    
    </>
  )
}

export default CheckoutLayout
