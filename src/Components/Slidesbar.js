import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../img/stock.jpeg";
import image2 from "../img/teckn.jpeg";
import image3 from "../img/bbbbb.jpeg";
import styled from "styled-components";
import image4 from "../img/startupad.jpeg";
const Slidesbar = () => {
  const slideImages = [image2, image1, image3, image4];
  const slideProperties = {
    duration: 1500,
  };

  return (
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
              We provide outsourcing services in India including US Taxation, UK
              Taxation, Bookkeeping, Accounting, Financial Planning & Analysis
              and Payroll.
            </p>
            <a>SEND ENQUIRY</a>
          </div>
        </Slidestyle>
      </div>
      <div className="each-slide">
        <Slidestyle
          style={{
            backgroundImage: `url(${slideImages[1]})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1>Startup Services</h1>

            <a>READ MORE</a>
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
              Our professional teams offer Fund-raising, Due Diligence, Mergers
              and Acquisition Advisory, Valuations, Corporate Debt Syndication
              and Financial Modelling services facilitating rational decision
              making.
            </p>
            <a>SEND ENQUIRY</a>
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
            <h1>Business Setup Advisory</h1>
            <p>
              {" "}
              We provide a complete business setup advisory in India including
              entry strategy, location study, regulatory approvals, startup
              support and secretarial support.
            </p>

            <a>SEND ENQUIRY</a>
          </div>
        </Slidestyle>
      </div>
    </Slide>
  );
};

const Slidestyle = styled.div`
  margin-top: 11%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    width: 40%;
    background-color: #00000088;
    color: white;
    margin: 5%;
    padding: 3%;
  }
  a {
    color: white;
    background-color: #126fa2;
    padding: 10px 20px;
  }
`;
export default Slidesbar;
