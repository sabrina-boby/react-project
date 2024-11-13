import React, { useState } from 'react';
import video1 from "../../assets/Video.png";
import video2 from "../../assets/about-img.png";
import video3 from "../../assets/bg-form.png";
import customer1 from "../../assets/customer1.png";
import leafShape from "../../assets/leaf.png";
import quoteIcon from "../../assets/quote-icon.png";
import boxShape from "../../assets/red-small-box.png";
import nextIcon from "../../assets/angle-right.png";
import previousIcon from "../../assets/angle-left.png";
import dishPosiImg from "../../assets/dish.png";
import leafPosiImg from "../../assets/leaf-root.png";
import './Testimonial.css';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    { id: 1, video: video1, image: customer1, name: "Khalid Al Dawsry", address: "Jeddah, Saudi", quote: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it." },
    { id: 2, video: video2, image: customer1, name: "OG", address: "Jeddah, Saudi", quote: "Love You" },
    { id: 3, video: video3, image: customer1, name: "SB", address: "Jeddah, Saudi", quote: "Like You" },
  ];

  const previousTestimonial = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };
  
  const nextTestimonial = () => {
    setIndex((index + 1) % testimonials.length);
  };


  return (
    <section className="pt-10 pb-28 sm:py-28 bg-gray-100 relative">
      <div className="container mx-auto px-4 sm:px-10 relative">
        <div className="flex items-center gap-2 mb-4">
          <img src={boxShape} alt="Box Shape" />
          <h2 className="text-red-600 text-lg font-semibold">Crispy, Every Bite Taste</h2>
        </div>
        <h1 className="text-3xl sm:text-6xl sm:mb-8 uppercase font-bebas">What Some of Our Customers Say</h1>
        
        <div className="flex items-center justify-center">
          {/* Slider Content */}
          <div className="flex items-center flex-col-reverse sm:flex-row mt-6 w-full transition-transform duration-700 ease-in-out transform">
            <div className="test-slide-container flex flex-col justify-between bg-yellow-400 px-10 py-16 sm:p-20 w-full sm:w-5/12 h-full relative">
              <div>
                <img src={quoteIcon} alt="Quote Icon" className="w-4 h-4 mb-4" />
                <p className="text-lg font-light pl-4">{testimonials[index].quote}</p>
              </div>
              
              <div className="flex items-center justify-between  ml-10 pb-2 border-b border-black relative">
                <div >
                  <p className="font-bold">{testimonials[index].name}</p>
                  <p className="text-sm">{testimonials[index].address}</p>
                </div>
                <img src={testimonials[index].image} alt={testimonials[index].name} className="w-10 h-10" />
                <span className="absolute bottom-0 right-0 h-[2px] w-10 bg-red-600"></span>
              </div>
              <img src={leafShape} alt="Leaf Shape" className="absolute bottom-0 sm:bottom-16 left-0 w-10 h-16" />
            </div>

            <div className="test-slide-container sm:w-7/12" >
              <img src={testimonials[index].video} alt="Video Thumbnail" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-20 sm:top-6 sm:right-16 flex space-x-2">
            <button
              onClick={previousTestimonial}
              className="h-fit bg-white rounded-full py-5 px-6 shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              <img src={previousIcon} alt="Previous Icon"/>
            </button>
            <button
              onClick={nextTestimonial}
              className="h-fit bg-white rounded-full py-5 px-6 shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              <img src={nextIcon} alt="Next Icon"/>
            </button>
          </div>
        </div>
      </div>
      <img src={ dishPosiImg } className="hidden sm:block absolute top-36 left-0 w-28 "/>
      <img src={ leafPosiImg } className='hidden sm:block absolute bottom-16 right-0 w-56'/>
    </section>
  );
};

export default Testimonial;
