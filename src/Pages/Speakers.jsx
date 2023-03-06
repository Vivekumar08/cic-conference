import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./speakers.css";
import yogesh from "../Assets/Yogesh_Singh_vc.jpg";
import jitendra from "../Assets/Union-Minister-Jitendra-Singh.jpg";
import shobha from "../Assets/Shobha_Bagai.jpg";
import { Tree, TreeNode } from "react-organizational-chart";

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
      <div>
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Inaugural Session</StyledNode>}
        >
          <TreeNode label={<StyledNode>Keynote Speaker</StyledNode>}>
            <TreeNode
              label={<StyledNode>Prof. Dinesh Prashad Saklani</StyledNode>}
            />
          </TreeNode>
          <TreeNode label={<StyledNode>Chief Guest</StyledNode>}>
            <TreeNode
              label={<StyledNode>Dr.Jitendra Singh</StyledNode>}
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
          <TreeNode label={<StyledNode>Prof. Dinesh Singh</StyledNode>}>
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
