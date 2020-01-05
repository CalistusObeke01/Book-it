import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';
import '../App.css';
// import { FaAlignRight, FaTimes } from 'react-icons/fa';

function Header() {
    return(
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={Logo} alt="Book it" width="100" />
                        </Link>

                        <button type="button">
                            
                        </button>
                    </div>

                    <ul>
                        <li>
                            <Link to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="/features">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header