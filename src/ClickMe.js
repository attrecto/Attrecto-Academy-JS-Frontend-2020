import React from "react";
import "./ClickMe.css";

export const ClickMe = ({ clicks, setClicks }) => {
  console.log("click me functional component");
  return (
    <div className="click-me-container">
      <div className="clicks">{`The number of clicks is ${clicks}`}</div>
      <button className="click-button" onClick={setClicks}>
        Click me
      </button>
    </div>
  );
};
