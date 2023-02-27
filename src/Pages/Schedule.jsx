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
        <p className="font-bold text-5xl mt-12">Schedule</p>
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
                    className="custom-btn1 btn-13"
                    onClick={() => setDay_call(title.id)}
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
                cardWidth={520}
                focusActiveItemOnLoad
                // hideControls
                slideShow
                itemWidth={100}
                theme={{
                  primary: "blue",
                  secondary: "yellow",
                  cardBgColor: "#e4e4e4",
                  cardForeColor: "violet",
                  titleColor: "#000000",
                  titleColorActive: "blue",
                }}
                fontSizes={{
                  title: "1rem",
                }}
                items={Timeline_cont_day1}
              >
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Registration</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Inaugural Session</h3>
                  <p>
                    Chief Guest: Dr Jitendra Singh, MoS, Science and Technology
                  </p>
                  <p>Presided by Prof Balram Pani, Dean of Colleges, DU</p>
                  <p>Venue: Vice Regal Convention Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Lunch</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Plenary Session {"-"} I</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Workshop on Writing CSR proposals – I
                  </h3>
                  <p>Venue: Conference Centre/ Seminar Room CIC</p>
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
                // hideControls
                itemWidth={100}
                cardWidth={520}
                slideShow
                fontSizes={{
                  title: "0.8rem",
                }}
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
                  <h3 className="font-bold">Plenary Session – II</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Focused Group Discussion: Vision, Agenda, Concerns and Ideas
                    on PPP Model in Higher Education
                  </h3>
                  <h3 className="font-bold">
                    Oral presentation by participants
                  </h3>
                  <p>Venue: Conference Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Lunch</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Focused Group Discussion: Vision, Agenda, Concerns and Ideas
                    on PPP Model in Higher Education (Contd.)
                  </h3>
                  <h3 className="font-bold">
                    Poster presentation by participants
                  </h3>
                  <p>Venue: Conference Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Workshop on Writing CSR proposals – II
                  </h3>
                  <p>Venue: Conference Centre/ Seminar Room CIC</p>
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
                // hideControls
                itemWidth={100}
                cardWidth={520}
                slideShow
                fontSizes={{
                  title: "0.8rem",
                }}
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
                  <h3 className="font-bold">Plenary Session – III</h3>
                  <p>Venue: Conference Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Panel Discussion</h3>
                  <h3 className="font-bold">
                    Bridging the gap between Academia & Industry
                  </h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Lunch</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Best Practices from Industry and Academics
                  </h3>
                  <p>
                    Presentations by representatives from Industry and Academia
                  </p>
                  <p>Venue: Conference Centre</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Valedictory Address</h3>
                  <p>Chief Guest: Mr Vineet Joshi</p>
                  <p>Presided by: Prof. Yogesh Singh (Vice-Chancellor, DU)</p>
                  <p>Vice Regal Convention Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
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
