import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getLatestProducts } from "../../utils/apiCalls";

const SliderComponent = ({ title, param }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      await getLatestProducts(dispatch, param);
    };
    fetchData();
  }, [dispatch, param]);

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
          slidesToShow: 2,
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
    <div className="mt-10 mb-10 lg:mt-20 lg:mb-20">
      <div className="flex justify-between items-center  mb-3">
        <span className="font-extrabold text-sm md:text-2xl">{title}</span>
        <div className="Slider-Buttons flex gap-1 items-center">
          <button
            className="flex items-center justify-center p-1 bg-gray-200 text-2xl rounded-full"
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className="flex items-center justify-center p-1 bg-gray-200 text-2xl rounded-full"
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {products.map((e, i) => (
          <div className="hover:opacity-70 duration-300 cursor-pointer" key={i}>
            <div
              key={i}
              className=" border border-gray-100 rounded-sm w-32 h-32 md:w-96 md:h-96 lg:w-96 lg:h-96 "
            >
              <img
                className="w-full h-full object-contain"
                src={e.imgs}
                alt={e?.desc}
              />
              <div className="image-description text-black mt-4 flex flex-col lg:flex-row text-sm lg:text-lg font-bold md:text-base   justify-around items-center ">
                <span className="">{e?.title}</span>
                <span>${e?.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
