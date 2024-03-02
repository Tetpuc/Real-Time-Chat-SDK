# Real-Time Chat SDK

Real-Time Chat SDK is a lightweight JavaScript library for integrating real-time chat functionality into your Node.js applications. It provides a simple interface for establishing WebSocket connections, sending and receiving messages, and managing the chat session.

## Installation

Install the package via npm:

```bash
npm install real-time-chat-sdk


## Usage

```javascript
const ChatSDK = require('real-time-chat-sdk');

// Configuration for the chat SDK
const config = {
  websocketUrl: 'ws://chat-server-url', // WebSocket server URL
  onMessageReceived: (message) => {
    console.log('Received new message:', message);
    // Custom logic to handle incoming messages
  },
};

// Instantiate the ChatSDK with the configuration
const chatClient = new ChatSDK(config);

// Connect to the chat server
chatClient.connect();

// Example: Sending a message
const message = {
  sender: 'user123',
  text: 'Hello, world!',
};
chatClient.sendMessage(message);

// Disconnect from the chat server
// chatClient.disconnect();

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
