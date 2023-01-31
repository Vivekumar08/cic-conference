import React from "react";
import bg from "../Assets/cic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="h-screen article w-full bg-gradient-to-tr from-gray-900 to-gray-600 "
      style={{ backgroundImage: `url(${bg})` }}
      id="home"
    >
      {/* <img
        src={bg}
        alt="CIC Building"
        className="object-fill bg-blend-overlay h-screen w-full -z-50  opacity-60"
      /> */}
      <div className="w-full bg-white flex justify-center">
        <div class="downArrow bounce  ">
          <Link activeClass="active" className="cursor-pointer" smooth spy to="about">
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
