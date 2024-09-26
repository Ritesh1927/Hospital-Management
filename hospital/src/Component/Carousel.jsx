import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Doc1 from "../assets/Images/Doc1.jpg";
function MultipleItems() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <h1 className="feedback-heading text-center mb30">
        What Our Client’s Say
      </h1>
      <Slider {...settings}>
        <div className="carousel-cards-wrapper mr10">
          <div className="img-wrapper-carousel">
            <img src={Doc1} alt="" />
          </div>
          <p className="coustmer-name ">User Name</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloribus facilis deleniti velit provident consequatur beatae omnis
            eaque atque. Minus ratione neque consectetur exercitationem, illum
            esse beatae porro ipsum. Veniam!
          </p>
        </div>
        <div className="carousel-cards-wrapper">
          <div className="img-wrapper-carousel">
            <img src={Doc1} alt="" />
          </div>
          <p className="coustmer-name ">User Name</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloribus facilis deleniti velit provident consequatur beatae omnis
            eaque atque. Minus ratione neque consectetur exercitationem, illum
            esse beatae porro ipsum. Veniam!
          </p>
        </div>
        <div className="carousel-cards-wrapper">
          <div className="img-wrapper-carousel">
            <img src={Doc1} alt="" />
          </div>
          <p className="coustmer-name ">User Name</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloribus facilis deleniti velit provident consequatur beatae omnis
            eaque atque. Minus ratione neque consectetur exercitationem, illum
            esse beatae porro ipsum. Veniam!
          </p>
        </div>
        <div className="carousel-cards-wrapper">
          <div className="img-wrapper-carousel">
            <img src={Doc1} alt="" />
          </div>
          <p className="coustmer-name ">User Name</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloribus facilis deleniti velit provident consequatur beatae omnis
            eaque atque. Minus ratione neque consectetur exercitationem, illum
            esse beatae porro ipsum. Veniam!
          </p>
        </div>
        <div className="carousel-cards-wrapper">
          <div className="img-wrapper-carousel">
            <img src={Doc1} alt="" />
          </div>
          <p className="coustmer-name ">User Name</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloribus facilis deleniti velit provident consequatur beatae omnis
            eaque atque. Minus ratione neque consectetur exercitationem, illum
            esse beatae porro ipsum. Veniam!
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
