import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/5.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/4.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/3.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/2.jpg",
    "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/1.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="">
      cbhds
    </div>
  );
}

export default Slider;
