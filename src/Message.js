import React from 'react';

const Message = ({ sender, text }) => {
  return (
    <div className="message">
      <strong>{sender}:</strong> {text}
    </div>
  );
};

export default Message;
