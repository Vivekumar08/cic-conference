import React from "react";
import bg from "../Assets/cic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="h-screen article w-full   "
      style={{ backgroundImage: `url(${bg})`, filter: 'contrast(1.25) brightness(.5)' }}
      id="home"
    >
      {/* <img
        src={bg}
        alt="CIC Building"
        className="object-fill bg-blend-overlay h-screen w-full -z-50  opacity-60"
      /> */}
      <div className="w-full bg-transparent flex justify-center" style={{filter: 'none' }}>
        <div class="downArrow bounce items-center ">
          <Link activeClass="active" className="cursor-pointer" smooth spy to="about">
            <FontAwesomeIcon icon={faChevronDown} size="3x" className="text-white " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
