import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backimage from "../img/services1.jpg";
import image2 from "../img/Why.jpeg";
import imag3 from "../img/ychoos.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Team from "../Components/Team";
const Aboutus = () => {
  const arr = [
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima fugit esse, porro nulla neque reprehenderit earum quis consequatur impedit maxime expedita deserunt sit. Porro placeat esse quam aut, veritatis saepe impedit pariatur ab omnis, sit cum quia tempore facere nostrum consectetur! Reprehenderit sapiente ipsa repudiandae neque a esse impedit!",
    "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima fugit esse, porro nulla neque reprehenderit earum quis consequatur impedit maxime expedita deserunt sit. Porro placeat esse quam aut, veritatis saepe impedit pariatur ab omnis, sit cum quia tempore facere nostrum consectetur! Reprehenderit sapiente ipsa repudiandae neque a esse impedit!",
  ];
  return (
    <Aboutuspage>
      <Gapspace></Gapspace>
      <Aboutheading
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
        }}
      >
        <h1>About us</h1>
        <h3>
          <Link to="/">Home</Link> / About
        </h3>
      </Aboutheading>

      <AboutContent>
        <div className="whoweare">
          <div>
            <h2>Who we are ?</h2>
            <p>
              P R Taxcellent & Associates firm was established in INDIA in 2010
              and has currently become on of the leading firm in North India.
              The firm operates from its offices situated in Delhi, Uttar
              Pradesh, Haryana and offers its clients a full range of services
              including financial and business advisory, tax and regulatory, and
              risk advisory services.
            </p>
            <p>
              P R Taxcellent & Associates has a client base of more than 200.
              The firm approach to service delivery helps to provide value added
              services to clients. Our differentiation is derived from a rapid
              performance based, industry and technology enabled business
              advisory services delivered by talented professionals.
            </p>
          </div>

          <div
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="ychooseus">
          <div
            style={{
              backgroundImage: `url(${imag3})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div>
            <h2>WHY WORK WITH US ? </h2>
            <p>
              We challenge our people to learn more, look deeper and offer them
              knowledge and training to help them learn something new every day.
              Our firm is a growing firm which offers wide variety of work and
              complete exposure to our team. We encourage them to have high
              aspirations and create a customized career graph. Creating a
              supportive and diverse workplace and a merit based equal
              opportunity environment is our target. We offer a variety of
              services, so we are looking for a variety of people – individuals
              who can bring new perspectives to existing scenarios, bright and
              creative thinkers.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> Professional Growth
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> Personal Development
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> Work Life Balance
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> Gender Sensitive
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />
                Personalized mentoring
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />
                Safe environment
              </li>
            </ul>
          </div>
        </div>
      </AboutContent>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#011231",
          margin: "0%",
          padding: "30px",
        }}
      >
        VALUES
      </h1>
      <div className="mission">
        <div>
          <h2>Our Mission</h2>
          <hr />
          <p>
            To provide reliable professional services with integrity, excellence
            and commitment to meet our clients’ needs.
          </p>
        </div>
        <div>
          <h2>Our Vission</h2>
          <hr />
          <p>
            To establish a one roof platform for clients for all their
            professional needs and to improve constantly
          </p>
        </div>
        <div>
          <h2>Our Beliefs</h2>
          <hr />
          <p>
            We belief in moral values and accept that there are no shortcuts for
            quality of professional services.
          </p>
        </div>
        <div>
          <h2>Our Ethics</h2>
          <hr />
          <p>
            We abide by the professional ethics and would like to restrain
            ourselves from any conduct that may discredit our profession.
          </p>
        </div>
      </div>
      <AboutContent>
        <div className="Ourteam">
          <Team description={arr} width="30%" />
        </div>
      </AboutContent>
    </Aboutuspage>
  );
};
const Gapspace = styled.div`
  height: 140px;
`;
const AboutContent = styled.div`
  width: 80%;
  margin: auto;
  color: black;
  padding: 50px;

  .whoweare {
    display: flex;
    text-align: justify;
    margin-bottom: 100px;
    div {
      width: 50%;
      object-fit: cover;
      padding: 15px;
    }
  }
  .ychooseus {
    display: flex;
    text-align: justify;
    div {
      width: 50%;
      object-fit: cover;
      padding: 15px;
    }
    ul {
      list-style: none;
      color: #797979;
      li {
        line-height: 3ch;
        &:hover {
          color: #242424;
          margin: 7px;
        }
      }
    }
  }
`;
const Aboutheading = styled.div`
  background-color: #000000;
  color: white;
  padding: 30px;
  background-position: 10%;
  background-blend-mode: screen;
`;
const Aboutuspage = styled.div`
  width: 100%;
  margin: auto;
  font-family: "Josefin Sans", sans-serif;
  a {
    text-decoration: none;
    color: #06a4ff;
  }
  .Ourteam {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .mission {
    width: 100%;
    display: flex;
    background-color: #011231;
    justify-content: center;
    color: white;
    div {
      width: 30%;
      text-align: center;
      padding: 10px;
      margin: 20px;
      &:hover {
        hr {
          width: 80%;
        }
      }
      p {
        text-align: justify;
      }

      hr {
        width: 60%;
        color: #1ee99b;
        border-color: #1ee99b;
        transition: all 1s ease-in-out;
      }
    }
  }
`;
export default Aboutus;
