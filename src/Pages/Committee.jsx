import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Shobha from "../Assets/Shobha_Bagai.jpg";
import Jyoti from "../Assets/jyoti_sharma.jpeg";
import Pankaj from "../Assets/Pankaj_tyagi.jpeg";
import Geetanjali from "../Assets/geetanjali_kala.jpeg";
import Dorje from "../Assets/dorje_dawa.jpeg";
import Nirmal from "../Assets/nirmal_yadav.jpeg";
import asani from "../Assets/asani_bhaduri.jpeg";
import Rai from "../Assets/shobha_rai.jpeg";

import React from "react";

const Committee = () => {
  return (
    <div className="h-fit " id="committee">
      <div className="font-bold text-5xl justify-center flex mt-12">
       Organizing Committee
      </div>
      <div class="inline-flex items-center justify-center w-full">
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
          <p className="dark:text-gray-400">Director</p>
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
      <div className="flex flex-row flex-wrap-reverse justify-center">
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Geetanjali}
          />
          <p className="text-xl font-semibold leading-tight">
            Dr. Gitanjali Kala
          </p>
          <p className="dark:text-gray-400">Organizing Committee Member</p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Dorje}
          />
          <p className="text-xl font-semibold leading-tight">Dr. Dorje Dawa</p>
          <p className="dark:text-gray-400">Organizing Committee Member</p>
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
          <p className="dark:text-gray-400">Organizing Committee Member</p>
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
          <p className="dark:text-gray-400">Organizing Committee Member</p>
        </div>
        <div className="flex flex-col justify-center m-8 text-center">
          <img
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
            src={Rai}
          />
          <p className="text-xl font-semibold leading-tight">Mrs. Shobha Rai</p>
          <p className="dark:text-gray-400">Organizing Committee Member</p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
