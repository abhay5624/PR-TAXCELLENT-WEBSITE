import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutubeSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import imagessocial from "../img/Social.jpg";
const Social_media = () => {
  return (
    <Social
      style={{
        backgroundImage: `url(${imagessocial})`,
        backgroundSize: "cover",
      }}
    >
      <div className="cover">
        <h1>We Are At Social Media</h1>
        <h3>There is planty you can find....</h3>
        <h3>Just follow our page on Twitter and other social media platform</h3>
        <div>
          <a
            href="https://www.facebook.com/prtaxcellent-107241941709951"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="6x" />
          </a>
          <a
            href="https://twitter.com/RTaxcellent"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="6x" />
          </a>
          <a
            href="https://www.linkedin.com/search/results/all/?keywords=p%20r%20taxcellent%20and%20associates&origin=RICH_QUERY_SUGGESTION&position=0&searchId=1558688e-ee6c-4f4c-8d0e-2b86ca5511b1&sid=M18"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="6x" />
          </a>
          <a
            href="https://www.instagram.com/prtaxcellent/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faInstagram} size="6x" />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <FontAwesomeIcon icon={faYoutubeSquare} size="6x" />
          </a>
        </div>
      </div>
    </Social>
  );
};
const Social = styled.div`
  position: relative;
  .cover {
    text-align: center;
    padding: 40px;
    color: white;
    background-color: #0000005e;
    font-family: "Josefin Sans", sans-serif;
    h1 {
      color: #ffa800;
    }
    div {
      color: #ffa800;
      width: 80%;
      display: flex;
      justify-content: space-evenly;
      margin: auto;
      @media (max-width: 768px) {
        width: 100%;
        a {
          font-size: 10px;
          margin: 3%;
        }
      }
    }
  }
`;
export default Social_media;
