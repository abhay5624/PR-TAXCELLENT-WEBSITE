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
const Wwr = () => {
  const list = useRef(null);
  const animationhold = (e) => {
    e.target.style.animationName = "";
    console.log(e.target.style);
  };

  return (
    <Wwrstyle id="trending">
      <div className="who">
        <h1>WHO WE ARE ?</h1>
        <p>
          We are a team of proficient and dedicated chartered accountants based
          in New Delhi as well as other major cities in India. We typically
          handle all the branches of accounting and auditing including accounts
          outsourcing, Business taxation, corporate compliance, company
          formation in India, starting a business in India, registration of
          foreign companies, taxation of expatriates, etc.
        </p>
        <h2>WHY CHOOSE US ?</h2>
        <p>
          This is a team of highly-qualified and experienced professionals who
          add value to your business with their skill and efficiency. We are
          here to offer you:
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} /> A fresh and practical
            approach to our clients’ tax and account maintenance planning
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} />A customized service based
            on individual clients
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} /> Innovative solutions to
            make things simpler
          </li>
        </ul>
      </div>
      <div className="trand">
        <div>
          <h2>Trending</h2>
        </div>
        <div className="news">
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
  }
  .trand {
    width: 35%;
    margin: 10px;
    height: 400px;
    overflow-y: hidden;
    .news {
      overflow-y: hidden;
      background-color: white;
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
      background-color: #0076f4;
      color: white;

      text-align: center;
      h2 {
        padding: 4px;
      }
    }
  }
`;
const animationGoingholder = (e) => {
  e.target.animationName = NewsAnimation;
};
export default Wwr;
