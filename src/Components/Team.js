import React from "react";
import Card from "./Card";
import image1 from "../img/profiles/profile1.jpg";
import image2 from "../img/profiles/profile2.jpg";
import styled from "styled-components";
const Team = ({ description, width }) => {
  return (
    <Teammember>
      <h2>Our Team</h2>
      <Cards>
        <Card
          name="Rahul"
          profile={image1}
          post="Partners"
          description={description[0]}
          width={width}
        />
        <Card
          name="Prashant"
          profile={image2}
          post="Partners"
          description={description[1]}
          width={width}
        />
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
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export default Team;
