import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';
import '../App.css';
import { FaAlignRight, FaTimes } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <header id="navbar">
                <div className="logo"> 
                    <Link to="/">
                        <img src={Logo} alt="Book it" width="100" />
                    </Link>
                </div>
                <nav className={isOpen ? "show-nav" : "disapper-nav"}>
                    <ul>
                        <li>
                            <Link to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <a href="/#features">
                                Features
                            </a>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin" id="signIn">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button type="button" className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes className="nav-icon" /> : <FaAlignRight className="nav-icon" />}
                </button>
            </header>

        </>
    )
}

export default Header