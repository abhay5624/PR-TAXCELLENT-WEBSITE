import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../img/logo 16.09.21.jpg";
import { useRef } from "react";
import {
  faLinkedin,
  faYoutubeSquare,
  faWhatsapp,
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = () => {
  const navLink = useRef(null);
  let DisplayLinks = false;
  const Navtoggle = () => {
    if (DisplayLinks) {
      navLink.current.style.display = "none";
      DisplayLinks = false;
    } else {
      navLink.current.style.display = "flex";
      DisplayLinks = true;
    }
  };
  return (
    <Positionfixednav>
      <Hamburger onClick={Navtoggle}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Navstyle>
        <Socalmedia>
          <a
            href="https://twitter.com/RTaxcellent"
            style={{
              color: "#7ab6da",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="2x"
              style={{ marginTop: "-2px" }}
            />
          </a>
          <a
            href="#"
            style={{
              color: "#2789c5",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              style={{ marginTop: "-2px" }}
            />{" "}
          </a>
          <a
            href="#"
            style={{
              color: "#0A66C2",
              border: "none",
              backgroundColor: "white",
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ marginTop: "-2px" }}
            />
          </a>
          <a
            href="https://www.instagram.com/prtaxcellent"
            style={{
              color: "#E37472",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="2x"
              style={{ marginTop: "-2px" }}
            />
          </a>
          <a
            href="#"
            style={{
              color: "white",
              backgroundColor: "#f3423f",
              border: "none",
            }}
          >
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              size="2x"
              style={{ marginTop: "-2px" }}
            />
          </a>
        </Socalmedia>
        <Socialdetail>
          <h1>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; info@prtaxcellent.com
          </h1>
          <h1>
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;+91-9650770154
          </h1>
          <h1>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{
                paddingRight: "7px",
                fontSize: "21px",
                paddingTop: "3px",
              }}
            />
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;+91-9310070808
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

        <div className="Links" ref={navLink}>
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
const Hamburger = styled.div`
  position: fixed;
  right: -9%;
  top: 90px;
  padding: 20px;
  background-color: white;
  border-bottom-left-radius: 110px;
  border-top-left-radius: 110px;
  div {
    width: 30px;
    height: 6px;
    margin: 2px;
    border-radius: 2px;
    background-color: black;
  }
`;
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Socalmedia = styled.div`
  padding: 10px;
  display: flex;
  a {
    display: block;
    width: fit-content;
    height: 27px;
    border-radius: 3px;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navstyletwo = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
    h2 {
      font-size: 14px;
      font-family: "Cinzel", serif;
      @media (max-width: 768px) {
        font-size: 11px;
        margin-top: 0%;
      }
    }
    img {
      width: 170px;
      @media (max-width: 768px) {
        width: 100px;
      }
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
            @media (max-width: 768px) {
              width: 300px;
            }
          }
          @media (max-width: 768px) {
            width: 90%;
          }
        }
        @media (max-width: 768px) {
          position: static;
          width: 100%;
          z-index: 1;
          li {
            width: 90%;
          }
        }
      }
      @media (max-width: 768px) {
        text-align: left;
      }
    }
    @media (max-width: 768px) {
      display: none;
      width: 100vw;
      flex-direction: column;
      height: 90vh;
      font-size: 20px;
    }
  }

  img {
    width: 400px;
    height: 122px;
    @media (max-width: 768px) {
      width: 100px;
      height: 62px;
    }
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
