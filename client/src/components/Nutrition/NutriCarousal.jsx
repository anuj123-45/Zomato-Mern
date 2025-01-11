import React from "react";
import Slider from "react-slick";

import NutriCarousalCard from "./NutriCarousalCard";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const NutritionCarousal = () => {
  const categories = [
    {
      image:
        "https://m.media-amazon.com/images/I/61Le0NNy8FL._AC_UL320_.jpg",
      title: "Protien & Fitness",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
      title: "Sleep & stress",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
      title: "Digestion & weight Loss",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61thd9b7y0L._AC_UL320_.jpg",
      title: "Omegas & CoQ10",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71Eiv2E409L._AC_UL320_.jpg",
      title: "Beauty & Skin Care",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61m+7FggZhL._AC_UY218_.jpg",
      title: "Immunity & Bones",
    },
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <NutriCarousalCard {...food} />
        ))}
      </div>

      <div className="hidden  lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <NutriCarousalCard {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NutritionCarousal;