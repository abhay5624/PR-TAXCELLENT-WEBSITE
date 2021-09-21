import React from "react";
import styled from "styled-components";
const Card = ({ fname, lname, profile }) => {
  return (
    <Cardstyle style={{ width: `50%` }}>
      <div
        className="profilepic"
        style={{ backgroundImage: `url(${profile})`, backgroundSize: "cover" }}
      ></div>

    </Cardstyle>
  );
};
const Cardstyle = styled.div`
  margin: auto;
  .name {
    width: 200px;
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #ffa800;
    color: white;
    text-align: center;
    text-transform: capitalize;
    margin: auto;
  }
  .profilepic {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: auto;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
  }
`;

export default Card;
