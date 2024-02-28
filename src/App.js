import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  const contacts = [
    "Contact 1",
    "Contact 2",
    "Contact 3",
    "Contact 4",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
    "Contact 5",
  ];
  const messages = [
    { sender: "Sender", text: "Message 1" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
    { sender: "Receiver", text: "Message 2" },
  ];

  return (
    <>
     <div className="app">
        <Navbar/>
        <div className="container">
          <Sidebar contacts={contacts} />
          <Chat messages={messages} />
        </div>
      </div>
    </>
  );
};

export default App;
