import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backimage from "../img/LIGHT.jpeg";
const Query = () => {
  return (
    <Querypage>
      <Gapspace></Gapspace>
      <Queryheading
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
        }}
      >
        <h2> Query</h2>
        <h3>
          <Link to="/">Home</Link> / Query
        </h3>
      </Queryheading>
      <QueryContent>
        <h1>:: QUERY SHEET ::</h1>
        <form name="query" method="post" data-netlify="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="query" />
          <Inputstyled
            type="text"
            name="name"
            placeholder="ENTER NAME"
            required
          />
          <Inputstyled
            type="text"
            name="DESIGNATION"
            placeholder="DESIGNATION"
          />
          <Inputstyled
            type="text"
            name="ORGANIZATION"
            placeholder="ORGANIZATION"
          />
          <Inputstyled
            type="text"
            name="ADDRESS"
            placeholder="OFFICE ADDRESS"
            required
          />
          <Inputstyled
            type="text"
            name="TELEPHONE NUMBER"
            placeholder="TELEPHONE NUMBER"
          />
          <Inputstyled
            type="text"
            name="NUMBER"
            placeholder="MOBILE"
            required
          />
          <Inputstyled type="email" name="MAIL" placeholder="EMAIL" required />
          <Inputstyled
            type="text"
            name="SUBJECT"
            placeholder="SUBJECT"
            required
          />
          <Areastyle
            name="message"
            cols="30"
            rows="10"
            placeholder="ENTER YOUR MESSAGE"
            required
          ></Areastyle>
          <br />
          <Labelstyled htmlFor="isQuery">
            Query
            <input
              style={{ borderRadius: "50%" }}
              type="checkbox"
              name="isQuery"
              id="isQuery"
              required
            />
          </Labelstyled>

          <br />
          <Submitbttn type="submit">SUBMIT</Submitbttn>
        </form>
      </QueryContent>
    </Querypage>
  );
};
const Querypage = styled.div`
  form {
    width: 80%;
    margin: auto;
  }
`;
const QueryContent = styled.div`
  width: 80%;
  margin: auto;
  h1 {
    text-align: center;
  }
`;
const Gapspace = styled.div`
  height: 140px;
`;
const Queryheading = styled.div`
  background-color: #eed814b0;
  background-position: 50%;
  color: white;
  padding: 30px;
  background-position: 10%;
  background-blend-mode: multiply;
  a {
    text-decoration: none;
    color: #ffa800;
  }
`;
const Inputstyled = styled.input`
  width: 40%;
  padding: 10px 20px;
  margin: 3px;
  border-color: #a0a0a0;
  border-width: 1px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Submitbttn = styled.button`
  color: white;
  background-color: #ffa800;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  margin: 3px;
`;
const Areastyle = styled.textarea`
  width: 90%;
  margin: 3px;
  @media (max-width: 768px) {
    width: 105%;
  }
`;
const Labelstyled = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
`;
export default Query;
