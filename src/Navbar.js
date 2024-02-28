import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Chat App</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;