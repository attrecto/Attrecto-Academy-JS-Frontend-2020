import React from "react";
import Button from "../button/Button";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const EditorTitle = ({
  className,
  title,
  buttonTitle,
  navLink,
  buttonClick,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "d-flex justify-content-between align-items-center mt-3 mb-3",
        className
      )}
    >
      <h2>{title}</h2>
      {navLink ? (
        <NavLink to={navLink}>
          <Button {...props}>{buttonTitle}</Button>
        </NavLink>
      ) : null}
      {!navLink && buttonClick ? (
        <Button onClick={buttonClick} {...props}>
          {buttonTitle}
        </Button>
      ) : null}
    </div>
  );
};

export default EditorTitle;
