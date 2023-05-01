import React from "react";
import "./App.css";
import Title from "./atoms/Title/Title";
import CommentWindow from "./molecules/CommentWindow/CommentWindow";
import Background from "./atoms/Background/Background";
import CharactorMessageWindow from "./organisms/CharactorMessageWindow/CharactorMessageWindow";

function App() {
  return (
    <div className="App">
      <Background>
        <div className="main-box">
          <div className="left-box">
            <Title />
            <CommentWindow />
            <CharactorMessageWindow />
          </div>
          <div className="right-box"></div>
        </div>
      </Background>
    </div>
  );
}

export default App;
