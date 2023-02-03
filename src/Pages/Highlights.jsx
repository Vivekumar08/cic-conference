import React from "react";

const Highlights = () => {
  return (
    <div className="h-fit flex flex-col mt-12 mb-5" id="highlights">
        <span className="mt-12"></span>
      <div className="rounded-2xl shadow-md flex flex-col justify-center ml-auto mr-auto md:w-1/2 w-3/4 dark:bg-gray-900 dark:text-gray-100">
        <h3 className="md:text-2xl text-lg w-full flex justify-center rounded-t-2xl h-16 items-center  font-bold text-white bg-[#662F87]">

          Highlights of Seminar
        </h3>
        <ol className="list-decimal p-5 flex flex-col ml-16 md:text-lg text-base  font-semibold m-3">
          <li className="mt-1">
            Plenary Speakers Session
          </li>
          <li className="mt-2">Focused Group Discussion</li>
          <li className="mt-2">
           Panel Discussion 
          </li>
          <li className="mt-2">
            Presentation from academia & Industry
          </li>
          <li className="mt-2">
            Presentation on best practices on PPP model
          </li>
          <li className="mt-2">Workshop</li>
        </ol>
      </div>
    </div>
  );
};

export default Highlights;
