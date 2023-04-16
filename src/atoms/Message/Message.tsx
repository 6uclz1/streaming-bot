import React from "react";

const style: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  height: "-webkit-fill-available",
  display: "flex",
  flexDirection: "column",
  // margin: "8px 8px 8px 8px",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "5px 5px 15px 0 rgba(0, 0, 0, 0.3)",
  textShadow: "1px 1px 2px #808080",
  wordBreak: "break-all",
  color: "#333",
};

const Message = (props: any) => {
  const { text } = props;

  return (
    <div className={"animated-text"} style={style}>
      {text}
    </div>
  );
};

export default Message;
