// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#333",
    color: "white",
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? "yellow" : "white",
    textDecoration: "none",
    fontWeight: "bold",
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle("/")}>
        Home
      </Link>
      <Link to="/about" style={linkStyle("/about")}>
        About
      </Link>
    </nav>
  );
}
