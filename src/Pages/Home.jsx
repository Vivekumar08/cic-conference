import React from "react";
import bg from "../Assets/cic.png";
import du from "../Assets/du.png";
import cic from "../Assets/cic.jpeg";
import new_du from "../Assets/new_du.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";

import {
  faCalendarDays,
  faChevronDown,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="h-screen article w-full   "
      style={{
        backgroundImage: `url(${bg})`,
        // filter: "contrast(1.25) brightness(.5)",
      }}
      id="home"
    >
      {/* <img
        src={bg}
        alt="CIC Building"
        className="object-fill bg-blend-overlay h-screen w-full -z-50  opacity-60"
      /> */}
      <div className="logos  flex h-14 justify-between w-1/3 lg:ml-48 ml-12 mt-24">
        <img src={du} alt="" />
        <img src={new_du} alt="" />
        <img src={cic} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col text-base lg:text-2xl mb-5 md:mb-0 lg:w-2/3 w-2/3 ml-auto mr-auto h-6 justify-center text-justify text-white  ">
        <p>
          <Typewriter
            options={{
              strings: [
                "Innovation in Higher Education through Public - Private - Partnership (PPP) Model",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
              delay: 100,
            }}
          />
        </p>
        <p className="lg:text-lg text-sm mt-2">
          We invite you to be part of the intellectual community and contribute
          as paper presenter/ participant{" "}
        </p>
      </div>
      <div className=" flex flex-col justify-center ml-auto mr-auto w-2/3 mt-16 md:mt-2 md:mb-5 h-2">
        <div className="items-start md:items-center flex flex-col m-2  lg:flex-row">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            className="text-white "
          />
          <p className="md:ml-2 mt-2 text-sm lg:text-lg  text-white">
            13th - 15th March 2023
          </p>
        </div>
        <div className="items-start md:items-center flex lg:flex-row m-2 flex-col">
          <FontAwesomeIcon
            icon={faMapLocation}
            size="2x"
            className="text-white "
          />
          <span className="md:ml-5 mt-2 text-sm lg:text-lg text-white">
            Cluster Innovation Centre, Univarsity of Delhi, Delhi.
          </span>
        </div>
      </div>
      <div className="h-1 lg:ml-48 items-center flex flex-col lg:flex-row mt-5 text-white">
        <p className="items-center flex flex-col lg:flex-row  mb-5  mx-2  px-2 py-1 ">
          <Link
            activeClass="active"
            className="cursor-pointer custom-btn btn-5"
            smooth
            spy
            to="register"
          >
            <span className="p-2">Register for the Seminar</span>
          </Link>
        </p>
        <p className="items-center flex flex-col lg:flex-row mb-5 mx-2  px-2 py-1 ">
          <Link
            activeClass="active"
            className="cursor-pointer custom-btn btn-5 "
            smooth
            spy
            to="register"
          >
            <span className="p-2">Call for Papers</span>
          </Link>
        </p>
      </div>
      <div
        className="w-full  items-end bg-transparent flex   justify-center"
        style={{ filter: "none" }}
      >
        <div class="downArrow bounce items-center ">
          <Link
            activeClass="active"
            className="cursor-pointer"
            smooth
            spy
            to="about"
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              size="3x"
              className="text-white "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
