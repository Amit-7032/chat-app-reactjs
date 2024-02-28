import React from 'react';
import Message from './Message';

const Chat = ({ messages }) => {
  return (
    <div className="chat">
     <h2>Chat Messages</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <div>
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
