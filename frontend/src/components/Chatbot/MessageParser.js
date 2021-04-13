class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hey") ||
      lowerCase.includes("hello")
    ) {
      return this.actionProvider.greet();
    }

    return this.actionProvider.handleMessage(message);
  }
}

export default MessageParser;
