import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCircleChevronRight } from "react-icons/fa6";
import Slider from 'react-slick';
import ReactStars from 'react-stars'
import { useDispatch, useSelector } from 'react-redux';


// Components
import MenuCollection from '../../components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../components/Restaurant/MenuSimilarRestaurantCard';
import { PrevArrow, NextArrow } from '../../components/CarousalArrow';
import MapView from '../../components/Restaurant/MapView';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';

//actions
import { getImage } from '../../Redux/Reducer/image/image.action';


const Overview = () => {
  const [menuImage, setmenuImage] = useState({ images: [] });

  const { id } = useParams();

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.restaurantReducer.selectedRestaurant.restaurant);
  console.log({ reduxState });

  useEffect(() => {
    if (reduxState?.menuImages) {
      dispatch(getImage(reduxState.menuImages))
        .then((data) => {
          const images = [];
          data.payload.image.images.map(({ location }) => images.push(location))
          setmenuImage(images)
        }
        )
        .catch((err) => console.error("Error fetching images:", err));
    }
  }, []); // Depend on `reduxState`, not `reduxState.menuImages`


  const getLatLong = (mapAddress) => {
    if (!mapAddress || typeof mapAddress !== "string") return [0, 0]; // Default fallback
    return mapAddress.split(",").map((item) => parseFloat(item.trim()));
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const similarRestaurants = [
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Tea" },
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Coffee" },
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Snacks" },
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Snacks" },
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Snacks" },
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Snacks" },
    { image: "https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp", title: "Snacks" },

  ];

  return (
    <>

      <div className="flex flex-col md:flex-row relative gap-1">
        {/* Main Content */}
        <div className="md:w-4/6 shadow-sm">
          <h2 className="font-semibold text-lg md:text-xl my-4">About this Place</h2>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-2 text-zomato-400">
                See all Menus <FaCircleChevronRight />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection menuTitle="Menu" pages="2" image={menuImage} />
          </div>

          <h4 className="text-lg font-bold my-4 text-zomato-1000">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {reduxState?.cuisine.map((data) => (
              <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>



          <h4 className="text-lg font-semibold text-black">Average Cost</h4>
          <h6>₹{reduxState?.averageCost} for two people (approx.)</h6>
          <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>

          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                {similarRestaurants.map((restaurant, index) => (
                  <MenuSimilarRestaurantCard
                    key={index}
                    image={restaurant.image}
                    title={restaurant.title}
                  />
                ))}
              </Slider>
            </div>
          </div>

          <div className='my-4'>
            <h4 className='text-lg font-semibold'>Rate your delivery experience</h4>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
            />
          </div>

          <div className='my-4 md:hidden'>
          <MapView
            title={reduxState?.name}
            phno={`+91${reduxState?.contactNumber}`}
            mapLocation={getLatLong(reduxState?.mapLocation)} // Ensure it's not an array inside an array
            address={reduxState?.address}
          />
          </div>

          <div className='my-6'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />

          </div>
        </div>

        {/* Sidebar */}
        <aside className=" hidden  md:flex  flex-col gap-2  md:w-2/6  top-2  sticky h-fit bg-white p-3 rounded-md shadow-md">
          <MapView
            title={reduxState?.name}
            phno={`+91${reduxState?.contactNumber}`}
            mapLocation={getLatLong(reduxState?.mapLocation)} // Ensure it's not an array inside an array
            address={reduxState?.address}
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;
