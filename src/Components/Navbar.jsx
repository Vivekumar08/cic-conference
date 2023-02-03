import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './Nav.css'

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  });

  return (
    <nav
      className={` flex w-full justify-around items-center  fixed pt-2 px-5 z-50 ${
        colorChange ? "bg-white text-black" : "bg-transparent text-white"
      } `}
    >
      <div className="nine">
        <h1 className=" cursor-pointer capitalize ">
          <Link
            activeClass="active"
            className={`cursor-pointer font-Rubik ${
              colorChange ? " text-black text-[22px] glow_text" : " text-black md:text-[32px] text-[24px] glow"
            }`}
            smooth
            spy
            to="home"
          >
            National Seminar
          </Link>
        </h1>
      </div>
      <div className="lg:flex items-center hidden  font-bold md:gap-5 text-[12px]  md:text-[#3d3f44] md:text-base space-x-1 md:justify-between ">
        <Link
          activeClass="active"
          className={`cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="about"
        >
          About
        </Link>
        <Link
          activeClass="active"
          className={`cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="speakers"
        >
          Speakers
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="schedule"
        >
          Schedule
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="guidelines"
        >
          Guidelines
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="register"
        >
          Register
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${
            colorChange ? " text-black" : " text-white"
          }`}
          smooth
          spy
          to="contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
