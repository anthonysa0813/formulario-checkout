import React from "react";

const Button = ({ type, route, buttonContent }) => {
  return (
    <button type={type} to={route} className="buttonRoute">
      {buttonContent}
    </button>
  );
};

export default Button;
