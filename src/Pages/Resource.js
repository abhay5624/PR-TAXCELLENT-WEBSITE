import React from "react";
import styled from "styled-components";
import Backimg from "../img/teckn1.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Resource = () => {
  return (
    <Resourcepage>
      <Gapspace></Gapspace>
      <ResourceHeader style={{ backgroundImage: `url(${Backimg})` }}>
        <h1>Resources</h1>
        <h3>
          <Link to="/">Home</Link> / Resources
        </h3>
      </ResourceHeader>
      <ResourceContent>
        <h1>Acts</h1>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Income Tax Act, 1961
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            GST Act, 2017
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Central Excise Act, 1944
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Custom Act, 1962
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Companies Act, 2013
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            The Limited Liability Partnership Act, 2008
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Foreign Exchange Management Act, 1999
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Employees’ State Insurance Act, 1948
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Employees’ Provident Fund Act, 1952
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Right to Information Act, 2005
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Central Sales Tax Act, 1956
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Delhi Value Added Tax, 2004
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            The Securities and Exchange Board of India Act, 1992
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Entry Tax Act
          </li>
        </ul>
        <h1>Calculators</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            TDS Calculator
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Tax Calculator
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            HRA Calculator
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            VAT Calculator
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Home Loan Calculator
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Auto Loan Calculator
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            EMI Calculator
          </li>
        </ul>
        <h1>Utilities</h1>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Rates of TDS
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Rates of Income Tax
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Rates of Depreciation under Companies Act
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Rates of Depreciation under Income Tax Act
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            ROC filing fees
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Cost Inflation Index
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            Gold and Silver Rates
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            IFSC Codes
          </li>
        </ul>
      </ResourceContent>
    </Resourcepage>
  );
};
const Gapspace = styled.div`
  height: 140px;
`;
const ResourceContent = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  width: 80%;
  margin: auto;

  ul {
    border: 3px black solid;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      padding: 15px;
      border: 1px solid #646464;
      font-size: 17px;
      width: 30.2%;
      .icon {
        padding-right: 5px;
      }
    }
  }
`;
const Resourcepage = styled.div``;
const ResourceHeader = styled.div`
  background-color: #000000;
  color: white;
  padding: 30px;
  background-position: 10%;
  background-blend-mode: screen;
  a {
    color: #ffa800;
    text-decoration: none;
  }
`;
export default Resource;
