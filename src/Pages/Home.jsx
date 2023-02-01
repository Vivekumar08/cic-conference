import React from "react";
import bg from "../Assets/cic.png";
import du from "../Assets/du.png";
import cic from "../Assets/cic.jpeg";
import new_du from "../Assets/new_du.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="logos  flex h-14 justify-between w-1/4 lg:ml-48 ml-12 mt-24">
        <img src={du} alt="" />
        <img src={new_du} alt="" />
        <img src={cic} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col text-base lg:text-2xl lg:w-1/4 w-2/3 ml-auto mr-auto h-2 justify-center text-justify text-white  ">
        <p>
          Innovation in Higher Education through Public - Private - Partnership
          (PPP) Model
        </p>
        <p className="lg:text-lg text-sm mt-2">
          We invite you to be part of the intellectual community and contribute
          as paper presenter/ participant{" "}
        </p>
      </div>
      <div className="justify-around flex items-center h-6">
        <div className="items-center flex flex-col lg:flex-row">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            className="text-white "
          />
          <span className="ml-5 text-base lg:text-lg text-white">
            13th - 15th March 2023
          </span>
        </div>
        <div className="items-center flex lg:flex-row flex-col">
          <FontAwesomeIcon
            icon={faMapLocation}
            size="2x"
            className="text-white "
          />
          <span className="ml-5 text-base lg:text-lg text-white">
            Cluster Innovation Centre, Univarsity of Delhi, Delhi.
          </span>
        </div>
      </div>
      <div className="h-1 lg:ml-48 items-center flex flex-col lg:flex-row text-white">
        <p className="items-center flex flex-col lg:flex-row border-white border-4 mb-5  mx-2  px-2 py-1 rounded-lg ">
          <Link
            activeClass="active"
            className="cursor-pointer"
            smooth
            spy
            to="register"
          >
            Register for the Seminar
          </Link>
        </p>
        <p className="items-center flex flex-col lg:flex-row border-white border-4 mb-5 mx-2  px-2 py-1 rounded-lg ">
          <Link
            activeClass="active"
            className="cursor-pointer"
            smooth
            spy
            to="register"
          >
            Call for Papers
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
