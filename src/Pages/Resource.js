import React from "react";
import styled from "styled-components";
import Backimg from "../img/Resources.jpeg";
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
            <a href="https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Income Tax Act, 1961
            </a>
          </li>
          <li>
            <a href="https://www.cbic.gov.in/resources/htdocs-cbec/gst/cgst-act.pdf">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              GST Act, 2017
            </a>
          </li>
          <li>
            <a href="https://www.cbic.gov.in/htdocs-cbec/excise/cx-act/cx-act-ch2-june16#:~:text=(a)a%20duty%20of%20excise,1985%20(5%20of%201986)%3B">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Central Excise Act, 1944
            </a>
          </li>
          <li>
            <a href="https://www.cbic.gov.in/htdocs-cbec/customs/cs-acts-botm">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Custom Act, 1962
            </a>
          </li>
          <li>
            <a href="https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Companies Act, 2013
            </a>
          </li>
          <li>
            <a href="https://legislative.gov.in/sites/default/files/The Limited Liability Partnership Act, 2008.pdf">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              The Limited Liability Partnership Act, 2008
            </a>
          </li>
          <li>
            <a href="https://legislative.gov.in/sites/default/files/A1999-42_0.pdf">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Foreign Exchange Management Act, 1999
            </a>
          </li>
          <li>
            <a href="https://www.esic.nic.in/Tender/ESIAct1948Amendedupto010610.pdf">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Employees’ State Insurance Act, 1948
            </a>
          </li>
          <li>
            <a href="https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPFAct1952.pdf">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Employees’ Provident Fund Act, 1952
            </a>
          </li>
          <li>
            <a href="https://rti.gov.in/rti-act.pdf">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Right to Information Act, 2005
            </a>
          </li>
          <li>
            <a href="https://ctd.tn.gov.in/documents/10184/10928/CENTRAL+SALES+TAX+ACT%2C+1956/f6b71891-575e-4bca-a345-9779071498a5?version=1.2">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Central Sales Tax Act, 1956
            </a>
          </li>
          <li>
            <a href="https://dvat.gov.in/App_Themes/PublicNotices/DVAT_ACT_2014.pdf">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Delhi Value Added Tax, 2004
            </a>
          </li>
          <li>
            <a href="https://www.sebi.gov.in/sebi_data/attachdocs/1456380272563.pdf">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              The Securities and Exchange Board of India Act, 1992
            </a>
          </li>
        </ul>
        <h1>Calculators</h1>
        <ul>
          <li>
            <a href="https://www.incometaxindia.gov.in/Pages/tools/tds-calculator.aspx">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              TDS Calculator
            </a>
          </li>
          <li>
            <a href="https://www.incometaxindia.gov.in/pages/tools/advance-tax-calculator.aspx">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Tax Calculator
            </a>
          </li>
          <li>
            <a href="https://www.incometaxindia.gov.in/Pages/tools/house-rent-allowance-calculator.aspx">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              HRA Calculator
            </a>
          </li>

          <li>
            <a href="https://emicalculator.net/">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Home Loan Calculator
            </a>
          </li>
          <li>
            <a href="https://emicalculator.net/">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Auto Loan Calculator
            </a>
          </li>
          <li>
            <a href="https://emicalculator.net/">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              EMI Calculator
            </a>
          </li>
        </ul>
        <h1>Utilities</h1>
        <ul>
          <li>
            <a href="https://www.incometaxindia.gov.in/pages/charts-and-tables.aspx">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Rates of TDS
            </a>
          </li>
          <li>
            <a href="https://www.incometaxindia.gov.in/pages/charts-and-tables.aspx">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Rates of Income Tax
            </a>
          </li>
          <li>
            <a href="https://www.mca.gov.in/content/mca/global/en/acts-rules/companies-act/companies-act-2013.html">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Rates of Depreciation under Companies Act
            </a>
          </li>
          <li>
            <a href="https://www.incometaxindia.gov.in/_layouts/15/dit/mobile/viewer.aspx?path=https://www.incometaxindia.gov.in/charts%20%20tables/depreciation%20rates.htm&k=&IsDlg=0">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Rates of Depreciation under Income Tax Act
            </a>
          </li>
          <li>
            <a href="https://www.mca.gov.in/mcafoportal/enquireFeePreLogin.do">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              ROC filing fees
            </a>
          </li>
          <li>
            <a href="https://www.incometaxindia.gov.in/Pages/utilities/cost-Inflation-Index.aspx">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Cost Inflation Index
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              Gold and Silver Rates
            </a>
          </li>
          <li>
            <a href="https://www.rbi.org.in/Scripts/IFSCMICRDetails.aspx">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              IFSC Codes
            </a>
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
      padding: 13px;
      border: 1px solid #646464;
      font-size: 17px;
      width: 100%;
      a {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
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
