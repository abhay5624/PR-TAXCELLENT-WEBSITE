import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../img/stock.jpeg";
import image2 from "../img/teckn.jpeg";
import image3 from "../img/bbbbb.jpeg";
import styled from "styled-components";
import image4 from "../img/startupad.jpeg";
import image5 from "../img/Main-4.jpeg";
import { Link } from "react-router-dom";
const Slidesbar = () => {
  const slideImages = [image2, image1, image3, image4, image5];
  const slideProperties = {
    duration: 1500,
  };

  return (
    <>
      <Gap></Gap>
      <Slide {...slideProperties}>
        <div className="each-slide">
          <Slidestyle
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <h1>Global Business Services</h1>
              <p>
                We provide outsourcing services in India including Bookkeeping,
                Accounting, Financial Planning & Analysis and Payroll.
              </p>
              <Link to="/query">SEND ENQUIRY</Link>
            </div>
          </Slidestyle>
        </div>
        <div className="each-slide">
          <Slidestyle
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundSize: "auto",
              backgroundPosition: "50%",
            }}
          >
            <div>
              <h1>Risk Advisory Services</h1>
              <Link to="/query">SEND ENQUIRY</Link>
            </div>
          </Slidestyle>
        </div>
        <div className="each-slide">
          <Slidestyle
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <h1>Transactions Advisory</h1>
              <p>
                Our professional teams offer Fund-raising, Due Diligence,
                Mergers and Acquisition Advisory, Valuations, Corporate Debt
                Syndication and Financial Modelling services facilitating
                rational decision making.
              </p>
              <Link to="/query">SEND ENQUIRY</Link>
            </div>
          </Slidestyle>
        </div>
        <div className="each-slide">
          <Slidestyle
            style={{
              backgroundImage: `url(${slideImages[3]})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <h1>Setup Advisory</h1>
              <p>
                {" "}
                We provide a complete business setup advisory in India including
                entry strategy, location study, regulatory approvals, startup
                support and secretarial support.
              </p>
              <Link to="/query">SEND ENQUIRY</Link>
            </div>
          </Slidestyle>
        </div>
        <div className="each-slide">
          <Slidestyle
            style={{
              backgroundImage: `url(${slideImages[4]})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <h1>Taxation Advisory</h1>
              <Link to="/query">SEND ENQUIRY</Link>
            </div>
          </Slidestyle>
        </div>
      </Slide>
    </>
  );
};
const Gap = styled.div`
  @media (max-width: 768px) {
    height: 70px;
  }
`;
const Slidestyle = styled.div`
  margin-top: 11%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    height: 40vh;
    overflow: hidden;
  }
  div {
    width: 40%;
    background-color: #00000088;
    color: white;
    margin: 5%;
    padding: 1%;
    @media (max-width: 768px) {
      width: 80vw;
      margin: 1%;
    }
  }
  a {
    color: white;
    background-color: #126fa2;
    padding: 10px 20px;
    text-decoration: none;
  }
`;
export default Slidesbar;
