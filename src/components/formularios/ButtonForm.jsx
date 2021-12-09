import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonForm = ({ label, type, buttonContent, route }) => {
  return (
    <div className="formSend">
      <label>{label}</label>
      <Button type={type} buttonContent={buttonContent} route={route}></Button>
    </div>
  );
};

export default ButtonForm;
