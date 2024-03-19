import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderHome() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const data = [
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/5.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/4.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/3.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/2.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/1.jpg",
  ];

  return (
    <div className="slider-container mb-8 px-8 ">
      <Slider {...settings}>
        {data.map((image, index) => {
          return <img src={image} alt="banner" className="h-60" key={index} />;
        })}
      </Slider>
    </div>
  );
}

export default SliderHome;
