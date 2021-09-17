import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Footer = () => {
  return (
    <Footerstyle>
      <Linksul>
        <Linkslist>
          <ul>
            <h3>Policies</h3>
            <li>Data security pratice</li>
            <li>Terms & conditions</li>
            <li>Legal disclaimer</li>
            <li>Company pvt. policy</li>
            <li>Copyright policy</li>
          </ul>
          <ul>
            <h3>Contact us</h3>
            <li>Business partners</li>
            <li>Prtaxcellent@gmail.com</li>
            <li>Advertise with us</li>
          </ul>
          <ul>
            <h3>Support--</h3>
            <li>Appointment</li>
            <li>Help</li>
            <li>How we work</li>
          </ul>
        </Linkslist>
        <div className="icons">
          <FontAwesomeIcon icon={faFacebookSquare} size="5x" className="icon" />
          <FontAwesomeIcon icon={faTwitterSquare} size="5x" className="icon" />
          <FontAwesomeIcon icon={faLinkedin} size="5x" className="icon" />
          <FontAwesomeIcon icon={faYoutubeSquare} size="5x" className="icon" />
        </div>
      </Linksul>
      <div>
        <Location>
          <a href="https://maps.app.goo.gl/Ct8VAmvhJCNeNU7k6">
            <FontAwesomeIcon icon={faThumbtack} size="3x" className="icon" />
          </a>

          <h3>A-264, Indrapuri, Loni Ghaziabad (U.P) - 201102</h3>
        </Location>
        <h4>Legal Disclaimer</h4>
        <p>
          The information contained on this website merely provides details of
          our firm to persons who have shown interest in knowing more about us
          and is not intended to solicit work or advertise our capabilities in
          any manner.The information provided on this website is general in
          nature and should not be used as a basis of decision-making without
          further professional advice. The third party site links are only
          provided for ready reference of the users and CA P R TAXCELLENT &
          ASSOCIATES neither controls thir content nor undertakes any
          responsibility regarding them.
        </p>
      </div>
      <Copyright>
        2021 &copy; P R TAXCELLENT & ASSOCIATES All right reserve.
      </Copyright>
    </Footerstyle>
  );
};
const Copyright = styled.div`
  background-color: #000000;
  padding: 5px;
  text-align: right;
  color: white;
  font-size: 13px;
`;
const Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid white;
`;
const Footerstyle = styled.footer`
  background-color: #000000;
  color: white;
  overflow: hidden;
  margin: 0%;
  padding-left: 10%;
  padding-right: 10%;
  h4 {
    color: #ffa800;
  }
  .icon {
    margin: auto;
    color: #ffa800;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
const Linksul = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    .icon {
      margin: auto;
      color: #ffa800;
      &:hover {
        color: white;
      }
    }
  }
`;
const Linkslist = styled.div`
  display: flex;
  border-right: 1px solid white;
  margin: 40px;
  padding-right: 40px;
  ul {
    li {
      line-height: 25px;
      &:hover {
        color: #ffa800;
      }
    }
  }
`;
export default Footer;
