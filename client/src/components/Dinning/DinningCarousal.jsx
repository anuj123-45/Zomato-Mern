import React from 'react'
import PictureCarousalCard from '../PictureCarousalCard'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from "../CarousalArrow";


function DinningCarousal() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <>

            <div className='w-full'>
                <Slider {...settings}>
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                </Slider>
            </div>
        </>
    )
}

export default DinningCarousal