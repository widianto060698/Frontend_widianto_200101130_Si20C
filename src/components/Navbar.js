import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Profile
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {" "}
            <Link to="/mahasiswa">MAHASISWA</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
