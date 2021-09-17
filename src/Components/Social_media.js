import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutubeSquare,
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
        <h1>P. R. Social Media</h1>
        <h3>There is planty you can find....</h3>
        <h3>
          Just follow our page on Twitter and other social media plateform
        </h3>
        <div>
          <FontAwesomeIcon icon={faFacebookSquare} size="7x" />
          <FontAwesomeIcon icon={faTwitterSquare} size="7x" />
          <FontAwesomeIcon icon={faLinkedin} size="7x" />
          <FontAwesomeIcon icon={faYoutubeSquare} size="7x" />
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
    }
  }
`;
export default Social_media;
