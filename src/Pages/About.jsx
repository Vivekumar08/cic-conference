import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div className="h-screen flex flex-col " id="about">
      <div className="font-bold text-5xl justify-center flex mt-12">About</div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <FontAwesomeIcon icon={faDiamond} />
        </div>
      </div>
      <div className=" justify-center leading-normal text-justify ml-auto m-10 mr-auto w-3/4">
        <p className=" my-4">
          The Cluster Innovation Centre (CIC; https://cic.du.ac.in/), University
          of Delhi, started to foster an ecosystem of innovation and connect
          research with an application for the benefit of society. The CIC aims
          to support application-oriented research and innovations to solve
          real-world problems by developing ideas into novel applications that
          can be scaled up successfully for social and economic benefits.
        </p>
        <p className="my-4">
          National Education Policy, 2020 (NEP, 2020) commits to significantly
          raising education standards by increasing the Gross Enrolment Ratio
          (GER) in higher education to 50% by 2035 from the currency's current
          GER of 26.3%. Among other ambitious targets, the policy recommends
          encouraging high R&D investment, resolving issues of equity and
          inclusion in higher education, developing infrastructure and learning
          resources accessible and available to all learners with disabilities;
          setting up multidisciplinary universities and colleges, emphasizing
          skill-oriented education to enhance employability opportunities,
          attaining 100% youth and adult literacy are a few to list here.
        </p>
        <p className="my-4">
          To explore the sustainable ways for accelerating the recommendations
          by the policy, Cluster Innovation Centre is organizing a three-day
          seminar on{" "}
          <strong>
            {" "}
            Innovations in Higher Education through Public-Private Partnership
            Model (for effective implementation of NEP 2020){" "}
          </strong>{" "}
          under the aegis of the centenary celebration of the University of
          Delhi from 13-15 March 2023.
        </p>
        <p className="my-4">
          The three days of the seminar will commence serious deliberations by
          stakeholders from academia, industry, policy planning, innovators,
          practitioners and experts from legal fields to create effective,
          transparent and sustainable models of PPPs in higher education. The
          seminar will have plenary sessions, presentations by R&D groups, a
          session on a few exemplary PPPs, and a panel discussion. The seminar
          will conclude with a focused group discussion to delineates thefocal
          points for a future road map.
        </p>
      </div>
    </div>
  );
};

export default About;
