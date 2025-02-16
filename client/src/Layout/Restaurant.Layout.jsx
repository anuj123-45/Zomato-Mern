import React, { useEffect, useState } from "react";
import RestaurantNavbar from "../components/Navbar/restaurantNavbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import InfoButton from "../components/Restaurant/InfoButton";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import TabContainer from "../components/Restaurant/TabConatiner";
import CartContainer from "../components/Cart/CartContainer";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/image/image.action";

const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
        rating: 0,
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!id) return;

        dispatch(getSpecificRestaurant(id))
            .then((data) => {
                setRestaurant((prev) => ({ ...prev, ...data.payload.restaurant }));
                return dispatch(getImage(data.payload.restaurant.photos));
            })
            .then((data) => {
                setRestaurant((prev) => ({ ...prev, images: data.payload.image.images }));
            })
            .catch((error) => console.error("Error fetching restaurant data:", error));
    }, []);

    

    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-10 mt-10">
                <ImageGrid images={restaurant.images.length ? restaurant.images : ["fallback-image-url.jpg"]} />
                <RestaurantInfo
                    name={restaurant.name}
                    restaurantRating={restaurant.rating || 0}
                    deliveryRating={restaurant.rating || 0}
                    cuisine={restaurant.cuisine}
                    address={restaurant.address}
                />
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
                <div className="mt-5 mb-10">
                    <TabContainer />
                    {props.children}
                </div>
            </div>
            <CartContainer />
        </>
    );
};

export default RestaurantLayout;
