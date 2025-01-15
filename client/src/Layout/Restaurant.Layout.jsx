import React from 'react'
import RestaurantNavbar from '../components/Navbar/restaurantNavbar'
import ImageGrid from '../components/Restaurant/ImageGrid'


const RestaurantLayout = () => {
    const images=[
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    ]
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 mt-10">
                <ImageGrid images={images}/>
            </div>
        </>
    )
}

export default RestaurantLayout