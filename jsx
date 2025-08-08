// App.js
import React, { useState } from "react";
import "./styles.css"; // optional if you want custom styling

function ChatApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      sender: "user",
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: `You said: "${newMessage.text}"`,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;

// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import ChatApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChatApp />);

