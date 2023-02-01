import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./speakers.css";
const Speakers = () => {
  return (
    <div className="h-fit  flex-col justify-center gap-10" id="speakers">
      <div>
        <div className="font-bold lg:text-4xl text-2xl justify-center flex mt-12">
          Chief Guests & Speakers
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <FontAwesomeIcon icon={faDiamond} />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row ml-6 lg:ml-0 justify-center flex-col ">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Hon'ble Minister of State
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Dr. Jitendra Singh
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Ministry of Science & Technology and Earth Sciences
          </p>
        </div>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Vice-Chancellor of University of Delhi
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Prof. Yogesh Singh
            </h2>
          </div>
          <p className="dark:text-gray-100">
          Vice-Chancellor of University of Delhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
