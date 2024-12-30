import React from 'react'
import { Route } from 'react-router-dom'
// layout

import HomeLayout from '../Layout/Home.Layout'

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                element={
                    <HomeLayout>
                        <Component />
                    </HomeLayout>
                }
            />

        </>
    )
}

export default HomeLayoutHOC