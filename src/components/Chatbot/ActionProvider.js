import axios from "../../axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello");
    this.addMessageToBotState(message);
  };

  raiseTicket = () => {
    console.log("raise ticket");
    const message = this.createChatBotMessage(
      "No FAQs found related to this topic. You can a raise a ticket.",
      {
        widget: "raiseTicket",
        withAvatar: true,
        delay: 500,
      }
    );
    this.addMessageToBotState(message);
  };

  handleFaqTap = (faqId) => {
    axios.get(`/api/v1/faq/${faqId}`).then((res) => {
      if (res.status === 200) {
        const message = this.createChatBotMessage(res.data.answer);
        this.addMessageToBotState(message);
      } else {
        const message = this.createChatBotMessage("No relavent FAQs found", {
          widget: "raiseTicket",
          withAvatar: true,
          delay: 500,
        });
        this.addMessageToState(message);
      }
    });
  };

  handleMessage = (message) => {
    let config = {
      headers: { accesstoken: localStorage.getItem("accesstoken") },
      params: {
        message: message,
      },
    };
    axios.get(`/api/v1/faq`, config).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        if (res.data.reply) {
          const message = this.createChatBotMessage(res.data.reply.answer);
          this.addMessageToBotState(message);
        } else {
          if (res.data.faqs) {
            this.setState((state) => ({
              ...state,
              faqs: res.data.faqs,
            }));
            const message = this.createChatBotMessage("Maybe these will help", {
              widget: "faqs",
            });
            this.addMessageToBotState(message);
          } else {
            const message = this.createChatBotMessage(
              "No relavent FAQs found",
              {
                widget: "raiseTicket",
                withAvatar: true,
                delay: 500,
              }
            );
            this.addMessageToBotState(message);
          }
        }
      } else {
        const message = this.createChatBotMessage({
          widget: "raiseTicket",
          withAvatar: true,
          delay: 500,
        });
        this.addMessageToState(message);
      }
    });
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: "",
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: "",
      }));
    }
  };
}

export default ActionProvider;
