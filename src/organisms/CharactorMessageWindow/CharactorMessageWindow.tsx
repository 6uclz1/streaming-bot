import React, { useState, useEffect } from "react";
import AnimatedText from "../../atoms/Message/AnimatedText";
import { generateDummyText } from "../../services/CharactorMessage/CharactorMessage";

const CharactorMessageWindow: any = () => {
  const [response, setResponse]: any[] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // TODO: APIを使用した取得方法に変更する
      const responseText = generateDummyText();
      setResponse(responseText);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [response]);

  return <AnimatedText text={response} speed={10} />;
};

export default CharactorMessageWindow;
