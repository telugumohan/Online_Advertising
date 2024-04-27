import React, { useState } from "react";
import "./style.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import AddType from "./AddType";
const NavBar = ({ name, setName }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setName(""); // Set name to an empty string
    navigate("/signin");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossOrigin="anonymous"
      ></script>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ width: "70px", height: "auto" }}
          />
        </div>

        <a className="navbar-brand" href="/">
          Online Ads Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href="/view">
                View Hotels
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button> */}
            {name === "" && (
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                id="btn1"
                type="submit"
              >
                <a href="/signin">Sign In</a>
              </button>
            )}
            {name === "" && (
              <button className="btn" id="btn2">
                <a href="/signup">Sign Up</a>
              </button>
            )}
            {name !== "" && (
              <div>
                {name}
                <button className="btn" id="btn2" onClick={handleLogout}>
                  LogOut
                </button>
              </div>
            )}
            {/* <div className="user-logo" id="ulogo"onClick={handleClick}>X</div> */}
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
