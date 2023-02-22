import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./speakers.css";
import yogesh from "../Assets/Yogesh_Singh_vc.jpg";
import jitendra from "../Assets/Union-Minister-Jitendra-Singh.jpg";
import shobha from "../Assets/Shobha_Bagai.jpg";
import Dinesh from "../Assets/Dinesh_Singh.png";
import LS from "../Assets/LS_Shashidharan.jpg";
import Rajive from "../Assets/Prof_Rajive_Kumar.jpg";

const Speakers = () => {
  return (
    <div className="h-fit flex flex-col md:mt-12" id="speakers">
      <div className="font-bold md:text-4xl text-2xl justify-center flex mt-16">
        Chief Guests & Patron
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="flex md:flex-row ml-6 md:ml-0 justify-center flex-col ">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={jitendra}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Chief Guest
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Dr. Jitendra Singh
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Hon'ble Minister of State, <br /> Ministry of Science & Technology
            and Earth Sciences, Govt. of India
          </p>
        </div>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={yogesh}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Patron
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Prof. Yogesh Singh
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Vice-Chancellor, University of Delhi
          </p>
        </div>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={shobha}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Chairperson
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Prof. Shobha Bagai
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Director CIC, University of Delhi
          </p>
        </div>
      </div>
      <div className="font-bold md:text-4xl text-2xl justify-center flex mt-16">
        Speakers
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="w-4/5 ml-auto mr-auto flex gap-4 py-6 overflow-x-auto h-64">
        <div className="flex flex-col h-28 aspect-video">
          <img
            className=" h-48 aspect-square rounded-sm object-cover object-center dark:bg-gray-500"
            src={Dinesh}
            alt=" 1"
          />
          <h1 className="flex justify-center text-base md:text-xl font-bold ">
            Prof. Dinesh Singh
          </h1>
        </div>
        <div className="flex flex-col h-28 aspect-video">
          <img
            className="h-48 aspect-square rounded-sm object-cover object-center dark:bg-gray-500"
            src={LS}
            alt=" 1"
          />
          <h1 className="flex justify-center text-base md:text-xl font-bold ">
            Prof. L S Shashidhara
          </h1>
        </div>
        <div className="flex flex-col h-28 aspect-video">
          <img
            className=" h-48 aspect-square rounded-sm object-cover object-center dark:bg-gray-500"
            src={Rajive}
            alt=" 1"
          />
          <h1 className="flex justify-center text-base md:text-xl font-bold ">
            Prof. Rajive Kumar
          </h1>
        </div>
        <div className="flex flex-col h-28 aspect-video ">
          <h1 className="flex justify-center align-middle pt-16 text-base md:text-xl font-bold ">
            To be updated
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
