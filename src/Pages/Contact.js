import React from "react";
import styled from "styled-components";
import backimage from "../img/contact.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Mapimg from "../img/mapimage.PNG";

const Contact = () => {
  return (
    <Contactpage>
      <Gapspace></Gapspace>
      <Contactheading
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
        }}
      >
        <h1>Contact us</h1>
        <h3>
          <Link to="/">Home</Link> / Contact us
        </h3>
      </Contactheading>
      <Contactcontent>
        <div className="reachus">
          <div id="first">
            <h1>QUICK REACH US</h1>
            <p>
              <FontAwesomeIcon icon={faMailBulk} /> info@prtaxcellent.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} /> +91-9310070808,
              +91-9650770154
            </p>
            <p>
              <a href="https://wa.me/9310070808">
                <FontAwesomeIcon icon={faWhatsapp} /> +91-9310070808
              </a>
            </p>
          </div>
          <div id="Second">
            <h1>CONTACT US</h1>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Inputstyled
                type="text"
                name="name"
                id="username"
                placeholder="Enter Name"
                required
              />
              <Inputstyled
                type="email"
                name="email"
                id="usermail"
                placeholder="Enter Mail Address"
              />

              <Inputstyled
                type="text"
                name="MobileNumber"
                id="usernumber"
                placeholder="Mobile Number"
              />
              <Inputstyled
                type="text"
                name="Subject"
                id="Subject"
                placeholder="Subject"
              />
              <br />
              <Areastyle
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></Areastyle>
              <Submitbttn type="submit" name="button">
                SUBMIT
              </Submitbttn>
            </form>
          </div>
        </div>
        <div>
          <h2>HOW TO REACH US</h2>
          <h3>Head Office</h3>
          <div className="address">
            <div className="addressinword">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <h4>
                A-264, Ground Floor,Opp. Shaheed Bhagat Singh park, Indrapuri,
                Loni, Ghaziabad (U.P) - 201102
              </h4>
            </div>
            <div className="mapImage">
              <img src={Mapimg} alt="" />
              <div>
                <a href="https://www.google.com/maps/search/A-264,+Ground+Floor,+Indrapuri,+Loni,+Ghaziabad+-+201102/@28.7281829,77.2859866,17z/data=!3m1!4b1">
                  VIEW IN LARGER MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </Contactcontent>
    </Contactpage>
  );
};
const Inputstyled = styled.input`
  width: 40%;
  padding: 10px 20px;
  margin: 3px;
  border-color: #a0a0a0;
  border-width: 1px;
  @media (max-width: 768px) {
    width: 79%;
  }
`;
const Submitbttn = styled.button`
  color: white;
  background-color: #ffa800;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  margin: 3px;
`;
const Areastyle = styled.textarea`
  width: 90%;
  margin: 3px;
`;
const Contactpage = styled.div`
  font-family: "Josefin Sans", sans-serif;
  .address {
    margin-bottom: 50px;
    display: flex;
    .addressinword {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      background-color: #ffa800;
      font-size: 17px;
      padding: 44px;
    }
    .mapImage {
      position: relative;
      width: 50%;
      div {
        position: absolute;
        top: 20px;
        left: 10px;
        background-color: white;
        font-size: 14px;
        a {
          padding: 10px 20px;
          background-color: white;
          text-decoration: none;
        }
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .addressinword {
        order: 2;
      }
      .mapImage {
        order: 1;
        width: 100%;
        overflow: hidden;
        height: 30vh;
      }
    }
  }
`;
const Gapspace = styled.div`
  height: 140px;
`;
const Contactheading = styled.div`
  background-color: #00000087;
  color: white;
  padding: 30px;
  background-position: 10%;
  background-blend-mode: multiply;
  a {
    color: #ffa800;
    text-decoration: none;
  }
`;
const Contactcontent = styled.div`
  width: 90%;
  margin: auto;
  p {
    color: #555555;
  }
  a {
    color: #555555;
  }
  .reachus {
    display: flex;
    #first {
      width: 30%;
      a {
        color: black;
        text-decoration: none;
      }
    }
    #second {
      width: 70%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      #first {
        width: 80%;
      }
      #second {
        input {
          width: 90%;
        }
      }
    }
  }
`;
export default Contact;
