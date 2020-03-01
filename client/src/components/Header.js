import React, { useState, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import Logo1 from "../images/Group 139@2x.png";
import Logo2 from "../images/Group 138@2x.png";
import "../App.css";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { AuthContext } from "./AuthContext";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, setUser, toggleAuth } = useContext(
    AuthContext
  );

  const rd = () => (<Redirect to="/administration" />);
  const logout = () => {
    setUser("");
    toggleAuth();
    sessionStorage.removeItem('mx');
  };

  if (props.location.pathname === "/book-venue") {
    return null;
  } else if (isAuthenticated === true && user.admin === true) {
    return (
      <>
        <header id="navbar">
          <div className="logo">
            <Link to="/">
              <img src={Logo1} alt="Book it" width="100" className="logo1" />
              <img src={Logo2} alt="Book it" width="120" className="logo2" />
            </Link>
          </div>
          <nav className={isOpen ? "show-nav" : "hide-nav"}>
            <ul>
              <li>
                <h5 className="text-white p-2">{user.name}</h5>
              </li>
              <li>
                <h5 className="text-white p-2">{user.company}</h5>
              </li>
              <li>
                <a href="/administration">Admin</a>
              </li>
              <li>
                <button onClick={logout} id="signIn">
                  Log Out
                </button>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="nav-icon" />
            ) : (
              <FaAlignRight className="nav-icon" />
            )}
          </button>
        </header>
      </>
    );
  } else if (isAuthenticated === false) {
    return (
      <>
        <header id="navbar">
          <div className="logo">
            <Link to="/">
              <img src={Logo1} alt="Book it" width="100" className="logo1" />
              <img src={Logo2} alt="Book it" width="120" className="logo2" />
            </Link>
          </div>
          <nav className={isOpen ? "show-nav" : "hide-nav"}>
            <ul>
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/#sign-up" id="signIn">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="nav-icon" />
            ) : (
              <FaAlignRight className="nav-icon" />
            )}
          </button>
        </header>
      </>
    );
  } else if (
    isAuthenticated === true ||
    props.location.pathname === "/administration"
  ) {
    return (
      <>
        <header id="navbar">
          <div className="logo">
            <Link to="/">
              <img src={Logo1} alt="Book it" width="100" className="logo1" />
              <img src={Logo2} alt="Book it" width="120" className="logo2" />
            </Link>
          </div>
          <nav className={isOpen ? "show-nav" : "hide-nav"}>
            <ul>
              <li>
                <h5 className="text-white p-2">{user.name}</h5>
              </li>
              <li>
                <h5 className="text-white p-2">{user.company}</h5>
              </li>
              <li>
                <button onClick={logout} id="signIn">
                  Log Out
                </button>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="nav-icon" />
            ) : (
              <FaAlignRight className="nav-icon" />
            )}
          </button>
        </header>
      </>
    );
  }
};

export default withRouter(Header);
