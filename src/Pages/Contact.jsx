import React from "react";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <footer className="bg-slate-800" id="contact">
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
              <div className="cta-text  text-sm">
                <span>Cluster Innovation Centre, University of Delhi</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30 ml-12 lg:ml-0 mt-8 lg:mt-0">
              <div className="flex items-center pl-2 ">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <div>
                  <h4 className="text-white mb-1 font-bold text-base lg:text-xl ml-3 ">
                    Call Us
                  </h4>
                </div>
              </div>
              <div className="cta-text  text-sm">
                <span>+91- XXXXX-XXXXX</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget ml-12 lg:ml-0 mt-8 lg:mt-0">
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
                      About
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
                      className={` cursor-pointer`}
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
                      to="register"
                    >
                      Register
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
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5 ml-10 mr-10">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                {/* <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://i.postimg.cc/8kdzwwx4/pngwing-com.png"
                      className="img-fluid"
                      alt="logo"
                      style={{ height: "75px" }}
                    />
                  </a>
                </div> */}
                <div className="footer-text"></div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col  lg:ml-0 mt-8 lg:mt-5 col-md-4 mb-30">
              <div className="flex items-center  ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-white"
                />
                <div>
                  <h4 className="text-white mb-1 font-bold text-base lg:text-xl ml-3 ">
                    For any query, feel free mail us
                  </h4>
                </div>
              </div>
              <div className="cta-text text-sm ml-6 ">
                <span>seminarppp2023@cic.du.ac.in</span>
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
                <p>Copyright &copy; 2023, All Right Reserved CIC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
