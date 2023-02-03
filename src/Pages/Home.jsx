import React from "react";
import bg from "../Assets/cic.png";
import driv from "../Assets/Logo_DRIIV__1.png";
import cic from "../Assets/cic.jpeg";
import new_du from "../Assets/new_du.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Typewriter from "typewriter-effect";

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
      }}
      id="home"
    >
      <div className=" flex   justify-between w-4/5 ml-36 mt-12">
        <img src={new_du} alt="" className="h-28" />
        <img src={cic} alt="" className="rounded-md h-28" />
        <img src={driv} alt="" className="h-28 " />
      </div>
      <div className=" mr-auto ml-auto lg:w-4/5 text-justify flex flex-col text-white font-bold">
        <h1 className=" capitalize ml-auto mr-auto  md:text-[32px] text-[24px]">
          National Seminar
        </h1>
        <span className="font-semibold text-2xl flex justify-center ">on</span>
        {/* </div> */}
        {/* <div className="flex flex-col mb-5 md:mb-0  lg:w-4/5 ml-auto mr-auto text-justify text-white  "> */}
        <p className="font-bold lg:text-3xl">
          Innovation in Higher Education through Public - Private - Partnership
          (PPP) Model
        </p>
        <p className="lg:text-lg font-light text-sm mt-2">
          Cluster Innovation Centre, University of Delhi in association with
          Delhi Research Implementation and Innovation (DRIIV) - Effective
          Education (an initiative of the office of the Principal Scientific
          Adviser to the Govt. of India), is organizing a national seminar on
          Public Private Partnership (PPP) model in Higher Education. Individuals or groups
          from academia, research community and industry are invited to participate / present
          their research work, field experiences, innovative pratices and
          theoretical positions related to Public Private Partnership (PPP) model in Higher
          Education.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-between ml-auto mr-auto w-4/5 h-fit ">
        <div className="items-start md:items-center flex flex-col lg:flex-row">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            className="text-white "
          />
          <p className="md:ml-2  text-sm lg:text-lg  text-white">
            13th - 15th March 2023
          </p>
        </div>
        <div className="items-start md:items-center flex lg:flex-row m-2 flex-col">
          <FontAwesomeIcon
            icon={faMapLocation}
            size="2x"
            className="text-white "
          />
          <span className="md:ml-5  text-sm lg:text-lg text-white">
            Cluster Innovation Centre, University of Delhi, Delhi.
          </span>
        </div>
      </div>
      <div className="lg:ml-36 justify-between mr-32  gap-10 flex flex-col lg:flex-row text-white">
        <p className="items-center flex flex-col lg:flex-row  mb-5   py-1 ">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUb3HArSpehUoPc04CA99J24ECkDkkUx7nvcjo2yVyS81lqQ/viewform"
            className="custom-btn btn-5"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="p-2">Register for the Seminar</span>
          </a>
          <ul>
            <li></li>
          </ul>
        </p>
        <p className="items-center flex flex-col lg:flex-row mb-5  py-1 ">
          <a
            href="https://forms.gle/G51MAPTDvVAFgkPJ8"
            className="custom-btn btn-5"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="p-2">Call for Abstracts</span>
          </a>
          <ul>
            <li></li>
          </ul>
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
