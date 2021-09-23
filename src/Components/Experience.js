import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faUsers,
  faLaughBeam,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import CountUp from "react-countup";
const Experience = () => {
  return (
    <Exp>
      <div>
        <FontAwesomeIcon icon={faTrophy} size="5x" className="icon" />
        <h1>
          <CountUp
            className="account-balance"
            start={0}
            end={10}
            duration={2}
            delay={3}
            useEasing={true}
            useGrouping={true}
            separator=" "
            decimal=","
          />
          +
        </h1>
        <h3>YEARS OF EXPERIENCE</h3>
      </div>
      <div>
        <FontAwesomeIcon icon={faUsers} size="5x" className="icon" />
        <h1>
          <CountUp
            className="account-balance"
            start={0}
            end={20}
            duration={2}
            delay={3}
            useEasing={true}
            useGrouping={true}
            separator=" "
            decimal=","
          />
          +
        </h1>
        <h3>TEAM'S</h3>
      </div>
      <div>
        <FontAwesomeIcon icon={faLaughBeam} size="5x" className="icon" />
        <h1>
          <CountUp
            className="account-balance"
            start={0}
            end={150}
            duration={2}
            delay={3}
            useEasing={true}
            useGrouping={true}
            separator=" "
            decimal=","
          />
          +
        </h1>
        <h3>SEMINARS</h3>
      </div>
    </Exp>
  );
};
const Exp = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  text-align: center;
  margin-top: 50px;
  font-family: "Josefin Sans", sans-serif;
  .icon {
    color: #0076f4;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default Experience;
