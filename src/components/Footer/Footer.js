import React from "react";
import bgImage from "../../assets/footerBG.png";
import {
  FaClock ,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => (
  // style={{ backgroundImage: `url(${bgImage})`}}
  <footer className="relative py-20  bg-black/80">
    <div
      className="absolute bg-repeat bg-cover bg-center top-0 bottom-0 left-0 right-0 -z-10 "
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>

    <div className="container mx-auto text-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl text-center mb-10 font-bebas">
        WE ARE READY TO PROVIDE YOU THE BEST DINING EXPERIENCES
      </h2>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Opening Hours */}
        <div className="flex flex-col items-center">
          <FaClock  className="text-yellow-400 mb-2 text-2xl" />
          <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
          <p>Monday - Sunday</p>
          <p>9:00 AM to 11:30 PM</p>
        </div>

        {/* Let's Talk */}
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-yellow-400 mb-2 text-2xl" />
          <h3 className="font-semibold text-lg mb-1">Let's Talk</h3>
          <p>Phone: 1-800-222-4545</p>
          <p>Fax: 1-800-222-4545</p>
        </div>

        {/* Book a Table */}
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-yellow-400 mb-2 text-2xl" />
          <h3 className="font-semibold text-lg mb-1">Book a Table</h3>
          <p>Email: demo@website.com</p>
          <p>Support: support@website.com</p>
        </div>

        {/* Our Address */}
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-yellow-400 mb-2 text-2xl" />
          <h3 className="font-semibold text-lg mb-1">Our Address</h3>
          <p>123 Street, New York City</p>
          <p>United States of America</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-20">
        <a href="/" className="hover:bg-amber-400 hover:text-black p-2 md:p-3 md:text-xl border-solid border-2 rounded-full border-white hover:border-yellow-400 ">
          <FaFacebookF />
        </a>
        <a href="/" className="hover:bg-amber-400 hover:text-black p-2 md:p-3 md:text-xl border-solid border-2 rounded-full border-white hover:border-yellow-400">
          <FaTwitter />
        </a>
        <a href="/" className="hover:bg-amber-400 hover:text-black p-2 md:p-3 md:text-xl border-solid border-2 rounded-full border-white hover:border-yellow-400">
          <FaInstagram />
        </a>
        <a href="/" className="hover:bg-amber-400 hover:text-black p-2 md:p-3 md:text-xl border-solid border-2 rounded-full border-white hover:border-yellow-400">
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center mt-4">&copy; 2023 All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
