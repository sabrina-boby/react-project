import React from "react";
import bannerImage from "../../assets/image1.png";
import offerTag from "../../assets/today-offer.png";
import flowerTag from "../../assets/flower.png";
import bgImage from "../../assets/Rectangle4.png";

const Banner = () => (
  <section
    className="bg-red-700 -mt-32 pb-5 sm:pb-32 pt-40 sm:pt-64 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="container mx-auto px-4 sm:px-10 sm:flex justify-between relative">
      <div className="text-white flex flex-col justify-center">
        <h1 className="sm:bg-gradient-to-r sm:z-20 from-transparent to-red-700/50 text-wrap sm:absolute top-11 left-0 text-5xl sm:text-[145px] sm:ml-10 uppercase sm:py-4 sm:pr-7 font-bebas">
          Taste The Authentic <br /> Saudi Cuisine
        </h1>
        <p className="text-xl sm:text-2xl my-6 sm:mb-10  sm:mt-96 text-wrap font-medium sm:w-9/12">
          Among the best saudi chefs in the world, serving you something beyond
          flavor
        </p>
        <button className="bg-yellow-400 mb-6 px-6 py-4 text-base text-black font-bold uppercase w-fit">
          Explore Menu
        </button>
      </div>
      <div className="relative">
        <img src={bannerImage} alt="Banner Image" className="relative my-10 sm:my-0 z-10" />
        <div className="absolute bottom-0 right-2 sm:-right-14 bg-yellow-400 rounded-full p-2 sm:z-20">
          <img src={offerTag} alt="Today Offer" className="w-14 sm:w-32" />
        </div>
        <img
          src={flowerTag}
          alt="Flower Tag"
          className="absolute sm:-top-7 sm:-right-6 -top-5 right-0  sm:z-20 "
        />
      </div>
    </div>
  </section>
);

export default Banner;
