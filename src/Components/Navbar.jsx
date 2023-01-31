import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
      className={` flex w-full justify-around items-center fixed pt-2 px-5 z-50 ${
        colorChange ? "bg-white text-black" : "bg-transparent text-white"
      } `}
    >
      <div>
        <span className="md:text-[32px] cursor-pointer capitalize text-[24px]">
          <Link
            activeClass="active"
            className={`cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
            smooth
            spy
            to="home"
          >
            Seminar
          </Link>
        </span>
      </div>
      <div className="flex items-center font-bold md:gap-5 text-[12px]  md:text-[#3d3f44] md:text-base space-x-1 md:justify-between ">
        <Link
          activeClass="active"
          className={`cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
          smooth
          spy
          to="home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
          smooth
          spy
          to="about"
        >
          About
        </Link>
        <Link
          activeClass="active"
          className={`cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
          smooth
          spy
          to="speakers"
        >
          Speakers
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
          smooth
          spy
          to="schedule"
        >
          schedule
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
          smooth
          spy
          to="register"
        >
          Register
        </Link>
        <Link
          activeClass="active"
          className={` cursor-pointer ${colorChange ? " text-black" : " text-white"}`}
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
