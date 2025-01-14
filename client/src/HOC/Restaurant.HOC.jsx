import React from 'react'
import { Route } from 'react-router-dom'

// layout
import RestaurantLayout from '../Layout/Restaurant.Layout'


const RestaurantLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                element={
                    <RestaurantLayout>
                        <Component />
                    </RestaurantLayout>
                }
            />

        </>
    )
}

export default RestaurantLayoutHOC