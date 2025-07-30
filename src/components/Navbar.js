import react from "react";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Website</h1>
      <ul className="nav-links">
        <li className="active-li"><a href="#home">Home</a></li>
        <li className="active-li"><a href="#about">About</a></li>
        <li className="active-li"><a href="#services">Services</a></li>
        <li className="active-li"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;