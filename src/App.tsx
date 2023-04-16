import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./atoms/Title/Title";
import CommentWindow from "./CommentWindow";
import AnimatedText from "./atoms/Message/AnimatedText";

const loremIpsum = require("lorem-ipsum").loremIpsum;

function App() {
  const [messages, setMessages]: any[] = useState([]);
  const [response, setResponse]: any[] = useState("");

  const text: String = loremIpsum({
    count: 1, // 生成する段落数
    units: "paragraphs", // 段落数を指定
    format: "plain", // テキストの形式（'html'または'plain'）
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMessage = {
        text: "Hello! " + new Date() + " " + text,
      };
      setMessages([...messages, newMessage]);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [messages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setResponse("Hello! " + new Date() + " " + text);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [response]);

  useEffect(() => {
    if (messages.length > 10) {
      setMessages((prevMessages: string | any[]) => prevMessages.slice(1));
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="background-box">
        <div className="main-box">
          <div className="left-box">
            <div className="contents-box">
              <Title />
              <CommentWindow messages={messages} />
            </div>
            <AnimatedText text={response} speed={10} />
          </div>
          <div className="right-box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
