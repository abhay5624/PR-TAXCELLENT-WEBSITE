import React from "react";
import "react-slideshow-image/dist/styles.css";
import Slidesbar from "../Components/Slidesbar";

import Wwr from "../Components/Wwr";
import styled from "styled-components";
import Services from "../Components/Services";
import Experience from "../Components/Experience";
import Social_media from "../Components/Social_media";
import Team from "../Components/Team";
import servImage from "../img/services.jpeg";

const Home = () => {
  return (
    <div>
      <Slidesbar />

      <Extra>
        <h1>
          We are present in 80+ cities within india via our alliance and
          network.
        </h1>
      </Extra>
      <Wwr />
      <Services servImage={servImage} />
      <Experience />
      <Social_media />
      <Team description={["", ""]} width="40%" />
    </div>
  );
};
const Extra = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  color: white;
  background-color: #48484c;
  padding: 5px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 11px;
  text-align: center;
  h1 {
    font-size: 20px;
  }
`;
export default Home;
