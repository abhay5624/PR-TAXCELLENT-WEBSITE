import React from "react";
import styled from "styled-components";
import backimage from "../img/contact.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faPhoneAlt,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Mapimg from "../img/mapimage.PNG";
import Mapimg1 from "../img/mapimage2.PNG";
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
              <FontAwesomeIcon icon={faMailBulk} /> prtaxcellent@outlook.com
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
            <p>
              <a href="https://twitter.com/RTaxcellent">
                <FontAwesomeIcon icon={faTwitter} /> @prtaxcellent (P R
                Taxcellent & Associates)
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/prtaxcellent/">
                <FontAwesomeIcon icon={faInstagram} />P R Taxcellent &
                Associates
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
              <FontAwesomeIcon icon={faThumbtack} size="2x" />
              <h4> M Block, Connaught Place, New Delhi-110001</h4>
            </div>
            <div className="mapImage">
              <img src={Mapimg} alt="" />
              <div>
                <a href="https://www.google.com/maps/place/M+Block,+Block-M+Connaught+Place,+Connaught+Cir,+Block+M,+Connaught+Place,+New+Delhi,+Delhi+110001/@28.6332818,77.2200493,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfd3726d5a1f7:0x27f0747e8ad0f794!8m2!3d28.6332818!4d77.222238">
                  VIEW IN LARGER MAP
                </a>
              </div>
            </div>
          </div>
          <h3>Branch Office</h3>
          <div className="address">
            <div className="addressinword" style={{ width: "28%" }}>
              <FontAwesomeIcon icon={faThumbtack} size="2x" />
              <h4>
                {" "}
                H-404, 4th Floor, GDA Housing scheme, Loni, Ghaziabad, UP-201102
              </h4>
            </div>
            <div className="mapImage">
              <img src={Mapimg1} alt="" />
              <div>
                <a href="https://www.google.com/maps/search/H-404,+4th+Floor,+GDA+Housing+scheme,+Loni,+Ghaziabad,+UP-201102/@28.5375906,77.1483724,10z">
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
  }
`;
export default Contact;
