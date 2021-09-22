import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const NavforMobile = () => {
  const [navbarvisibal, setnavbarvisibal] = useState(false);
  const navbarRef = useRef();
  const [firstul, setfirstul] = useState(false);
  const [Secondul, setSecondul] = useState(false);
  const Navbartoggle = () => {
    if (navbarvisibal) {
      navbarRef.current.style.transform = "translateX(100%)";
      setnavbarvisibal(false);
    } else {
      console.log("its work");
      console.log(navbarRef.current);
      navbarRef.current.style.transform = "translateX(0%)";
      setnavbarvisibal(true);
    }
  };
  const ChildclassToggle = (e) => {
    console.log(e.target.nextElementSibling);
    if (e.target.nextElementSibling.style.display === "none") {
      e.target.nextElementSibling.style.display = "block";
    } else {
      e.target.nextElementSibling.style.display = "none";
    }
  };
  return (
    <Navbar>
      <Navbarstyle onClick={Navbartoggle}>
        {!navbarvisibal ? (
          <FontAwesomeIcon icon={faBars} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faTimes} size="2x" />
        )}
      </Navbarstyle>
      <Navlist ref={navbarRef}>
        <ul>
          <li>
            <Link to="/" onClick={Navbartoggle}>
              Home
            </Link>
          </li>
          <li>
            <button onClick={ChildclassToggle}>
              About us
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "5px", pointerEvents: "none" }}
              />
            </button>
            <ul>
              <Link to="/aboutus" onClick={Navbartoggle}>
                <li>Profile</li>
              </Link>
              <Link to="/aboutus" onClick={Navbartoggle}>
                {" "}
                <li>Values</li>
              </Link>
              <Link to="/aboutus" onClick={Navbartoggle}>
                <li>Our Strength</li>
              </Link>
              <Link to="/aboutus" onClick={Navbartoggle}>
                {" "}
                <li>Our Team's</li>
              </Link>
            </ul>
          </li>
          <li>
            <button onClick={ChildclassToggle}>
              Services
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "5px", pointerEvents: "none" }}
              />
            </button>
            <ul>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  Direct Tax
                </Link>
              </li>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  Indirect Tax
                </Link>
              </li>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  ESI / EPF
                </Link>
              </li>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  Custom / Excise
                </Link>
              </li>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  Capital Market Opinion
                </Link>
              </li>
              <li>
                <Link to="services" onClick={Navbartoggle}>
                  Valuation
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/resources" onClick={Navbartoggle}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="industries" onClick={Navbartoggle}>
              Industries
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={Navbartoggle}>
              Contact us
            </Link>
          </li>
        </ul>
      </Navlist>
    </Navbar>
  );
};
const Navbar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Navbarstyle = styled.div`
  z-index: 99;
  position: fixed;
  right: 0%;
  top: 100px;
  background-color: white;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
`;
const Navlist = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
  z-index: 25;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60vh;
    margin-top: 60px;
    list-style: none;

    width: 100%;
    padding: 10%;
    li {
      font-size: 20px;

      text-align: left;
      padding: 5px;
      width: 80%;
      a {
        color: black;
        text-decoration: none;
      }
      ul {
        margin-top: 5%;
        padding-left: 20%;
        display: none;
        height: fit-content;
        li {
          padding: 3px;
          border-bottom: 2px solid #4b4b4b;
          &:hover {
            background-color: #d4d4d4;
          }
        }
      }
    }
    button {
      border: none;
      font-size: 18px;
      margin: 0%;
      padding: 0%;
      background-color: white;
    }
  }
`;
export default NavforMobile;
