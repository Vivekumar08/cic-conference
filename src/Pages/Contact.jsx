import React from "react";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { TechTeam } from "../Content";

const Contact = () => {
  return (
    <footer className="bg-[#8848ad]" id="contact">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="flex flex-col lg:flex-row w-full ml-auto mr-auto lg:justify-around">
            <div className="col col-md-4 mb-30 ml-12 lg:ml-0 mt-8 lg:mt-0">
              <div className="flex items-center pl-2 ">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="text-white"
                />
                <div>
                  <h4 className="text-white mb-1 font-bold text-base lg:text-xl ml-3 ">
                    Venue
                  </h4>
                </div>
              </div>
              <div className="cta-text text-[#e4e4e4]  text-sm">
                <span>
                  Conference Centre, University of Delhi (North Campus)
                </span>
              </div>
              <div className="mt-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0666973106718!2d77.20809291508382!3d28.687651382396112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd93bd399ceb%3A0xa3a8e12fd0707e77!2sConference%20Centre%2C%20University%20of%20Delhi%20(North%20Campus)!5e0!3m2!1sen!2sin!4v1678670217916!5m2!1sen!2sin"
                  //   width="600"
                  height="250"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="rounded-lg md:w-[400px] w-fit"
                  title="CIC"
                ></iframe>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30 ml-12 lg:ml-0 mt-8 lg:mt-0">
              <div className="flex items-center pl-2 ">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <div>
                  <h4 className="text-white mb-1 font-bold text-base lg:text-xl ml-3 ">
                    Contact Us
                  </h4>
                </div>
              </div>
              <div className=" flex cta-text flex-col text-[#c8c2c2]  text-sm">
                <span>
                  {" "}
                  <span className="text-white font-semibold">
                    Anurag Saini:{" "}
                  </span>{" "}
                  +91- 9891802557
                </span>{" "}
              </div>
              <div className="footer-social-icon mt-12">
                <span>Follow us</span>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/company/cluster-innovation-centre-university-of-delhi-education/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://twitter.com/CIC_DelhiUniv">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                {/* <a href="/">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a> */}
              </div>
              <div className="col  lg:ml-0 md:mt-20 mt-10 col-md-4 mb-30">
                <div className="flex items-center  ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-white"
                  />
                  <div>
                    <h4 className="text-white mb-1 font-bold text-base lg:text-xl ml-3 ">
                      For any query, feel free to mail us
                    </h4>
                  </div>
                </div>
                <div className="cta-text text-[#e4e4e4] text-sm ml-8 ">
                  <span>seminarppp2023@cic.du.ac.in</span>
                </div>
              </div>
            </div>
            {/* <div className=" mb-30"> */}
            <div className="footer-widget  ml-12 lg:ml-0 mt-8 lg:mt-0">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    className={`cursor-pointer`}
                    smooth
                    spy
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className={` cursor-pointer`}
                    smooth
                    spy
                    to="about"
                  >
                    Themes
                  </Link>
                </li>

                <li>
                  <Link
                    activeClass="active"
                    className={` cursor-pointer `}
                    smooth
                    spy
                    to="highlights"
                  >
                    Highlights
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className={`cursor-pointer`}
                    smooth
                    spy
                    to="speakers"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className={` cursor-pointer capitalize `}
                    smooth
                    spy
                    to="schedule"
                  >
                    schedule
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className={` cursor-pointer `}
                    smooth
                    spy
                    to="committee"
                  >
                    Committee
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className={` cursor-pointer`}
                    smooth
                    spy
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
            <div>
              <div className="footer-widget ml-8 lg:ml-0 mt-8 lg:mt-0">
                <div className="footer-widget-heading ml-4">
                  <h3>Tech Team</h3>
                </div>
                <div className="flex md:flex-col justify-evenly">
                  {TechTeam.map((title, i) => {
                    return (
                      <div
                        className="flex flex-col justify-center m-2 text-center"
                        key={i}
                      >
                        <img
                          alt={title.Name}
                          className="self-center flex-shrink-0 md:w-20 md:h-20 w-28 h-28 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                          src={title.img}
                        />
                        <p className="text-base text-white font-semibold leading-tight">
                          {title.Name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p className="items-center">
                  <span>Copyright &copy; 2023, All Right Reserved</span>
                  <a
                    href="http://cic.du.ac.in"
                    className="ml-1 hover:text-red-500 font-bold"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    CIC
                  </a>
                  <span className="flex md:justify-end justify-center md:mr-4 mr-5 ">
                    {" "}
                    Designed / Created by: -
                    <strong> Vivek Kumar & Priyanshu Sisodiya</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
