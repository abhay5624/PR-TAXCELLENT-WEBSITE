import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backimage from "../img/services1.jpg";
import image2 from "../img/team.jpeg";
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
              We are a team of proficient and dedicated chartered accountants
              based in New Delhi as well as other major cities in India. We
              typically handle all the branches of accounting and auditing
              including accounts outsourcing, Business taxation, corporate
              compliance, company formation in India, starting a business in
              India, registration of foreign companies, taxation of expatriates,
              etc.
            </p>
            <p>
              Our mission has been to render professional services of the
              highest standard to clients, upholding the code of conduct and
              ethics of the profession. Keeping these grounded principles in
              consideration, we continue to grow and expand in our endeavour to
              exceed expectations.
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
            <h2>Why Choose Us ? </h2>
            <p>
              This is a team of highly-qualified and experienced professionals
              who add value to your business with their skill and efficiency. We
              are here to offer you:
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> A fresh and practical
                approach to our clients’ tax and account maintenance planning
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />A customized service
                based on individual clients
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> Innovative solutions to
                make things simpler
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} /> Value Focused, High
                Integrity Audit
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />
                Our more than 10-year history of providing quality service to
                our clients
              </li>
            </ul>
          </div>
        </div>
      </AboutContent>
      <div className="mission">
        <div>
          <h2>Our Mission</h2>
          <hr />
          <p>
            “Let ideas transform into innovation”. Our mission is to provide
            comprehensive professional services which clients refer to their
            associates, employees boast upon, competitors acknowledge and set as
            standards for themselves.
          </p>
        </div>
        <div>
          <h2>Our Vission</h2>
          <hr />
          <p>
            “Seeing invisible, achieving impossible”. Our vision is to raise
            benchmarks with every assignment by imparting knowledge with a goal
            to provide timely deliverable which makes us victorious in achieving
            client’s satisfaction adding to PR’s glory as a professional firm.
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
