import React from "react";
import styled from "styled-components";

export const Button = ({ styleClass, value }) => {
  return <button className={`btn ${styleClass}`}>{value}</button>;
};
