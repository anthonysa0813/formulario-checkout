import React from "react";

const FieldInput = ({ name, type, contentName }) => {
  return (
    <div className="formField">
      <label htmlFor={name}>{contentName}</label>
      <input type={type} />
    </div>
  );
};

export default FieldInput;
