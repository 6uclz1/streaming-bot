import React from "react";
import "./../../App.css";

const style: React.CSSProperties = {
  height: "-webkit-fill-available",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  borderRadius: "12px",
  margin: "24px 32px 16px 36px",
  fontSize: "48px",
  color: "#fff",
  fontFamily: "Arial Black",
  textShadow: "4px 2px 3px #333",
};

function Title() {
  return <div style={style}>Comment</div>;
}

export default Title;
