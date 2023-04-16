import ChatMessage from "../Comment/Comment";
import { generateDummyText } from "../../services/Comment/Comment";
import React, { useRef, useEffect, useState } from "react";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  height: "-webkit-fill-available",
  maxHeight: "540px",
  padding: "10px",
  margin: "10px",
  borderRadius: "32px",
};

function CommentWindow() {
  const chatRef: any = useRef(null);
  const [messages, setMessages]: any[] = useState([]);

  // コメントの取得を行う
  useEffect(() => {
    const intervalId = setInterval(() => {
      // TODO: APIを使用した形に変更する
      const commentText: any = generateDummyText;
      const newMessage = {
        text: commentText,
      };
      setMessages([...messages, newMessage]);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [messages]);

  // 10件以上コメントがあった場合に性能問題が発生しないように削除していく
  useEffect(() => {
    if (messages.length > 10) {
      setMessages((prevMessages: string | any[]) => prevMessages.slice(1));
    }
  }, [messages]);

  // 最新のコメントにスクロールを合わせる
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
