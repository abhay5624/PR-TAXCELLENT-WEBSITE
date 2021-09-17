import React from "react";
import "react-slideshow-image/dist/styles.css";
import Slidesbar from "../Components/Slidesbar";
import Service1 from "../Components/Service1";
import Wwr from "../Components/Wwr";
import styled from "styled-components";
import Services from "../Components/Services";
import Experience from "../Components/Experience";
import Social_media from "../Components/Social_media";
import Team from "../Components/Team";
const Home = () => {
  return (
    <div>
      <Slidesbar />
      <Service1 />
      <Extra>
        <h1>
          We are present in 80+ countries worldwide via our global alliance and
          network.
        </h1>
      </Extra>
      <Wwr />
      <Services />
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
  background-color: #0076f4;
  padding: 5px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 11px;
  text-align: center;
`;
export default Home;
