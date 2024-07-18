import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CustomSlider = ({ heading, options }) => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" w-full h-full relative">
        <span className="sm:text-2xl">{heading}</span>
        <button
          className="absolute z-20 top-2/4 left-0 lg:left-5 flex items-center justify-center p-1 bg-gray-300 text-2xl rounded-full"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          className="absolute z-20 top-2/4 right-0 lg:right-5 flex items-center justify-center p-1 bg-gray-300 text-2xl rounded-full"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {options.map((e) => (
            <div
              className=" hover:opacity-70 duration-300 cursor-pointer"
              key={e.Id}
            >
              <Link to="/products/65fbb99464b2ecd4c5671328">
                <div
                  key={e.Id}
                  className=" w-32 h-32 md:w-96 md:h-96 lg:w-96 lg:h-96 m-1 border border-gray-100 rounded-sm"
                >
                  <img
                    className="w-full h-full object-contain"
                    src={e.Image}
                    alt={e.Desc}
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CustomSlider;
