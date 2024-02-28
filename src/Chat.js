import React, { useState } from 'react';
import Message from './Message';

const Chat = ({ messages }) => {
  const [inputField, setInputField] = useState('');
  const [chatMessage, setChatMessage] = useState([]);

  const handleChange = (e) => {
    setInputField(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputField.trim() !== '') {
      setChatMessage([...chatMessage, inputField]);
      setInputField('');
    }
  }
  return (
    <div className="chat">
     <h2>Chat Messages</h2>
      <div className="messages">
        {chatMessage.map((message, index) => (
          // <Message key={index} text={message.text} sender={message.sender} />
        <div className="chat-message">
          <p>{message}</p>
        </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea type="text" placeholder="Type your message..." rows={5} value={inputField} onChange={handleChange} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
