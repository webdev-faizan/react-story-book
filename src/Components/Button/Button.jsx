import React from "react";
import "./Button.css";
const Button = (props) => {
  const { variant = "danger", children, ...rest } = props;
  return (
    <buton className={`button ${variant}`} {...rest}>
      {children}s
    </buton>
  );
};

export default Button;

// export const Primary = {
//     args: {
//       primary: true,
//       label: 'Click',
//       background: 'red'
//     }
//     };