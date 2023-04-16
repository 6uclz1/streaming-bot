import React from "react";
import charactor from "./charactor.png";
import "../../App.css";

const style: React.CSSProperties = {
  position: "absolute",
  top: "60px",
  left: "1160px",
  height: "934px",
  objectFit: "cover",
};

function Charactor() {
  return <img style={style} src={charactor} alt="" />;
}

export default Charactor;
