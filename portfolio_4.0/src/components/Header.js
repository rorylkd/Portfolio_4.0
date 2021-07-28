import React from "react";
import profilepic from "../assets/profilepic2_compressed.jpg";
import Nav from "./Navigation";

const imgStyle = {
  height: "157px",
  width: "170px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "50%",
  borderStyle: "solid",
  marginBottom: "25px",
};

const nameStyle = {
  display: "block",
  fontFamily: "monospace",
  fontSize: "35px",
  color: "black",
  textAlign: "center",
};

export default function Header() {
  console.log("This is the header!");

  return (
    <header>
      <div>
        <p style={nameStyle}>Rory Donaldson</p>
        <img src={profilepic} alt="Profile Pic" style={imgStyle}></img>
      </div>
      <Nav />
    </header>
  );
}
