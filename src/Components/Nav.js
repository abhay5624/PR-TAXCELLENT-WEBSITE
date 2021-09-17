import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../img/logo 16.09.21.jpg";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutubeSquare,
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
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>
        </Socalmedia>
        <Socialdetail>
          <h1>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; Prtaxcllent@gmail.com
          </h1>
          <h1>
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;+91-9310070808
          </h1>
          <h1>
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;+91-9650770154
          </h1>
        </Socialdetail>
      </Navstyle>
      <Navstyletwo>
        <div>
          <img src={Logo} alt="" />
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
                  <Link to="/aboutus">LEADERSHIP</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/aboutus">OUR JOURNEY</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">SERVICES</a>
            <FontAwesomeIcon icon={faChevronDown} />
            <div className="dropdowncontent">
              <ul>
                <li>DIRECT TAX</li>
                <li>INDIRECT TAX</li>
                <li>ESI / EPF</li>
                <li>CUSTOM / EXCISE</li>
                <li>AUDIT & ASSURANCE</li>
                <li>CAPITAL MARKET OPINION</li>
                <li>VALUATION</li>
              </ul>
            </div>
          </div>

          <a href="#trending">TRENDING</a>
          <a href="#">INDUSTRIES</a>
          <a href="#">CONTACT US</a>
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
  .Links {
    width: 70%;
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
    width: 224px;
    height: 82px;
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
