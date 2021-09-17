import React from "react";
import servImage from "../img/services.jpeg";
import taximage1 from "../img/srvicesimg/Direct.jpeg";
import taximage2 from "../img/srvicesimg/Indirect.jpeg";
import Customimg from "../img/srvicesimg/Excise.jpg";
import auditimg from "../img/srvicesimg/Audit.jpg";
import styled from "styled-components";
import CapitalImg from "../img/srvicesimg/Capital.jpg";
import Valuationimg from "../img/srvicesimg/Valuation.jpg";
import ESIimg from "../img/srvicesimg/ESI.png";
const Services = () => {
  return (
    <Servicesection
      style={{ backgroundImage: `url(${servImage})`, backgroundSize: "cover" }}
    >
      <h2>OUR SERVICES</h2>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${taximage1})`,
            backgroundSize: "cover",
          }}
        >
          <h4>DIRECT TAX</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${taximage2})`,
            backgroundSize: "cover",
          }}
        >
          <h4>INDIRECT TAX</h4> <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${ESIimg})`,
            backgroundSize: "cover",
          }}
        >
          <h4>ESI / EPF</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
      </Sersections>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${Customimg})`,
            backgroundSize: "cover",
          }}
        >
          <h4>CUSTOM/EXCISE</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
      </Sersections>
      <Sersections>
        <div
          style={{
            backgroundImage: `url(${auditimg})`,
            backgroundSize: "cover",
          }}
        >
          <h4> AUDIT & ASSURANCE</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${CapitalImg})`,
            backgroundSize: "cover",
          }}
        >
          <h4>CAPITAL MARKET OPINION</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${Valuationimg})`,
            backgroundSize: "cover",
          }}
        >
          <h4>VALUATION</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            impedit amet repudiandae, libero enim, optio aliquam corporis
            similique itaque porro minima quo sapiente qui recusandae
          </p>
        </div>
      </Sersections>
    </Servicesection>
  );
};
const Servicesection = styled.div`
  height: 180vh;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: right;
    padding-top: 90px;
    padding-right: 100px;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
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
    color: white;
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
`;
export default Services;
