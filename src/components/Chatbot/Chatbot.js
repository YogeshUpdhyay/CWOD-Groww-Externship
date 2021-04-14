import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Chatbots() {
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div>
      <Chatbot
        config={config}
        messageHistory={loadMessages()}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        saveMessages={saveMessages}
      />
    </div>
  );
}

export default Chatbots;
