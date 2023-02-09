import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Shobha from "../Assets/Shobha_Bagai.jpg";
import Jyoti from "../Assets/jyoti_sharma.jpeg";
import Pankaj from "../Assets/Pankaj_tyagi.jpeg";

import React from "react";
import { CommitteeMembers } from "../Content";

const Committee = () => {
  return (
    <div
      className="h-fit flex flex-col justify-center items-center md:mb-12  md:mt-12"
      id="committee"
    >
      <div className="font-bold text-3xl md:text-5xl justify-center flex mt-12">
        Organizing Committee
      </div>
      <div class="inline-flex items-center justify-center mt-2 w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap-reverse justify-center">
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Shobha}
          />
          <p className="text-xl font-semibold leading-tight">
            Prof. Shobha Bagai
          </p>
          <p className="dark:text-gray-400">Chairperson</p>
          <p className="dark:text-gray-400">Cluster Innovation Centre</p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Jyoti}
          />
          <p className="text-xl font-semibold leading-tight">
            Prof. Jyoti Sharma
          </p>
          <p className="dark:text-gray-400">Convenor </p>
          <p className="dark:text-gray-400">National Seminar</p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Pankaj}
          />
          <p className="text-xl font-semibold leading-tight">
            Prof. Pankaj Tyagi
          </p>
          <p className="dark:text-gray-400">Convener Organizing Committee</p>
          <p className="dark:text-gray-400">National Seminar</p>
        </div>
      </div>
      <div className="font-bold text-2xl md:text-5xl justify-center text-center mx-10 flex mt-12">
        Organizing Committee Member
      </div>
      <div class="inline-flex items-center justify-center mt-2 w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {CommitteeMembers.map((title, i) => {
          return (
            <div
              className="flex flex-col justify-center m-8 text-center"
              key={i}
            >
              <img
                alt={title.Name}
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={title.img}
              />
              <p className="text-xl font-semibold leading-tight">{title.Name}</p>
            </div>
          );
        })}
        {/* <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Dorje}
          />
          <p className="text-xl font-semibold leading-tight">Dr. Dorje Dawa</p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={asani}
          />
          <p className="text-xl font-semibold leading-tight">
            Dr. Asani Bhaduri
          </p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Nirmal}
          />
          <p className="text-xl font-semibold leading-tight">
            Dr. Nirmal Yadav
          </p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Rai}
          />
          <p className="text-xl font-semibold leading-tight">Mrs. Shobha Rai</p>
        </div> */}
      </div>
    </div>
  );
};

export default Committee;
