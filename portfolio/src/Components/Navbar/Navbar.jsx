import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="left">
        <p>H.M</p>
      </Link>
      <div className="right">
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Project">Project</Link>
        <Link to="/Certificates">Certificates</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
