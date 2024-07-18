import React, { useRef } from "react";
import Slider from "react-slick";
import "./SliderSecondary.scss";

const SliderSecondary = () => {
  // const [products, setProducts] = useState([]);
  const products = [
    {
      id: 1,
      img: "https://i.ebayimg.com/images/g/MkoAAOSwyk5jyq4a/s-l1200.webp",
      title: "Title",
      price: 20,
      desc: "sjjdsjd djdjf df dmfmmfmv ",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CUqUQcQiiTz0M7ELPWwX5CWu0lbBHvT895HWlC2K3g&s",
      title: "Title",
      price: 20,
      desc: "sjjdsjd djdjf df dmfmmfmv ",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LwAKU0P-Fxs74KtUrdavy3AY2jw2uooJoX_1zp4Rt6VpG-ujc_RcHLrgJ3-MHuTKVzk&usqp=CAUx",
      title: "Title",
      price: 20,
      desc: "sjjdsjd djdjf df dmfmmfmv ",
    },
  ];
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // useEffect(() => {
  //     const products = async () => {
  //       const res = await getProducts();
  //       setProducts(res);
  //     };
  //     products();
  //   }, []);

  return (
    <div className="mb-20">
      <div className="flex justify-between items-end mr-10 mb-3">
        <span className="sm:text-2xl">Latest on SPORTY-VERSE</span>
        <div className="Slider-Buttons">
          <button
            className="iconButton w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12"
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <i className="fa-solid fa-chevron-left text-sm lg:text-base md:text-lg" />
          </button>
          <button
            className="iconButton w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12"
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <i className="fa-solid fa-chevron-right text-sm lg:text-base md:text-lg" />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {products?.map((product) => (
          <div
            className="hover:opacity-70 duration-300 cursor-pointer"
            key={product.id}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-80 h-80 object-cover"
            />
            <div className="image-description mt-4 flex flex-col">
              <span className="text-red-500">{product?.title}</span>
              <div className="flex flex-col">
                <span>{product?.desc}</span>
                <span className="opacity-50">{product?.title}</span>
                <span className="mr-10 opacity-50">₺{product?.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSecondary;
