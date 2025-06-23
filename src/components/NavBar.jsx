import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">MovieHub</div>

      {/* ✅ Toggle Button for Mobile */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* ✅ Navigation Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/favorite" className="nav-link" onClick={closeMenu}>
          Favorites
        </Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
