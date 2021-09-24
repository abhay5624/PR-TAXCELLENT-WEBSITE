import React from "react";
import styled, { keyframes } from "styled-components";
import video from "./video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
const Videopr = ({ setscroll }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  if (isMobile) {
    setscroll(true);
  }
  return (
    <Videoplayer
      onScroll={() => {
        setscroll(true);
      }}
    >
      <video width="100%" autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div
        onClick={() => {
          setscroll(true);
        }}
      >
        <h1>Click to scroll</h1>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2x"
          style={{ marginTop: "-2px" }}
        />
      </div>
    </Videoplayer>
  );
};
const animationshow = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const Videoplayer = styled.div`
  display: block;
  z-index: 109;
  position: fixed;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  background-color: #000000;
  div {
    cursor: pointer;
    z-index: 200;
    position: fixed;
    top: 75%;
    left: auto;
    font-size: 20px;
    color: #b4b4b4;
    font-weight: 900;
    font-family: "Oswald", sans-serif;
    width: 100%;
    opacity: 0;
    text-align: center;
    animation-name: ${animationshow};
    animation-duration: 3s;
    animation-delay: 5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;
export default Videopr;
