import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCircleChevronRight } from "react-icons/fa6";
import Slider from 'react-slick';
import ReactStars from 'react-stars'



// Components
import MenuCollection from '../../components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../components/Restaurant/MenuSimilarRestaurantCard';
import { PrevArrow, NextArrow } from '../../components/CarousalArrow';
import MapView from '../../components/Restaurant/MapView';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';




const Overview = () => {

  const { id } = useParams();


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
            <MenuCollection menuTitle="Menu" pages="2" image="https://b.zmtcdn.com/data/menus/201/50201/449179bcd4cb8dc146dfdff28219576b.jpg" />
          </div>

          <h4 className="text-lg font-bold my-4 text-zomato-1000">Cuisines</h4>
          <div className="flex flex-wrap gap-2 my-2">
            <span className="border border-gray-600 text-zomato-1000 px-2 py-1 rounded-full">
              Biryani
            </span>
            <span className="border border-gray-600 text-zomato-1000 px-2 py-1 rounded-full">
              South Indian
            </span>
            <span className="border border-gray-600 text-zomato-1000 px-2 py-1 rounded-full">
              Shake
            </span>
          </div>

          <h4 className="text-lg font-semibold text-black">Average Cost</h4>
          <h6>₹1,000 for two people (approx.)</h6>
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
            < MapView title='Mumbai Express' phno='7876578377' mapLocation={[13.926689626126564, 77.60037198127637]} address="57/1, 1st Floor, Jayalaxmi Chambers, Near Old Galaxy Theatre, Residency Road, Bangalore" />
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
          < MapView title='Mumbai Express' phno='7876578377' mapLocation={[13.926689626126564, 77.60037198127637]} address="57/1, 1st Floor, Jayalaxmi Chambers, Near Old Galaxy Theatre, Residency Road, Bangalore

"/>
        </aside>
      </div>
    </>
  );
};

export default Overview;
