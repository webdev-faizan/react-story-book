import React from "react";
import "./Input.css";
const Input = (props) => {
  const { size, ...rest } = props;
  return <input type="text" className={`input ${size}`} {...rest} />;
};

export default Input;
