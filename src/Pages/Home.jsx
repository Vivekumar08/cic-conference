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
      className="h-fit article w-full   "
      style={{
        backgroundImage: `url(${bg})`,
      }}
      id="home"
    >
      <div className=" flex justify-between w-4/5 ml-4 md:ml-auto mr-auto mt-12 gap-1">
        <img src={new_du} alt="" className="h-14  md:h-28  " />
        <img src={cic} alt="" className="h-16 rounded-md md:h-28" />
        <img src={driv} alt="" className="md:h-28 h-16" />
      </div>
      <div className=" mr-auto ml-auto lg:w-4/5 text-justify flex flex-col text-white font-bold">
        <h1 className=" capitalize ml-auto mr-auto  md:text-[32px] text-[24px]">
          National Seminar
        </h1>
        <span className="font-semibold text-2xl flex justify-center ">on</span>
        {/* </div> */}
        {/* <div className="flex flex-col mb-5 md:mb-0  lg:w-4/5 ml-auto mr-auto text-justify text-white  "> */}
        <p className="font-bold lg:text-3xl text-lg md:ml-0 ml-6 md:mr-0 mr-10">
          Innovation in Higher Education through Public - Private - Partnership
          (PPP) Model
        </p>
        <p className="lg:text-lg font-light text-sm mt-2 md:ml-0 ml-6 md:mr-0 mr-10">
          Cluster Innovation Centre, University of Delhi in association with
          Delhi Research Implementation and Innovation (DRIIV) - Effective
          Education (an initiative of the office of the Principal Scientific
          Adviser to the Govt. of India), is organizing a national seminar on
          Public Private Partnership (PPP) model in Higher Education.
          Individuals or groups from academia, research community and industry
          are invited to participate / present their research work, field
          experiences, innovative pratices and theoretical positions related to
          Public Private Partnership (PPP) model in Higher Education.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-between ml-auto mr-auto w-4/5 h-fit mt-8 ">
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
        <div className="items-start md:items-center flex lg:flex-row mt-2 md:m-2 flex-col">
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
      <div className="lg:ml-36 justify-between mr-32 mt-5 gap-10 flex flex-col lg:flex-row text-white">
        <p className="items-center flex flex-col   mb-5   py-1 ">
          <a
            href="https://forms.gle/G51MAPTDvVAFgkPJ8"
            className="custom-btn btn-5"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="p-2 md:ml-0 ml-1">Registration for Participation</span>
          </a>
          <ol className="bg-white rounded-lg list-decimal mt-3 md:m-2 ml-16 ">
            <p className="bg-[#662F87] rounded-t-md flex justify-center font-bold text-white">
              Registration Fee
            </p>
            <li className="text-sm text-[#444444] p-2 pl-4 ml-8  ">
              Teaching Faculty : Rs. 1500/- (Early bird registration: Rs.
              1200/-)
            </li>
            <li className="text-sm text-[#444444] p-2 pl-4 ml-8  ">
              Participant from Industry: Rs. 2500/- (Early bird registration:
              2000/-)
            </li>
            <li className="text-sm text-[#444444] p-2 pl-4 ml-8  ">
              Research Scholar/Students: Rs. 750/- (Early bird registration:
              600/-)
            </li>
            <p className="bg-[#662F87] rounded-md flex justify-center text-sm lg:text-base md:pl-0 pl-2  font-bold text-white">
              Early bird registration discount valid till 20th February 2023
            </p>
          </ol>
        </p>
        <div className="items-center flex flex-col  mb-5  py-1 ">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUb3HArSpehUoPc04CA99J24ECkDkkUx7nvcjo2yVyS81lqQ/viewform"
            className="custom-btn btn-5 "
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="p-2 px-10">Abstract Submission</span>
          </a>
          <ol className="bg-white rounded-lg list-decimal mt-3 w-4/5 md:m-2 ml-16">
            <p className="bg-[#662F87] rounded-t-md flex justify-center font-bold text-white">
              Guidelines
            </p>
            <li className="text-sm text-[#444444] p-2 pl-4 ml-8  ">
              Last date for abstract submission: 24th February 2023
            </li>
            <li className="text-sm text-[#444444] p-2 pl-4 ml-8  ">
              Registration is mandatory for all accepted abstracts
            </li>
            <li className="text-sm flex-wrap text-[#444444] p-2 pl-4 ml-8  ">
              Submit an abstract of max 500 words indicating the theme, title,
              objectives, methodology and findings
            </li>
          </ol>
        </div>
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
