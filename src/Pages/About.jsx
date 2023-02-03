import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div className="h-fit flex flex-col mt-12 " id="about">
      <div className="font-bold text-5xl justify-center flex mt-12">About</div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className=" justify-center leading-normal text-justify ml-auto m-10 mr-auto w-3/4">
        <p className=" my-4">
          Cluster Innovation Centre, University of Delhi in association with
          Delhi Research Implementation and Innovation (DRIIV) - Effective
          Education (an initiative of the office of the Principal Scientific
          Adviser to the Govt. of India), is organizing a national seminar on
          Public Private Partnership (PPP) in Education. Individuals or groups
          from academia, research community and industry are invited to present
          their research work, field experiences, innovative pratices and
          theoretical positions related to Public Private Partnership (PPP) in
          Education.
        </p>
      </div>
      <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
        <p>Themes</p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
