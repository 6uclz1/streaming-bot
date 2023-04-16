import React from "react";
import logo from "./../../logo.svg";

const style: React.CSSProperties = {
  display: "flex",
  width: "64px",
};

const Icon = () => {
  return <img style={style} src={logo} alt="" />;
};

export default Icon;
