import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./speakers.css";
import yogesh from "../Assets/Yogesh_Singh_vc.jpg";
// import jitendra from "../Assets/Union-Minister-Jitendra-Singh.jpg";
import shobha from "../Assets/Shobha_Bagai.jpg";
import { Tree, TreeNode } from "react-organizational-chart";
import jyoti from "../Assets/jyoti_sharma.jpeg";
import pankaj from "../Assets/Pankaj_tyagi.jpeg";
//Speakers
import jitender from "../Assets/speakers/jitender.jpg";
import dinesh_Prashad from "../Assets/speakers/dinesh_Prashad.jpg";
import balram from "../Assets/speakers/Balram_Pani.jpg";
import dinesh_singh from "../Assets/speakers/Dinesh_Singh.jpg";
import rajive from "../Assets/speakers/Rajive_Kumar.jpg";
import vinit from "../Assets/speakers/Vinit_Joshi.jpg";
import saroj from "../Assets/speakers/Saroj_sharma.jpg";
// import nikhil_pant from "../Assets/speakers/Nikhil_pant.jpg";
import per_arne from "../Assets/speakers/Per_Arne_Winkstron.jpg";
import sonam_wangchuk from "../Assets/speakers/Sonam_Wangchuk.jpg";
import anirbun from "../Assets/speakers/Anirbun.jpg";
import alok_nikhil from "../Assets/speakers/Alok_Nikhil_Jha.jpg";

// import { Speaker } from "../Content";
import styled from "@emotion/styled";
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;

  display: inline-block;
  border: 1px solid red;
  flex-direction: row;
  @media screen and (min-width: 415px) {
    .panel {
      flex-direction: column;
    }
  }
