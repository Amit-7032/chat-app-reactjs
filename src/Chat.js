import React, { useState } from 'react';
import Message from './Message';

const Chat = ({ messages }) => {
  const [inputField, setInputField] = useState('');
  const [chatMessage, setChatMessage] = useState([]);

  const handleChange = (e) => {
    setInputField(e.target.value);
  }

  const handleSubmit = () => {
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
          <div key={index}>
            {message}
          </div>
        ))}
      </div>
      <div>
        <textarea type="text" placeholder="Type your message..." rows={5} value={inputField} onChange={handleChange} />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
