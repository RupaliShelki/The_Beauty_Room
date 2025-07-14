import React from "react";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <div className="w-full h-[100vh] bg-pink-100 flex justify-center items-center">
      <div
        className="w-[80%] h-[80vh] bg-center bg-cover bg-no-repeat rounded-xl relative "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute w-[57%] text-white bottom-[8%] right-0">
          <span className="text-2xl font-semibold block mb-2">
            Elevate Your Beauty with Expert Makeup Artistry
          </span>
          <p>
            Transform your look with Isabella's professional makeup services,
            tailored to enhance your natural beauty and create stunning,
            memorable styles for any occasion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
