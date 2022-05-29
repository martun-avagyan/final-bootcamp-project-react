import React from "react";
import register from "../helpers/register";
import { useState } from "react";
import { InputBox } from "./InputBox.styled";
import { FirstSquare } from "./styled/firstSquare.styled";
import { MiddleSquare } from "./styled/middleSquare.styled";
import { StyledText } from "./styled/styledText.styled";
import { Link } from "react-router-dom";
import { StyledFooter } from "./styled/StyledFooter.styled";
export default function SignUp() {
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
        {" "}
        <StyledText></StyledText>
        <MiddleSquare></MiddleSquare>
        <FirstSquare></FirstSquare>
        <InputBox>
          Welcome to You Shop
          <div style={{ marginLeft: "70px" }}>
            <div>
              <Link to="/">Sign In</Link>{" "}
            </div>
            <div style={{ borderBottom: "solid 0.5px white" }}>Sign Up</div>
          </div>
          <input
            onChange={(input) => setEmail(input.target.value)}
            type="text"
            name="email"
            placeholder="Please enter your email"
          />
          <input
            onChange={(input) => setPassword(input.target.value)}
            type="password"
            name="password"
            placeholder="Please enter your password"
          />
          <div
            style={{ textAlign: "center", marginLeft: "40%", marginTop: "5 %" }}
            onClick={() => register(email, password)}
          >
            Register
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
