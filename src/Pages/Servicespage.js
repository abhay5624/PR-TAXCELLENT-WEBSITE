import React from "react";
import Services from "../Components/Services";
import servImage from "../img/earthh.jpeg";
import styled from "styled-components";
const Servicespage = () => {
  return (
    <div>
      <Gapspace></Gapspace>
      <Services servImage={servImage} />
    </div>
  );
};
const Gapspace = styled.div`
  height: 140px;
`;

export default Servicespage;
