import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`bg-transparent flex w-full justify-between items-center fixed pt-2 px-5 z-50 `}
    >
      <div>
        <span className="md:text-[32px] cursor-pointer capitalize text-[24px]">
          <Link activeClass="active" className="cursor-pointer" smooth spy to="home">
            Seminar
          </Link>
        </span>
      </div>
      <div className="flex items-center font-bold md:gap-5 text-[12px]  md:text-[#3d3f44] md:text-base space-x-1 md:justify-between">
        <Link activeClass="active" className="cursor-pointer" smooth spy to="home">
          Home
        </Link>
        <Link activeClass="active" className="cursor-pointer" smooth spy to="about">
          About
        </Link>
        <Link activeClass="active" className="cursor-pointer" smooth spy to="schedule">
          schedule
        </Link>
        <Link activeClass="active" className="cursor-pointer" smooth spy to="contact">
          Contact
        </Link>
        <Link activeClass="active" className="cursor-pointer" smooth spy to="register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
