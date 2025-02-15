import React, { useEffect, useState } from 'react'
import RestaurantNavbar from '../components/Navbar/restaurantNavbar'
import ImageGrid from '../components/Restaurant/ImageGrid'
import RestaurantInfo from '../components/Restaurant/RestaurantInfo'
import InfoButton from '../components/Restaurant/InfoButton'
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi"
import TabContainer from '../components/Restaurant/TabConatiner'
import CartContainer from '../components/Cart/CartContainer'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'


// redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/restaurant/restaurant.action'
import { getImage } from '../Redux/Reducer/image/image.action'


const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({ images: [], name: "", cuisine: "", address: "" });
    const { id } = useParams();



    const images = [
        // "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        // "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        // "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        // "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        // "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        // "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"

    ]

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpecificRestaurant(id))
            .then((data) => {
                setRestaurant((prev) => ({ ...prev, ...data.payload.restaurant }));

                // Return the dispatch call so that it can be chained
                return dispatch(getImage(data.payload.restaurant.photos));
            })
            .then((data) => {
                setRestaurant(({ images: data.payload.image.images }))
               

            })
            .catch((error) => console.error("Error fetching restaurant data:", error));
    }, []); // Include id in the dependency array

    console.log(restaurant.images);
    

    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-10 mt-10">
                <ImageGrid  images={restaurant.images}/>
                <RestaurantInfo name={restaurant.name} restaurantRating={restaurant.rating || 0} deliveryRating={restaurant.rating || 0} cusine={restaurant.cuisine} address={restaurant.address} />
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
                <div className='mt-5 mb-10'>
                    <TabContainer />
                    {props.children}

                </div>
            </div>
            <CartContainer />
        </>


    )
}

export default RestaurantLayout