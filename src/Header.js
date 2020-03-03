import React from "react";
import logo from "./logo.svg";
import "./Header.css";

export const Header = ({ clicks }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>{`The number of clicks is ${clicks}`}</p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);
