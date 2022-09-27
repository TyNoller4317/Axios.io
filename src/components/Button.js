import React from "react";

export const Button = ({ styleClass, value }) => {
  return <button className={`btn ${styleClass}`}>{value}</button>;
};
