import React from "react";
import taximage1 from "../img/srvicesimg/Direct.jpeg";
import taximage2 from "../img/srvicesimg/Indirect.jpeg";
import Customimg from "../img/srvicesimg/Excise.jpg";
import auditimg from "../img/srvicesimg/Audit.jpg";
import styled from "styled-components";
import CapitalImg from "../img/srvicesimg/Capital.jpg";
import Valuationimg from "../img/srvicesimg/Valuation.jpg";
import ESIimg from "../img/srvicesimg/ESI.png";
import GSTimg from "../img/srvicesimg/GST.jpg";
import VATimg from "../img/srvicesimg/VAT.jpg";
import PYimg from "../img/srvicesimg/PhysicalVerification.jpeg";
import assimg from "../img/assist.jpg";
const Services = ({ servImage }) => {
  return (
    <Servicesection
      style={{ backgroundImage: `url(${servImage})`, backgroundSize: "100%" }}
    >
      <Serviceheading>
        <h2>OUR SERVICES</h2>
        <p>
          Our dedicated employees are happy to assist you with know how and
          experience in your daily business.
        </p>
      </Serviceheading>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${auditimg})`,
            backgroundSize: "cover",
            backgroundPosition: "90%",
          }}
        >
          <h4>INTERNAL AUDIT </h4>
          <hr />
        </div>
        <div
          style={{
            backgroundImage: `url(${CapitalImg})`,
            backgroundSize: "cover",
          }}
        >
          <h4>CAPITAL MARKET OPINION</h4>
          <hr />
        </div>
        <div
          style={{
            backgroundImage: `url(${taximage1})`,
            backgroundSize: "cover",
            backgroundColor: " rgb(0 0 0 / 60%)",
            backgroundBlendMode: "multiply",
          }}
        >
          <h4>INCOME TAX / TDS </h4>
          <hr />
        </div>
      </Sersections>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${ESIimg})`,
            backgroundSize: "cover",
          }}
        >
          <h4>ESI / EPF</h4>
          <hr />
        </div>
      </Sersections>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${Customimg})`,
            backgroundSize: "cover",
            backgroundColor: " rgb(0 0 0 / 60%)",
            backgroundBlendMode: "multiply",
          }}
        >
          <h4>CUSTOM/EXCISE</h4>
          <hr />
        </div>

        <div
          style={{
            backgroundImage: `url(${GSTimg})`,
            backgroundSize: "100%",
          }}
        >
          <h4>GST</h4>
          <hr />
        </div>
        <div
          style={{
            backgroundImage: `url(${taximage2})`,
            backgroundSize: "cover",
          }}
        >
          <h4>PAYROLL</h4> <hr />
        </div>
      </Sersections>

      <Sersections>
        {" "}
        <div
          style={{
            backgroundImage: `url(${PYimg})`,
            backgroundSize: "cover",
            backgroundColor: " rgb(0 0 0 / 60%)",
            backgroundBlendMode: "multiply",
          }}
        >
          <h4>PHYSICAL VERIFICATION</h4>
          <hr />
        </div>
      </Sersections>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${Valuationimg})`,
            backgroundSize: "cover",
            backgroundColor: " rgb(0 0 0 / 60%)",
            backgroundBlendMode: "multiply",
          }}
        >
          <h4>VALUATION</h4>
          <hr />
        </div>
        <div
          style={{
            backgroundImage: `url(${VATimg})`,
            backgroundSize: "cover",
            backgroundColor: " rgb(0 0 0 / 60%)",
            backgroundBlendMode: "multiply",
          }}
        >
          <h4>VAT</h4>
          <hr />
        </div>
        <div
          style={{
            backgroundImage: `url(${assimg})`,
            backgroundSize: "cover",
            backgroundColor: " rgb(0 0 0 / 60%)",
            backgroundBlendMode: "multiply",
            backgroundPositionX: "50%",
          }}
        >
          <h4>ASSETS MANAGEMENT</h4>
          <hr />
        </div>
      </Sersections>
    </Servicesection>
  );
};
const Serviceheading = styled.div`
  color: white;
  background-color: #0000007b;
  width: max-content;
  height: min-content;
  margin: auto;
  padding: 10px;
  text-align: center;
  margin-right: 230px;
  p {
    font-size: 15px;
  }
  h2 {
    text-align: left;
  }
  @media (max-width: 768px) {
    margin: auto;
    text-align: center;
    width: 100%;
    h2 {
      padding-right: 0%;
      text-align: center;
    }
    p {
      display: none;
    }
  }
`;
const Servicesection = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  padding-top: 50px;
  h2 {
    padding-right: 100px;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    @media (max-width: 768px) {
      padding-right: 2%;
      padding-left: 2%;
    }
  }
`;
const Sersections = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  div {
    width: 240px;
    height: 200px;
    background-color: #000000;
    background-blend-mode: hard-light;
    margin: 30px;
    border: 2px solid #ffffff;
    color: #ffffff;
    overflow: hidden;
    &:hover {
      p {
        transform: translateX(0);
      }
      hr {
        transform: translateX(0);
      }
    }
    h4 {
      font-family: "Josefin Sans", sans-serif;
      font-size: 17px;
      text-align: center;
    }
    p {
      font-size: 13px;
      text-align: justify;
      padding: 6px;
      transform: translateX(-100%);
      transition: all 0.5s ease-in-out;
    }
    hr {
      color: #ffffff;
      width: 80%;
      border-color: #ffffff;
      transform: translateX(110%);
      transition: all 0.5s ease-in-out;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export default Services;
