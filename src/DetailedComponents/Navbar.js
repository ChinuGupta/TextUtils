import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      {/* EXAMPLE ->// This is not allowed and will cause an error! it is for  only read not write basically we can not change prope in child components
  props.name = 'New Name'; */}

      <nav className={`navbar  navbar-expand-lg  App ${props.toggleMode ? "dark" : "light"}  navbar-inverse`}>
        <div className="cont ">
          <a href="/">{props.title}</a>
        </div>
        <div className="container1 ">
          <ul className="ul">
            {/* onClick={(e) => { e.preventDefault()}}  it prevent the default behaviour of event on elements */}
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="form-check form-switch  designSwitch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //title and aboutText proptype must be string and here isRequired means you have to pass the value if default value is set then no problem
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps={
//   title:"set title here",
//   aboutText:"set about here"
// }
