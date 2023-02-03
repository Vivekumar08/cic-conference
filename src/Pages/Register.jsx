import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Register = () => {
  return (
    <div className="h-fit flex flex-col justify-center items-center md:mb-12  md:mt-12" id="register">
      <div className="font-bold text-5xl justify-center flex mt-12">Register Here</div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="flex gap-7 md:mt-8 ">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUb3HArSpehUoPc04CA99J24ECkDkkUx7nvcjo2yVyS81lqQ/viewform" className="custom-btn btn-3 ">
          <span className="px-4 ">
            Registration for Oral / Poster Presentation
          </span>
        </a>
        <a href="https://forms.gle/G51MAPTDvVAFgkPJ8" className="custom-btn btn-3 ">
          <span className="px-4">Registration for Participants</span>
        </a>
      </div>
    </div>
  );
};

export default Register;
