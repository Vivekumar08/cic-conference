// import { faDiamond } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div className="h-fit flex flex-col mt-12 " id="about">
      <span className="mt-12"></span>
      {/* <div className="font-bold text-5xl justify-center flex mt-12">About</div>
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
      </div> */}
      <div className="rounded-2xl shadow-md flex flex-col justify-center ml-auto mr-auto md:w-1/2 w-3/4  dark:bg-gray-900 dark:text-gray-100">
        <h3 className="text-2xl w-full flex justify-center rounded-t-2xl h-16 items-center  font-bold text-white bg-[#662F87]">
          Themes for Seminar
        </h3>
        <ul className="list-disc p-5 flex flex-col ml-auto mr-auto md:text-lg text-base  font-semibold m-3">
          <li className="mt-1">
            Emerging models, research and practices of PPP in education
          </li>
          <li className="mt-2">NEP 2020 and PPP in higher education</li>
          <li className="mt-2">
            Issues and challenges in India for PPP in education
          </li>
          <li className="mt-2">
            Global best practices of PPP model in education
          </li>
          <li className="mt-2">
            Exemplar case studies of PPP Model in sectors other than education
          </li>
          <li className="mt-2">Educational innovations through PPP</li>
          <li className="mt-2">SDGs and PPP in Education</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
