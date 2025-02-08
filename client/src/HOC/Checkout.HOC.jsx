import React from 'react'
import { Route } from 'react-router-dom'
import CheckoutLayout from '../Layout/Checkout.layout'


const CheckoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        element={
          <CheckoutLayout>
            <Component />
          </CheckoutLayout>
        }
      />

    </>
  )
}

export default CheckoutHOC