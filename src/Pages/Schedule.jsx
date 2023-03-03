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
                  <h3 className="font-bold">Registration</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Inaugural Session (details of the Program)</h3>
                  <p>
                    Chief Guest: Dr Jitendra Singh, MoS, Science and Technology,
                    Govt. of India.
                  </p>
                  <p>
                    Guest of Honor: Prof. Dinesh Prasad Saklani, Director,
                    NCERT, Delhi.
                  </p>
                  <p>
                    Persided by: Prof. Balram Pani, Dean of Colleges, University
                    of Delhi.
                  </p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Lunch</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Plenary Session {"-"} I</h3>
                  <p>
                    Prof. Dinesh Singh, Former Vice Chancellor, University of
                    Delhi.
                  </p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Workshop on Writing CSR proposals – I
                  </h3>
                  <p className=" flex text-justify">
                    Mr. Nikhil Pant, Former Chief of Program Executive, National
                    Foundation for CSR, IICA, Ministry of Corporate Affairs
                    Govt. of India.
                  </p>
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
                  <p>Prof. Rajive Kumar, Member Secretary, AICTE, Delhi.</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Plenary Session – III</h3>
                  <p>
                    Dr. Per-Arne-Wikstrom, Counsellor- Innovation & Science
                    Embassy of Sweden.
                  </p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Focused Group Discussion: Vision, Agenda, Concerns and Ideas
                    on PPP Model in Higher Education.
                  </h3>
                  <hr class="h-px my-2 bg-gray-800 border-0"></hr>
                  <h3 className="font-bold">
                    Oral presentation by participants
                  </h3>
                  <p>Venue: Conference Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Lunch</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Plenary Session - IV</h3>
                  <p>Sonam Wangchuk, Innovator & Education Reformist.</p>
                  <hr class=" my-2 h-px  bg-gray-800 border-0"></hr>
                  <h3 className="font-bold">
                    Oral presentation by participants
                  </h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">
                    Workshop on Writing CSR proposals – II
                  </h3>
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
                  <div>
                    <h3 className="font-bold">Plenary Session – V</h3>
                    <p>Prof. L.S. Shashidhara, ISEAR, Pune.</p>
                  </div>
                  <hr class=" my-2 h-px  bg-gray-800 border-0"></hr>

                  <h3 className="font-bold">Poster | Showcasing</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Tea</h3>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Panel Discussion</h3>
                  <p>Bridging the gap between Academia & Industry</p>
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
                </div>
                <div className="text-black">
                  <h3 className="font-bold">Valedictory Address</h3>
                  <p>Chief Guest: Mr Vineet Joshi, Controller NTA.</p>
                  <p>
                    Guest of Honor: Prof. Saroj Sharma Joshi, Chairperson, NIOS,
                    Delhi.
                  </p>
                  <p>
                    Presided by: Prof. Yogesh Singh (Vice-Chancellor, University
                    of Delhi).
                  </p>
                  <p>Venue: Conference Centre, DU</p>
                </div>
                <div className="text-black">
                  <h3 className="font-bold">High Tea</h3>
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
