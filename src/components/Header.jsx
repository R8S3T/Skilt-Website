import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css"; // Import the separated CSS file

const Header = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <header className="header">
            <img
                src="/images/website_logo.png"
                alt="Skilt Logo"
                className="logo"
                onClick={() => navigate("/")}
            />
        </header>
    );
};

export default Header;

