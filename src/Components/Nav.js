import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../img/logo 16.09.21.jpg";

import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutubeSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Nav = () => {
  return (
    <Positionfixednav>
      <Navstyle>
        <Socalmedia>
          <a
            href="https://twitter.com/RTaxcellent"
            style={{ color: "#7ab6da", borderColor: "#7ab6da" }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" style={{ color: "#2789c5", borderColor: "#2789c5" }}>
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
          <a href="#" style={{ color: "#0A66C2", borderColor: "#0A66C2" }}>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/prtaxcellent"
            style={{ color: "#E37472", borderColor: "#E37472" }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" style={{ color: "#f3423f", borderColor: "#f3423f" }}>
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>
        </Socalmedia>
        <Socialdetail>
          <h1>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; prtaxcellent@outlook.com
          </h1>
          <h1>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ paddingRight: "3px", fontSize: "21px" }}
            />
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;+91-9310070808
          </h1>
          <h1>
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;+91-9650770154
          </h1>
        </Socialdetail>
      </Navstyle>
      <Navstyletwo>
        <div className="logo">
          <img src={Logo} alt="" />
          <div>
            <h1> P R TAXCELLENT & ASSOCIATES</h1>
            <h2>Financial | Tax | Legal | Advisor</h2>
          </div>
        </div>
        <div className="Links">
          <Link to="/">HOME</Link>

          <div className="dropdown">
            <Link to="/aboutus">ABOUT US</Link>

            <FontAwesomeIcon icon={faChevronDown} />
            <div className="dropdowncontent">
              <ul>
                <li>
                  <Link to="/aboutus">PROFILE</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/aboutus">VALUES</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/aboutus">OUR STRENGTH</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/aboutus">OUR TEAM'S</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <Link to="services">SERVICES</Link>
            <FontAwesomeIcon icon={faChevronDown} />
            <div className="dropdowncontent">
              <ul>
                <li>
                  <Link to="services">DIRECT TAX</Link>
                </li>
                <li>
                  <Link to="services">INDIRECT TAX</Link>
                </li>
                <li>
                  <Link to="services">ESI / EPF</Link>
                </li>
                <li>
                  <Link to="services">CUSTOM / EXCISE</Link>
                </li>
                <li>
                  <Link to="services">AUDIT & ASSURANCE</Link>
                </li>
                <li>
                  <Link to="services">CAPITAL MARKET OPINION</Link>
                </li>
                <li>
                  <Link to="services">VALUATION</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/resources">RESOURCES</Link>

          <Link to="industries">INDUSTRIES</Link>

          <Link to="/contact">CONTACT US</Link>
        </div>
      </Navstyletwo>
    </Positionfixednav>
  );
};
const Positionfixednav = styled.div`
  position: fixed;
  top: 0%;
  z-index: 99;
  width: 100%;
`;
const Navstyle = styled.nav`
  background-color: #48484c;

  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Socalmedia = styled.div`
  padding: 10px;
  a {
    border: 2px white solid;
    padding: 3px;
    margin: 3px;
    color: white;
    text-decoration: none;
  }
`;
const Socialdetail = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .backwhat {
    background-color: #63f363;
    border-radius: 25%;
    border: none;
  }
  h1 {
    font-size: 16px;
  }
`;
const Navstyletwo = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Cinzel", serif;
    div {
      text-align: center;
    }
    h1 {
      font-size: 20px;
      font-family: "Cinzel", serif;
      margin-bottom: 0%;
      padding-bottom: 0%;
    }
    h2 {
      font-size: 14px;
      font-family: "Cinzel", serif;
    }
    img {
      width: 170px;
    }
  }
  .Links {
    width: 55%;
    display: flex;
    justify-content: space-evenly;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #272626;
    .dropdown {
      text-align: center;
      position: relative;
      &:hover {
        .dropdowncontent {
          display: block;
        }
      }
      .dropdowncontent {
        display: none;
        position: absolute;
        z-index: 2;
        background-color: white;
        ul {
          padding-left: 0;
          list-style: none;
          text-align: left;
          width: min-content;
          li {
            width: 150px;
            padding: 10px 20px;
            border-bottom: 1px solid #b6b6b6;
            &:hover {
              background-color: #dddada;
            }
          }
        }
      }
    }
  }

  img {
    width: 400px;
    height: 122px;
  }
  a {
    margin: 5px;
    text-decoration: none;
    color: #3d3d3d;
    &:hover {
      color: #060057;
    }
  }
`;

export default Nav;