`;
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
      {/* <div className="w-4/5 ml-auto mr-auto flex gap-4 py-2 mt-8 overflow-x-auto h-80">
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
      </div> */}
      <div className="my-2 py-2">
        <Tree
          lineWidth={"2px"}
          lineColor={"#662F87"}
          lineBorderRadius={"10px"}
          label={
            <StyledNode className="font-bold">Inaugural Session</StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode className="font-bold">Keynote Speaker</StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode className="sm:w-48 w-28">
                  <img
                    className=" sm:h-48 h-24 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={dinesh_Prashad}
                    alt={"Prof. Dinesh Prashad Saklani"}
                  />
                  <a
                    href={
                      "https://ncert.nic.in/pdf/biodata/Biodata_Prof_D_P_Saklani.pdf"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Prof. Dinesh Prashad Saklani"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Director, NCERT, Delhi"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
          </TreeNode>
          <TreeNode
            label={<StyledNode className="font-bold">Chief Guest</StyledNode>}
          >
            <TreeNode
              label={
                <StyledNode className="sm:w-48 w-28 ">
                  <img
                    className=" sm:h-48 h-24 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={jitender}
                    alt={"Dr.Jitendra Singh"}
                  />
                  <a
                    href={"https://www.moes.gov.in/about-us/Meet-our-Minister"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Dr.Jitendra Singh"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {
                        "Minister of State, Ministry of Science & Tech, Government of India"
                      }
                    </p>
                  </a>
                </StyledNode>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={<StyledNode className="font-bold">Presided by</StyledNode>}
          >
            <TreeNode
              label={
                <StyledNode className="sm:w-48 w-28 ">
                  <img
                    className=" sm:h-48 h-24 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={balram}
                    alt={"Prof. Balram Pani"}
                  />
                  <a
                    href={
                      "http://bcas.du.ac.in/wp-content/uploads/2019/12/FACULTY-PROFILE-Dr-Balaram-Pani-1.pdf"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Prof. Balram Pani"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Dean Colleges, University of Delhi"}
                    </p>
                  </a>
                </StyledNode>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
        <br />
        <Tree
          lineWidth={"2px"}
          lineColor={"#662F87"}
          lineBorderRadius={"10px"}
          label={
            <StyledNode className="font-bold">Plenary Speakers</StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode className="sm:w-48 w-20">
                <img
                  className=" sm:h-48 h-20 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                  src={dinesh_singh}
                  alt={"Prof. Dinesh Singh"}
                />
                <a
                  href={
                    "http://www.du.ac.in/hi/uploads/du/Faculty%20CV/Math_Dinesh_Singh.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Prof. Dinesh Singh"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {"Former Vice Chancellor, University of Delhi"}
                  </p>
                </a>
              </StyledNode>
            }
          ></TreeNode>
          <TreeNode
            label={
              <StyledNode className="sm:w-48 w-24">
                {" "}
                <img
                  className=" sm:h-48 h-24 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                  src={rajive}
                  alt={"Prof. Rajive Kumar"}
                />
                <a
                  href={"https://hindi.aicte-india.org/node/74"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Prof. Rajive Kumar"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {"Member Secretary,AICTE, Delhi"}
                  </p>
                </a>
              </StyledNode>
            }
          ></TreeNode>
          <TreeNode
            label={
              <StyledNode className="sm:w-48 w-20">
                <img
                  className=" sm:h-48 h-20 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                  src={per_arne}
                  alt={"Dr. Per-Arne Wikström"}
                />
                <a
                  href={"https://se.linkedin.com/in/perarnewikstrom"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Dr. Per-Arne Wikström"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {
                      "Head of Office of Science & Innovation, Embassy of Sweden"
                    }
                  </p>
                </a>
              </StyledNode>
            }
          ></TreeNode>
          <TreeNode
            label={
              <StyledNode className="sm:w-48 w-20">
                {" "}
                <img
                  className=" sm:h-48 h-20 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                  src={sonam_wangchuk}
                  alt={"Sonam Wangchuk"}
                />
                <a
                  href={
                    "https://www.linkedin.com/in/wangchuksworld/?originalSubdomain=in"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Sonam Wangchuk"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {"Innovator and Education Reformist"}
                  </p>
                </a>
              </StyledNode>
            }
          ></TreeNode>
        </Tree>
        <br />
        <Tree
          lineWidth={"2px"}
          lineColor={"#662F87"}
          lineBorderRadius={"10px"}
          label={
            <StyledNode className="font-bold">Invited Speakers</StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode className="font-bold">Panel Discussion</StyledNode>
            }
          >
            {" "}
            <TreeNode
              class="panel"
              label={
                <StyledNode>
                  {/* <a href={""} target="_blank" rel="noopener noreferrer"> */}
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Prof Ashutosh Bhardwaj"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {"University of Delhi"}
                  </p>
                  {/* </a> */}
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  <a
                    href={"https://www.linkedin.com/in/tarun-singhal-2a61873/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Mr Tarun Singhal"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"VP and Head of Engineering and R&D at Hughes Systique"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  {/* <a href={""} target="_blank" rel="noopener noreferrer"> */}
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Dr Pradeep"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {""}
                  </p>
                  {/* </a> */}
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  {/* <a href={""} target="_blank" rel="noopener noreferrer"> */}
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Ms. Shipra Mishra"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {""}
                  </p>
                  {/* </a> */}
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  <a
                    href={
                      "https://www.icfi.nl/people/prof-dr-saradindu-bhaduri"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Prof. Saradindu Bhaduri, JNU"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Centre for Studies in Science Policy, JNU"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  {/* <a href={""} target="_blank" rel="noopener noreferrer"> */}
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Prof Biswal"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {"Professor, CIC,DU"}
                  </p>
                  {/* </a> */}
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  {/* <a href={""} target="_blank" rel="noopener noreferrer"> */}
                  <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                    {"Mr Anirban"}
                  </h1>
                  <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                    {""}
                  </p>
                  {/* </a> */}
                </StyledNode>
              }
            />
          </TreeNode>

          <TreeNode
            label={
              <StyledNode className="font-bold">Best Practices</StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode className="w-48">
                  {" "}
                  <img
                    className=" h-48 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={anirbun}
                    alt={"Dr. Anirbun Bandhopadhayay"}
                  />
                  <a
                    href={
                      "https://university.kiss.ac.in/team/dr-anirban-bandyopadhyay/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Dr. Anirbun Bandhopadhayay"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {""}
                    </p>
                  </a>
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  <a
                    href={
                      "https://www.linkedin.com/in/purusharth-singh-951736a/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Mr Purusharth Singh"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Partner Kochar and Co."}
                    </p>
                  </a>
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode className="w-48">
                  {" "}
                  <img
                    className=" h-48 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={alok_nikhil}
                    alt={"Dr. Alok Nikhil Jha"}
                  />
                  <a
                    href={
                      "https://www.linkedin.com/in/aloknikhil/?originalSubdomain=in"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Dr. Alok Nikhil Jha"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"IIIT Delhi"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
          </TreeNode>
        </Tree>
        <br />
        <Tree
          lineWidth={"2px"}
          lineColor={"#662F87"}
          lineBorderRadius={"10px"}
          label={
            <StyledNode className="font-bold">Valedictory Session</StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode className="font-bold">Guest of Honour</StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode className="sm:w-48 w-28">
                  {" "}
                  <img
                    className=" sm:h-48 h-32 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={saroj}
                    alt={"Prof. Saroj Sharma"}
                  />
                  <a
                    href={
                      "https://nios.ac.in/about-us/staff-list/brief-profile-prof-saroj-sharma.aspx"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Prof. Saroj Sharma"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Chairperson, National Institute of Open Schooling"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
          </TreeNode>
          <TreeNode
            label={<StyledNode className="font-bold">Chief Guest</StyledNode>}
          >
            <TreeNode
              label={
                <StyledNode className="sm:w-48 w-28">
                  {" "}
                  <img
                    className=" sm:h-48 h-32 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={vinit}
                    alt={"Mr. Vineet Joshi"}
                  />
                  <a
                    href={"https://en.wikipedia.org/wiki/Vineet_Joshi"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Mr. Vineet Joshi"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Director General of National Testing Agency"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
          </TreeNode>

          <TreeNode
            label={<StyledNode className="font-bold">Presided by</StyledNode>}
          >
            <TreeNode
              label={
                <StyledNode className="sm:w-48 w-28">
                  <img
                    className=" sm:h-48 h-32 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                    src={yogesh}
                    alt={"Prof. Yogesh Singh"}
                  />
                  <a
                    href={"http://www.du.ac.in/index.php?page=vice-chancellor"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="flex justify-center text-sm md:text-sm font-bold ">
                      {"Prof. Yogesh Singh"}
                    </h1>
                    <p className="text-xs text-justify text-blue-800 font-semibold flex justify-center">
                      {"Vice Chancellor, University of Delhi"}
                    </p>
                  </a>
                </StyledNode>
              }
            />
          </TreeNode>
        </Tree>
      </div>
    </div>
  );
};

export default Speakers;
