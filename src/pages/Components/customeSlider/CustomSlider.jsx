import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../../cards/cards";

const CustomSlider = ({ slides,clickLink }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0.1,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Cards img={slide.img} title={slide.title} clickLink={clickLink}></Cards>
        // <div key={index}>
        //   <img src={slide.img} alt="hi" style={{ width: "80%" }} />
        // </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
