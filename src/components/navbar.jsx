import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand page-scroll" to="/" href="#page-top">
            <img className="navbar-logo" src="img\logo_side.png" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
