import React from "react";
import styled from "styled-components";
const Card = ({ name, profile, post, description, width }) => {
  return (
    <Cardstyle style={{ width: `${width}` }}>
      <img src={profile} alt="" />
      <h4 className="name">{name}</h4>
      <h3>{post}</h3>
      <p>{description}</p>
    </Cardstyle>
  );
};
const Cardstyle = styled.div`
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);

  margin: auto;
  padding: 50px;
  .name {
    width: 100%;
    font-size: 20px;
    padding: 5px;
    background-color: #ffa800;
    color: white;
    text-align: center;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin: auto;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
  }
`;

export default Card;
