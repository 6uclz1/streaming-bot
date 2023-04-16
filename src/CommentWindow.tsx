import ChatMessage from "./molecules/ChatMessage";
import React, { useRef, useEffect } from "react";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  height: "-webkit-fill-available",
  maxHeight: "540px",
  padding: "10px",
  margin: "10px",
  // boxShadow: "inset 0px 15px 25px 1 rgba(0, 0, 0, 0.5)",
  borderRadius: "32px",
};

function CommentWindow(props: any) {
  const { messages } = props;
  const chatRef: any = useRef(null);

  useEffect(() => {
    if (chatRef.current != null) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div style={style} ref={chatRef}>
      {messages.map((message: any, index: any) => (
        <ChatMessage key={index} text={message.text} />
      ))}
    </div>
  );
}

export default CommentWindow;
