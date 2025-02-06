import React from 'react'
import RestaurantNavbar from '../components/Navbar/restaurantNavbar'
import ImageGrid from '../components/Restaurant/ImageGrid'
import RestaurantInfo from '../components/Restaurant/RestaurantInfo'
import InfoButton from '../components/Restaurant/InfoButton'
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi"
import TabContainer from '../components/Restaurant/TabConatiner'
import CartContainer from '../components/Cart/CartContainer'



const RestaurantLayout = (props) => {
    const images = [
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
            <div className="container mx-auto px-10 mt-10">
                <ImageGrid images={images} />
                <RestaurantInfo name="Mumbai Express" restaurantRating="3.9" deliveryRating="3.7" cusine="South Indian, Chinese, Biryani, North Indian, Sandwich, Desserts, Juices, Beverages" address="Whitefield, Bangalore" />
                <div className="my-4 flex flex-wrap gap-2">
                    <InfoButton isActive>
                        <TiStarOutline /> Add Review
                    </InfoButton>
                    <InfoButton>
                        <RiDirectionLine /> Direction
                    </InfoButton>
                    <InfoButton>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButton>
                    <InfoButton>
                        <RiShareForwardLine /> Share
                    </InfoButton>
                </div>
                <div className='mt-5'>
                    <TabContainer/>
                    {props.children}

                </div>
            </div>
            <CartContainer/>
            </>

    
    )
}

export default RestaurantLayout