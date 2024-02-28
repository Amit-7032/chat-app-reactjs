import React from 'react';

const Sidebar = ({ contacts }) => {
  return (
    <div className="sidebar">
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
