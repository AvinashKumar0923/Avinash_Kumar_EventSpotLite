import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation.css';
import 'animate.css';
import logo from '../assets/logo.png';

const Navigation = ({ onSearch }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleToggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleToggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#blogs">Blogs</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="navbar-icons">
                <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleToggleSearch} />
                {isSearchOpen && (
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="animate__animated animate__fadeIn"
                    />
                )}
                <FontAwesomeIcon icon={faBars} className="hamburger-icon" onClick={handleToggleMenu} />
            </div>
        </nav>
    );
};

export default Navigation;
