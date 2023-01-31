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

const Contact = () => {
  return (
    <footer className="bg-slate-800" id="contact">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="flex row justify-around">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="flex items-center pl-[15px] ">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="text-white"
                />
                <div>
                  <h4 className="text-white mb-1 font-bold text-xl ml-3 ">
                    Venue
                  </h4>
                </div>
              </div>
              <div className="cta-text">
                <span>Cluster Innovation Centre, University of Delhi</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="flex items-center pl-[15px] ">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <div>
                  <h4 className="text-white mb-1 font-bold text-xl ml-3 ">
                    Call Us
                  </h4>
                </div>
              </div>
              <div className="cta-text">
                <span>+91- XXXXX-XXXXX</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="flex items-center pl-[15px] ">
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                <div>
                  <h4 className="text-white mb-1 font-bold text-xl ml-3 ">
                    Mail Us
                  </h4>
                </div>
              </div>
              <div className="cta-text">
                <span>seminarppp2023@cic.du.ac.in</span>
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
                <div className="footer-text">
                  <p>vndsns</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">about</a>
                  </li>
                  <li>
                    <a href="/">services</a>
                  </li>
                  <li>
                    <a href="/">portfolio</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Our Services</a>
                  </li>
                  <li>
                    <a href="/">Expert Team</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="">
                  <form action="/">
                    <label className="block">
                      <span className="mb-1 text-white">Email address</span>
                      <input
                        type="email"
                        placeholder="leroy@jenkins.com"
                        className="block w-1/3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800"
                      />
                    </label>
                    <button></button>
                  </form>
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
