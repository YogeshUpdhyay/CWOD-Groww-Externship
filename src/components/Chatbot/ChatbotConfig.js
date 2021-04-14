import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "./BotAvatar";
import Faqs from "./Widgets/Faq";
import RaiseTicket from "./Widgets/RaiseTicket";

const getGreeting = () => {
  if (localStorage.getItem("name")) {
    return `Hello ${localStorage.getItem("name")}. I am GrowwBot`;
  } else {
    return `Hello! I'm GrowwBot`;
  }
};

const config = {
  initialMessages: [
    createChatBotMessage(getGreeting()),
    createChatBotMessage("Perhaps these will help", {
      withAvatar: false,
      delay: 500,
      widget: "faqs",
    }),
  ],
  state: {
    faqs: null,
  },
  botName: "GrowwBot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00d09c",
    },
    chatButton: {
      backgroundColor: "#00d09c",
    },
  },
  widgets: [
    {
      widgetName: "faqs",
      widgetFunc: (props) => <Faqs {...props} />,
      mapStateToProps: ["faqs"],
    },
    {
      widgetName: "raiseTicket",
      widgetFunc: (props) => <RaiseTicket {...props} />,
    },
  ],
};

export default config;
