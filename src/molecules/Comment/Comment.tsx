import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Message from "../../atoms/Message/Message";
import "./Comment.css";

const style: React.CSSProperties = {
  display: "flex",
  backdropFilter: "blur(5px)",
  margin: "8px",
  alignItems: "flex-start",
};

function ChatMessage(props: any) {
  const { text } = props;
  return (
    <div className={"chat-message"} style={style}>
      <Icon />
      <Message text={text} />
    </div>
  );
}

export default ChatMessage;
