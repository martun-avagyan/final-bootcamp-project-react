import React from "react";
import { useState } from "react";
import login from "../helpers/login";
import { InputBox } from "./InputBox.styled";
import { FirstSquare } from "./styled/firstSquare.styled";
import { MiddleSquare } from "./styled/middleSquare.styled";
import { StyledText } from "./styled/styledText.styled";
import { StyledFooter } from "./styled/StyledFooter.styled";
import { Link } from "react-router-dom";
export default function LogIn() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  return (
    <>
      <div
        style={{
          display: "flex",
          top: "300px",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <StyledText></StyledText>
        <MiddleSquare></MiddleSquare>
        <FirstSquare></FirstSquare>
        <InputBox>
          Welcome to You Shop
          <div style={{ marginLeft: "70px" }}>
            <div style={{ borderBottom: "solid 0.5px white" }}>Sign In </div>
            <div>
              <Link to="/SignUp">Sign Up</Link>
            </div>
          </div>
          <input
            onChange={(input) => setEmail(input.target.value)}
            type="text"
            name="email"
            placeholder="Please enter your email"
          ></input>
          <input
            onChange={(input) => setPassword(input.target.value)}
            type="password"
            name="password"
            placeholder="Please enter your password"
          ></input>
          <div
            style={{ textAlign: "center", marginLeft: "40%", marginTop: "5 %" }}
            onClick={() => login(email, password)}
          >
            Login
          </div>
        </InputBox>
        <FirstSquare></FirstSquare>
        <MiddleSquare></MiddleSquare>
        <StyledText></StyledText>
      </div>
      <StyledFooter>
        <div
          style={{
            display: "flex",
            top: "300px",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>EVERY</h1>

          <h2>thing </h2>
          <h2>where </h2>
          <h2>time </h2>
        </div>
      </StyledFooter>
    </>
  );
}
