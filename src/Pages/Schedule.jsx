import React, { useState } from "react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import {
  Dayz,
  Timeline_cont_day1,
  Timeline_cont_day2,
  Timeline_cont_day3,
} from "../Content";
import "./schedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

const Schedule = () => {
  const [day_call, setDay_call] = useState("Day 1");

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center  md:mt-12  font-marcellus  text-[#000]  "
        id="schedule"
      >
        <p className="font-bold text-5xl mt-12">Timeline</p>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <FontAwesomeIcon icon={faDiamond} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:gap-0">
          {Dayz.map((title, i) => {
            return (
              <>
                <div className="ml-5" key={i}>
                  <button
                    className="custom-btn btn-13"
                    onClick={() => setDay_call(title.day)}
                  >
                    {title.day}
                  </button>
                </div>
              </>
            );
          })}
        </div>
        {day_call === "Day 1" ? (
          <>
            <p className="font-bold text-2xl mt-10">Day 1</p>
            <div className="w-full h-fit ">
              <Chrono
                mode="VERTICAL_ALTERNATING"
                cardHeight={"auto"}
                focusActiveItemOnLoad
                hideControls
                itemWidth={100}
                cardWidth={300}
                theme={{
                  primary: "blue",
                  secondary: "yellow",
                  cardBgColor: "#e4e4e4",
                  cardForeColor: "violet",
                  titleColor: "#000000",
                  titleColorActive: "blue",
                }}
                fontSizes={{
                  title: "0.8rem",
                }}
                items={Timeline_cont_day1}
              >
                <div className="text-black">
                  <h3>Inaugural address</h3>
                </div>
                <div className="text-black">
                  <h3>Plenary session</h3>
                </div>
                <div className="text-black">
                  <h3>Lunch</h3>
                </div>
                <div className="text-black">
                  <h3>Presentations Individual / group </h3>
                </div>
                <div className="text-black">
                  <h3>Tea</h3>
                </div>
                <div className="text-black">
                  <h3>Presentations from Industry</h3>
                </div>
              </Chrono>
            </div>
          </>
        ) : (
          ""
        )}
        {day_call === "Day 2" ? (
          <>
            <p className="font-bold text-2xl mt-10">Day 2</p>
            <div className="w-full h-fit ">
              <Chrono
                mode="VERTICAL_ALTERNATING"
                cardHeight={"auto"}
                // focusActiveItemOnLoad
                hideControls
                itemWidth={100}
                cardWidth={300}
                theme={{
                  primary: "blue",
                  secondary: "yellow",
                  cardBgColor: "#e4e4e4",
                  cardForeColor: "violet",
                  titleColor: "#000000",
                  titleColorActive: "blue",
                }}
                items={Timeline_cont_day2}
              >
                <div className="text-black">
                  <h3>Plenary session</h3>
                </div>
                <div className="text-black">
                  <h3>High Tea</h3>
                </div>
                <div className="text-black">
                  <h3>Best Practices in PPPs</h3>
                </div>
                <div className="text-black">
                  <h3>Lunch</h3>
                </div>
                <div className="text-black">
                  <h3>Workshop on Writing CSR</h3>
                </div>
                <div className="text-black">
                  <h3>High Tea</h3>
                </div>
                <div className="text-black">
                  <h3>Workshop on Writing CSR</h3>
                </div>
              </Chrono>
            </div>
          </>
        ) : (
          ""
        )}
        {day_call === "Day 3" ? (
          <>
            <p className="font-bold text-2xl mt-10">Day 3</p>
            <div className="w-full h-fit ">
              <Chrono
                mode="VERTICAL_ALTERNATING"
                cardHeight={"auto"}
                // focusActiveItemOnLoad
                hideControls
                itemWidth={100}
                cardWidth={300}
                theme={{
                  primary: "blue",
                  secondary: "yellow",
                  cardBgColor: "#e4e4e4",
                  cardForeColor: "violet",
                  titleColor: "#000000",
                  titleColorActive: "blue",
                }}
                items={Timeline_cont_day3}
              >
                <div className="text-black">
                  <h3>
                    Panel Discussion <br />{" "}
                    <strong> Bridging Academia & Industry</strong>{" "}
                  </h3>
                </div>
                <div className="text-black">
                  <h3>Valedictory Address</h3>
                </div>
                <div className="text-black">
                  <h3>Lunch</h3>
                </div>
                <div className="text-black">
                  <h3>Focused Group Discussion</h3>
                </div>
              </Chrono>
            </div>
          </>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
};

export default Schedule;
