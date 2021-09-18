import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backimage from "../img/industries1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faBook,
  faCapsules,
  faLaptopCode,
  faShoppingCart,
  faHome,
  faUserInjured,
  faStoreAlt,
  faRupeeSign,
  faCameraRetro,
  faTruck,
  faTractor,
  faWindowRestore,
  faNewspaper,
  faTaxi,
  faAtom,
  faHandsHelping,
  faHospital,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
const Indurstries = () => {
  return (
    <Induspage>
      <Gapspace></Gapspace>
      <Indusheading
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
        }}
      >
        <h2> Industries</h2>
        <h3>
          <Link to="/">Home</Link> / Industries
        </h3>
      </Indusheading>
      <IndusContent>
        <h1>INDUSTRIES WE ARE ENGAGED WITH</h1>
        <Flexbox>
          <div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faBus} size="2x" className="icon" />
                Automotive
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} size="2x" className="icon" />
                Education
              </li>
              <li>
                <FontAwesomeIcon icon={faCapsules} size="2x" className="icon" />
                Pharmaceuticals
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faRupeeSign}
                  size="2x"
                  className="icon"
                />
                Banking / Financial Sector
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  size="2x"
                  className="icon"
                />
                Information Technology
              </li>
              <li>
                <FontAwesomeIcon icon={faHammer} size="2x" className="icon" />
                Steel and Irons
              </li>
              <li>
                <FontAwesomeIcon icon={faTractor} size="2x" className="icon" />
                Agriculture
              </li>
              <li>
                <FontAwesomeIcon icon={faHospital} size="2x" className="icon" />
                Hospitals
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWindowRestore}
                  size="2x"
                  className="icon"
                />
                E-Commerce
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="2x"
                  className="icon"
                />
                Import and Export
              </li>
              <li>
                <FontAwesomeIcon icon={faStoreAlt} size="2x" className="icon" />{" "}
                Retails and Whole sale
              </li>
              <li>
                <FontAwesomeIcon icon={faHome} size="2x" className="icon" />
                Real Estate
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faUserInjured}
                  size="2x"
                  className="icon"
                />
                Insurance
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  size="2x"
                  className="icon"
                />
                Media and Entertainment
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  size="2x"
                  className="icon"
                />
                Publiation
              </li>
              <li>
                <FontAwesomeIcon icon={faTaxi} size="2x" className="icon" />
                Transportation and Logistics
              </li>
              <li>
                <FontAwesomeIcon icon={faAtom} size="2x" className="icon" />
                Chemical and related
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faHandsHelping}
                  size="2x"
                  className="icon"
                />
                Charitable Trust
              </li>
            </ul>
          </div>
        </Flexbox>
      </IndusContent>
    </Induspage>
  );
};
const Flexbox = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  div {
    background-color: #ffa800;
    color: black;
    width: 40%;
    ul {
      font-size: 30px;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        padding: 10px;
      }
    }
  }
`;
const Induspage = styled.div`
  width: 100%;
  margin: auto;
  font-family: "Josefin Sans", sans-serif;
  .icon {
    padding: 20px;
    border-radius: 50%;
    border: 4px solid black;
    margin: 10px;
    color: black;
  }
`;
const IndusContent = styled.div`
  margin-bottom: 100px;
  h1 {
    text-align: center;
    padding: 20px;
  }
`;
const Gapspace = styled.div`
  height: 140px;
`;
const Indusheading = styled.div`
  background-color: #eed814b0;
  background-position: 50%;
  color: white;
  padding: 30px;
  background-position: 10%;
  background-blend-mode: multiply;
  a {
    text-decoration: none;
    color: #ffa800;
  }
`;
export default Indurstries;
