import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutubeSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Footerstyle>
      <Linksul>
        <Linkslist>
          <ul>
            <h3>Policies</h3>
            <li>
              <Link to="/Terms-and-conditions">Terms & conditions</Link>{" "}
            </li>
            <li>
              <Link to="/Terms-and-conditions">Legal disclaimer</Link>{" "}
            </li>
            <li>
              <Link to="/Terms-and-conditions">Company pvt. policy</Link>{" "}
            </li>
            <li>
              <Link to="/Terms-and-conditions">Copyright policy</Link>{" "}
            </li>
          </ul>
          <ul>
            <Link to="/contact">
              <h3>Contact us</h3>
            </Link>

            <li>
              <Link to="/aboutus">Business partners</Link>
            </li>

            <li>prtaxcellent@outlook.com</li>

            <li>
              <Link to="/contact">Advertise with us</Link>
            </li>
          </ul>
          <ul>
            <h3>Support--</h3>
            <li>Appointment</li>
            <li>Help</li>
            <li className="careers">
              Careers <div>There is no opening in current time</div>
            </li>
          </ul>
        </Linkslist>
        <div className="icons">
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="5x"
              className="icon"
            />
          </a>
          <a
            href="https://twitter.com/RTaxcellent"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="5x"
              className="icon"
            />
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faLinkedin} size="5x" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/prtaxcellent/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faInstagram} size="5x" className="icon" />
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              size="5x"
              className="icon"
            />
          </a>
        </div>
      </Linksul>
      <div>
        <Location>
          <a href="https://www.google.com/maps/place/M+Block,+Block-M+Connaught+Place,+Connaught+Cir,+Block+M,+Connaught+Place,+New+Delhi,+Delhi+110001/@28.6332818,77.2200493,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfd3726d5a1f7:0x27f0747e8ad0f794!8m2!3d28.6332818!4d77.222238">
            <FontAwesomeIcon icon={faThumbtack} size="3x" className="icon" />
          </a>

          <h3>M Block, Connaught Place, New Delhi-110001</h3>
        </Location>
        <h4>Legal Disclaimer</h4>
        <p>
          Your access to this website constitutes your agreement to be bound by
          all terms and conditions listed herein below. If you do not agree to
          this, you may not access or otherwise use the website. The material
          displayed on this website may be downloaded for non-commercial,
          personal use only. Distribution, modification, transmission, use or
          reuse of the content and various facilities available on this website
          without written permission is not permissible. The firm reserves the
          right, for any reason, in its sole discretion, to terminate, change or
          suspend any aspect of this website, including, but not limited to,
          content or features. All reasonable efforts shall be made to ensure
          that the information contained on this website is updated, accurate
          and complete. However, no representations or warranties are made
          (express or implied) as to the reliability, accuracy or completeness
          of such information. The site provides links to websites or resources
          operated by others over which we do not have any control. We do not
          undertake any responsibility for the availability of such external
          resources. We shall not be liable for any content, advertising,
          products, services or other materials on or available from such sites
          or resources.
        </p>
        <p>
          The inclusion of hyperlinks to such sites does not imply any
          endorsement of the material on such websites or any association with
          their operators. We. shall not be responsible or liable, directly or
          indirectly, for any damage or loss caused or alleged to be caused by
          or in connection with use of or reliance on any such content or
          service available on or through any such site or resource. The site,
          including all content, functions, and information made available on or
          accessed through the site, is provided on an “as is available” basis
          without representations or warranties of any kind whatsoever, express
          or implied, including without limitation, non-infringement,
          merchantability or fitness for a particular purpose. The firm does not
          warrant that the site or the functions, features or content contained
          therein will be timely, secure, uninterrupted or error free, or that
          defects will be corrected. No advice or information, whether oral or
          written, obtained by you from us or through this website shall create
          any warranty not expressly made herein. In no event shall the firm be
          liable for any special, incidental or consequential damages that are
          directly or indirectly related to the use of, or the inability to use
          this website or the content, materials and functions related thereto,
          including without limitation, loss of revenue or anticipated profits
          or lost business or lost sales.
        </p>
      </div>
      <Copyright>
        2021 &copy; P R TAXCELLENT & ASSOCIATES All right reserve.
        <br />
        Created by -{" "}
        <a
          href="https://wa.me/7827808430"
          style={{ color: "#FFA800", textDecoration: "none" }}
        >
          Abhay Kumar Sharma
        </a>
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
  a {
    margin: auto;
  }
  .icon {
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
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    li {
      line-height: 25px;
      &:hover {
        color: #ffa800;
      }
    }
    .careers {
      position: relative;
      &:hover {
        div {
          display: block;
        }
      }
      div {
        position: absolute;
        left: -143%;
        text-align: center;
        width: max-content;
        background-color: black;
        top: -86%;
        padding: 25px;
        color: #ffa800;
        display: none;
      }
    }
  }
`;
export default Footer;
