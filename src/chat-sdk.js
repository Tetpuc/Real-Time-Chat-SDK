// chat-sdk.js

class ChatSDK {
  constructor(config) {
    this.config = config;
    this.socket = null;
  }

  connect() {
    // Connect to the chat server
    this.socket = new WebSocket(this.config.websocketUrl);

    // Event listeners for WebSocket
    this.socket.onopen = () => {
      console.log('Connected to chat server');
    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
      // Handle incoming messages
      if (this.config.onMessageReceived) {
        this.config.onMessageReceived(message);
      }
    };

    this.socket.onclose = () => {
      console.log('Disconnected from chat server');
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  sendMessage(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
      console.log('Message sent:', message);
    } else {
      console.error('Socket connection not established or closed');
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      console.log('Disconnected from chat server');
    }
  }
}

// Export the ChatSDK class
module.exports = ChatSDK;
