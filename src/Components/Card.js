import React from "react";
import styled from "styled-components";
const Card = ({ fname, lname, profile, post, description, width }) => {
  return (
    <Cardstyle style={{ width: `${width}` }}>
      <div
        className="profilepic"
        style={{ backgroundImage: `url(${profile})`, backgroundSize: "cover" }}
      ></div>

      <h6 className="name">{fname}</h6>
      <h6 className="name">{lname}</h6>
    </Cardstyle>
  );
};
const Cardstyle = styled.div`
  margin: auto;

  padding: 25px;
  margin: 3px;
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
