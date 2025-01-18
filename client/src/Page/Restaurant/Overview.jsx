import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCircleChevronRight } from "react-icons/fa6";
import Slider from 'react-slick';

// Components
import MenuCollection from '../../components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../components/Restaurant/MenuSimilarRestaurantCard';
import { PrevArrow, NextArrow } from '../../components/CarousalArrow';

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
      <div className="flex flex-col md:flex-row relative">
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
            <MenuCollection menuTitle="Menu" pages="2" image="https://shorturl.at/l7kby" />
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
        </div>

        {/* Sidebar */}
        <aside className="bg-white hidden md:block md:w-2/6 top-2 shadow-sm sticky h-fit"></aside>
      </div>
    </>
  );
};

export default Overview;
