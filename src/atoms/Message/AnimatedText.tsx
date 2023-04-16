import React, { useState, useEffect } from "react";

const style: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "5px 5px 15px 0 rgba(0, 0, 0, 0.3)",
  textShadow: "1px 1px 2px #808080",
  wordBreak: "break-all",
  height: "80px",
  color: "#333",
};

interface AnimatedTextProps {
  text: string;
  speed: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [textPosition, setTextPosition] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (textPosition < text.length) {
        setTextPosition(textPosition + 1);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [textPosition, text.length, speed]);

  useEffect(() => {
    setDisplayText("");
    setTextPosition(0);
  }, [text]);

  useEffect(() => {
    setDisplayText(text.substring(0, textPosition));
  }, [textPosition, text]);

  return <div style={style}>{displayText}</div>;
};

export default AnimatedText;
