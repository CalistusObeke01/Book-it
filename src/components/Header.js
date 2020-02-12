import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../images/Group 139@2x.png';
import Logo2 from '../images/Group 138@2x.png';
import '../App.css';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import Nav from './Navbar';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="/#sign-up" id="signIn">
                  Sign In
                </a>
              </li>
              <li>
                <Link to="/confrence">
                  Confrence
                  </Link>
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

export default Header