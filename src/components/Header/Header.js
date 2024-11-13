
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import bgImage from "../../assets/Rectangle4.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitor scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 px-4 py-3 z-20 text-white bg-no-repeat bg-cover bg-center transition-all duration-300 ${
        isScrolled ? "bg-red-700" : "bg-transparent"
      }`}
      style={isScrolled ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="container mx-auto  px-0 sm:px-10 flex justify-between items-center">
        <div className="flex justify-between w-full sm:w-0">
          {/* Logo Section */}
          <div className="flex gap-1 items-center">
            <img src={logo} alt="Logo" className="w-6 h-6" />
            <h1 className="text-2xl font-semibold">
              Restau<span className="font-medium">rant</span>
            </h1>
          </div>

          {/* Hamburger Icon / Cross Icon */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              // Cross Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu with Smooth Transition */}
        <nav
          className={`${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } absolute top-14 left-0 w-[600px] overflow-hidden transition-all duration-500 ease-in-out bg-red-700 md:static md:block md:max-h-full md:opacity-100 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-normal md:bg-transparent">
            <li className="py-2 md:py-0 md:px-4 pl-6 hover:bg-yellow-400 hover:text-slate-950"><a href="/">Home</a></li>
            <li className="py-2 md:py-0 md:px-4 pl-6 hover:bg-yellow-400 hover:text-slate-950"><a href="/">About</a></li>
            <li className="py-2 md:py-0 md:px-4 pl-6 hover:bg-yellow-400 hover:text-slate-950"><a href="/">Portfolio</a></li>
            <li className="py-2 md:py-0 md:px-4 pl-6 hover:bg-yellow-400 hover:text-slate-950"><a href="/">Clients</a></li>
            <li className="py-2 md:py-0 md:px-4 pl-6 hover:bg-yellow-400 hover:text-slate-950"><a href="/">Blog</a></li>
            <li className="py-2 md:py-0 md:px-4 pl-6 hover:bg-yellow-400 hover:text-slate-950"><a href="/">Contact</a></li>
          </ul>
        </nav>

        {/* Book A Table Button */}
        <button className="hidden md:block bg-yellow-400 px-4 py-2 text-nowrap text-base text-black font-semibold uppercase">
          Book A Table
        </button>
      </div>
    </header>
  );
};

export default Header;
