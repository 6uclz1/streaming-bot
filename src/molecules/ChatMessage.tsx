import React from "react";
import "./../App.css";
import Icon from "../atoms/Icon/Icon";
import Message from "../atoms/Message/Message";

const style2: React.CSSProperties = {
  display: "flex",
  backdropFilter: "blur(5px)",
  margin: "8px",
  alignItems: "flex-start",
};

function ChatMessage(props: any) {
  const { text } = props;
  return (
    <div className={"animate"} style={style2}>
      <Icon />
      <Message text={text} />
    </div>
  );
}

export default ChatMessage;
