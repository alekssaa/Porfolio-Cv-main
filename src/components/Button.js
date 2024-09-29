import React from "react";

const Button = ({ info, type }) => {
  return (
    <button className="btn" type={type ? `${type}` : null}>
      {info}
    </button>
  );
};

export default Button;
