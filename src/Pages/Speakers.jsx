import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./speakers.css";
import yogesh from "../Assets/Yogesh_Singh_vc.jpg";
import jitendra from "../Assets/Union-Minister-Jitendra-Singh.jpg";
import shobha from "../Assets/Shobha_Bagai.jpg";
import { Tree, TreeNode } from "react-organizational-chart";

//Speakers
import jitender from "../Assets/speakers/jitender.jpg";
import dinesh_Prashad from "../Assets/speakers/dinesh_Prashad.jpg";
import balram from "../Assets/speakers/Balram_Pani.jpg";
import dinesh_singh from "../Assets/speakers/Dinesh_Singh.jpg";
import rajive from "../Assets/speakers/Rajive_Kumar.jpg";
import vinit from "../Assets/speakers/Vinit_Joshi.jpg";
import saroj from "../Assets/speakers/Saroj_sharma.jpg";
import nikhil_pant from "../Assets/speakers/Nikhil_pant.jpg";
import per_arne from "../Assets/speakers/Per_Arne_Winkstron.jpg";
import sonam_wangchuk from "../Assets/speakers/Sonam_Wangchuk.jpg";
import anirbun from "../Assets/speakers/Anirbun.jpg";
import alok_nikhil from "../Assets/speakers/Alok_Nikhil_Jha.jpg";

import { Speaker } from "../Content";
import styled from "@emotion/styled";
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
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
      <div className="flex sm:flex-row ml-6 gap-5 md:ml-0 justify-center flex-col ">
        <div className="w-52 h-3/4 p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
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
        <div className="w-52 h-3/4  p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
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
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Inaugural Session</StyledNode>}
        >
          <TreeNode label={<StyledNode>Keynote Speaker</StyledNode>}>
            <TreeNode
              label={
                <StyledNode>
                  <img
                    className=" h-48 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
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
          <TreeNode label={<StyledNode>Chief Guest</StyledNode>}>
            <TreeNode
              label={
                <StyledNode className="w-48 ">
                  <img
                    className=" h-48 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
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
          <TreeNode label={<StyledNode>Presided by</StyledNode>}></TreeNode>
        </Tree>
        <br />
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Plenary Speakers</StyledNode>}
        >
          <TreeNode
            label={
              <StyledNode className="w-48">
                <img
                  className=" h-48 aspect-square rounded-md object-cover object-center dark:bg-gray-500"
                  src={dinesh_singh}
                  alt={"Prof. Dinesh Singh"}
                />
                <a
                  href={"http://www.du.ac.in/hi/uploads/du/Faculty%20CV/Math_Dinesh_Singh.pdf"}
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
          >
            {/* <TreeNode label={<StyledNode>Grand Child</StyledNode>} /> */}
          </TreeNode>
          <TreeNode
            label={<StyledNode>Prof. Rajive Kumar</StyledNode>}
          ></TreeNode>
          <TreeNode
            label={<StyledNode>Dr. Per-Arne Wikström</StyledNode>}
          ></TreeNode>
          <TreeNode label={<StyledNode>Sonam Wangchuk</StyledNode>}></TreeNode>
        </Tree>
        <br />
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Invited Speakers</StyledNode>}
        >
          <TreeNode
            label={<StyledNode>Panel Discussion</StyledNode>}
          ></TreeNode>
          <TreeNode label={<StyledNode>Best Practices</StyledNode>}>
            <TreeNode
              label={<StyledNode>Dr. Anirbun Bandhopadhayay </StyledNode>}
            />
            <TreeNode label={<StyledNode>Dr. Alok Nikhil Jha</StyledNode>} />
          </TreeNode>
        </Tree>
        <br />
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Valedictory Session</StyledNode>}
        >
          <TreeNode label={<StyledNode>Guest of Honour</StyledNode>}>
            <TreeNode label={<StyledNode>Prof. Saroj Sharma</StyledNode>} />
          </TreeNode>
          <TreeNode label={<StyledNode>Chief Guest</StyledNode>}>
            <TreeNode label={<StyledNode>Mr. Vineet Joshi</StyledNode>} />
          </TreeNode>

          <TreeNode label={<StyledNode>Presided by</StyledNode>}>
            <TreeNode label={<StyledNode>Prof. Yogesh Singh</StyledNode>} />
          </TreeNode>
        </Tree>
      </div>
    </div>
  );
};

export default Speakers;
