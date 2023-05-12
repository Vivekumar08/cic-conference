import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./speakers.css";
import yogesh from "../Assets/Yogesh_Singh_vc.jpg";
// import jitendra from "../Assets/Union-Minister-Jitendra-Singh.jpg";
import shobha from "../Assets/Shobha_Bagai.jpg";
import jyoti from "../Assets/jyoti_sharma.jpeg";
import pankaj from "../Assets/Pankaj_tyagi.jpeg";
//Speakers

// import { Speaker } from "../Content";
import { Speaker } from "../Content";

const Speakers = () => {
  return (
    <div className="h-fit flex flex-col md:mt-12" id="speakers">
      <div className="font-bold md:text-4xl text-2xl justify-center flex mt-16">
        Patron & Organizing Members
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="flex sm:flex-row ml-20 gap-5 md:ml-0 sm:justify-center  flex-col ">
        <div className="sm:w-52 w-60 h-3/4 p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={yogesh}
            alt=""
            className="object-cover object-center  aspect-square  rounded-md h-52 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Patron
            </span>
            <h2 className="text-lg font-semibold tracking-wide">
              Prof. Yogesh Singh
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Vice-Chancellor, University of Delhi
          </p>
        </div>
        <div className="sm:w-52 w-60 h-3/4  p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={shobha}
            alt=""
            className="object-cover object-center aspect-square rounded-md h-52 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Chairperson
            </span>
            <h2 className="text-lg font-semibold tracking-wide">
              Prof. Shobha Bagai
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Director CIC, University of Delhi
          </p>
        </div>
        <div className="sm:w-52 w-60 h-3/4  p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={jyoti}
            alt=""
            className="object-cover object-center aspect-square rounded-md h-52 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Convenor
            </span>
            <h2 className="text-lg font-semibold tracking-wide">
              Prof. Jyoti Sharma
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Jt. Director CIC, University of Delhi
          </p>
        </div>
        <div className="sm:w-52 w-60 h-3/4  p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={pankaj}
            alt=""
            className="object-cover object-center aspect-square rounded-md h-52 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Convenor
            </span>
            <h2 className="text-lg font-semibold tracking-wide">
              Prof. Pankaj Tyagi
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Convenor, CIC, University of Delhi
          </p>
        </div>
      </div>
      <div className="font-bold md:text-4xl text-2xl justify-center flex mt-16 mb-5">
        Speakers
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className="w-4/5 ml-auto mr-auto flex gap-4 py-2 mt-8 overflow-x-auto h-80">
        {Speaker.map((title, i) => {
          return (
            <>
              <div className="flex flex-col h-28 aspect-video">
                <img
                  className=" h-48 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                  src={title.img}
                  alt={title.Name}
                />
                <a
                  href={title.Profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {title.Name}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {title.Desg}
                  </p>
                </a>
              </div>
            </>
          );
        })}
      </div>
      
    </div>
  );
};

export default Speakers;
