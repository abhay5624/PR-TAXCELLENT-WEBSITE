import React from "react";
import styled from "styled-components";
const Service1 = () => {
  return (
    <Service>
      <h1 id="a">Global Business Services</h1>
      <h1 id="b">Risk Advisory Services</h1>
      <h1 id="c">Transactions Advisory</h1>
      <h1 id="d">Setup Advisory</h1>
      <h1 id="e">Taxation Advisory</h1>
    </Service>
  );
};
const Service = styled.div`
  display: flex;
  color: black;
  margin-left: 10px;
  h1 {
    font-size: 17px;
    text-align: center;
    margin: 0%;
    padding: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #a {
    width: 25%;
    background-color: #efefef;
  }
  #b {
    width: 25%;
    background-color: #e8e6e6;
  }
  #c {
    width: 25%;
    background-color: #e0e0e0;
  }
  #d {
    width: 25%;
    background-color: #d4d2d2;
  }
  #e {
    width: 25%;
    background-color: #c6c5c5;
  }
`;

export default Service1;
