import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const data = [
  "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/5.jpg",
  "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/4.jpg",
  "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/3.jpg",
  "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/2.jpg",
  "https://phrcgxahoyzoocbzanju.supabase.co/storage/v1/object/public/sliderImages/1.jpg",
];

function Slider() {
  return (
    <div className="h-32">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        {data.map((image, index) => (
          <img className="" data-src={image} key={index}></img>
        ))}
      </AutoplaySlider>
    </div>
  );
}

export default Slider;
