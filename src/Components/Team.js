import React from "react";
import Card from "./Card";
import image1 from "../img/RAVI.jpg";
import image2 from "../img/Prashant.jpg";
import image3 from "../img/partner3.jpg";
import styled from "styled-components";
const Team = ({ description, width }) => {
  return (
    <Teammember>
      <h2>Our Team's</h2>
      <Cards>
        <Card
          fname="PRASHANT"
          lname="AGGARWAL"
          profile={image2}
          post="Partner"
        />

        <Card fname="RAVI " lname="MALIK" profile={image1} post="Partner" />
      </Cards>
    </Teammember>
  );
};
const Teammember = styled.div`
  h2 {
    text-align: center;
    font-size: 30px;
  }
`;
const Cards = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
    width: 100%;
  }
`;
export default Team;
