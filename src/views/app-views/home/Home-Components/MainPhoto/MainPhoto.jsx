import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import "./sliderMain.scss";

const MainPhoto = () => {
  return (
    <div className="main">
      <img
        className="hidden lg:block xl:block md:block"
        src="https://fitinc.in/cdn/shop/articles/BANNER-2_1024x.jpg?v=1680179126"
        alt="mainphoto"
      />
      <img
        className="lg:hidden xl:hidden md:hidden block"
        src="https://i5.walmartimages.com/asr/66e38776-e1df-4a1d-9115-dd681010dadb.a8990f3d51f427614ad8b35c91ce5da2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        alt="phonephoto"
      />
      <HeaderMain />
    </div>
  );
};

export default MainPhoto;
