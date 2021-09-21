import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faNewspaper,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "styled-components";
import { useRef } from "react";
import TrndImg from "../img/Update.jpeg";
const Wwr = () => {
  const list = useRef(null);
  const animationhold = (e) => {
    e.target.style.animationName = "";
    console.log(e.target.style);
  };

  return (
    <Wwrstyle id="trending">
      <div className="who">
        <h1>WELCOME TO P R TAXCELLENT & ASSOCIATES </h1>
        <p>
          P R Taxcellent & Associates firm was established in INDIA in 2010 and
          has currently become on of the leading firm in North India. The firm
          operates from its offices situated in Delhi, Uttar Pradesh, Haryana
          and offers its clients a full range of services including financial
          and business advisory, tax and regulatory, and risk advisory services.
        </p>
        <p>
          P R Taxcellent & Associates has a client base of more than 200. The
          firm approach to service delivery helps to provide value added
          services to clients. Our differentiation is derived from a rapid
          performance based, industry and technology enabled business advisory
          services delivered by talented professionals.
        </p>
        <h2>WHY CHOOSE US ?</h2>
        <p>
          We challenge our people to learn more, look deeper and offer them
          knowledge and training to help them learn something new every day. Our
          firm is a growing firm which offers wide variety of work and complete
          exposure to our team. We encourage them to have high aspirations and
          create a customized career graph. Creating a supportive and diverse
          workplace and a merit based equal opportunity environment is our
          target.
        </p>
        <p>
          We offer a variety of services, so we are looking for a variety of
          people – individuals who can bring new perspectives to existing
          scenarios, bright and creative thinkers.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} /> Professional Growth
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} /> Personal Development
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} /> Work Life Balance
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} /> Gender Sensitive
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} />
            Personalized mentoring
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} />
            Safe environment
          </li>
        </ul>
      </div>
      <div className="trand">
        <div>
          <h2>Trending</h2>
        </div>
        <div
          className="news"
          style={{
            backgroundImage: `url(${TrndImg})`,
            backgroundSize: "cover",
            backgroundPositionY: "150%",
          }}
        >
          <ul
            ref={list}
            onMouseEnter={animationhold}
            onMouseLeave={animationGoingholder}
          >
            <li>
              <span>
                <FontAwesomeIcon
                  icon={faLink}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <span>
                <h3>
                  Summarized View of Notifications Issued For Extension of GST
                  Compliances
                </h3>
              </span>
            </li>

            <li>
              <span>
                <FontAwesomeIcon
                  icon={faLink}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <span>
                <h3>ease of doing business in india</h3>
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <span>
                <h3> GST FAQs</h3>
                <p>
                  Advantages of registration to a taxpayer? Who are not liable
                  for registration under GST? and much mor
                </p>
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <span>
                <h3>Handbook on TDS provision under GST</h3>
                <p>
                  TDS generally means a certain registered person making payment
                  or crediting to the supplier’s account for supply of taxable
                  goods or services or both is required to deduct GST at source
                  if the contract value without taxes exceeds the threshold
                  limit.
                </p>
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <span>
                <h3>COVID impact on FS </h3>
                <p>
                  The COVID-19 outbreak has already had a significant effect on
                  the economies of affected countries and international
                  financial markets.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Wwrstyle>
  );
};
const NewsAnimation = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(-101%);
}
`;
const Wwrstyle = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  font-family: "Josefin Sans", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .who {
    width: 65%;

    h1 {
      font-size: 23px;
      color: #252323;
    }
    p {
      color: #777;
      text-align: justify;
      font-weight: 400;
      font-size: 13px;
      line-height: 1.7;
    }
    ul {
      color: #777;
      list-style: none;
      font-size: 13px;
      li {
        margin: 4px;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      h1 {
        font-size: 19px;
      }
      p {
        font-size: 17px;
      }
    }
  }
  .trand {
    width: 35%;
    margin: 10px;
    height: 400px;
    overflow-y: hidden;
    background-color: white;
    background-blend-mode: multiply;
    .news {
      overflow-y: hidden;
      background-color: #ffffffc8;
      background-blend-mode: screen;

      color: black;
      text-align: left;
    }
    ul {
      overflow-y: hidden;
      text-transform: capitalize;
      list-style: none;
      animation-name: ${NewsAnimation};
      animation-duration: 15s;
      animation-iteration-count: infinite;
      h3 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
      li {
        display: flex;
        align-items: center;
      }
    }
    div {
      background-color: #48484c;
      color: white;
      margin-bottom: 0%;
      text-align: center;
      h2 {
        padding: 4px;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 15px;
      ul {
        padding-left: 0%;
      }
    }
  }
`;
const animationGoingholder = (e) => {
  e.target.animationName = NewsAnimation;
};
export default Wwr;
