import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';  // Ensure you import Link and useLocation

const Header: React.FC = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const location = useLocation();  // Get the current location
    const isMainPage = location.pathname === '/';  // Check if it's the main page

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="bg-my-blue text-white text-lg p-4 flex justify-between items-center">
            <div className="ml-2">
                <Link to="/" className="font-bold text-blue-200 hover:text-blue-100 no-underline">
                    <h1>Skilt App</h1>
                </Link>
            </div>
            {isMainPage && (  // Conditionally render navigation links based on the page
                <nav className="hidden md:flex md:items-center">
                    <ul className="flex flex-row">
                        <li className="mr-6">
                            <a className="text-blue-200 hover:text-blue-100" href="#demo">Funktionen</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-blue-200 hover:text-blue-100" href="#about">Über Skilt</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-blue-200 hover:text-blue-100" href="#contact">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            )}
            <button className="md:hidden" onClick={toggleNav}>
                <FaBars className="h-6 w-6" />
            </button>
            {isNavVisible && isMainPage && (  // Also conditionally render mobile navigation links
                <nav className="absolute top-16 right-0 bg-my-blue p-4 md:hidden z-50">
                    <ul className="flex flex-col">
                        <li className="mb-2">
                            <a className="text-blue-200 hover:text-blue-100" href="#demo">Funktionen</a>
                        </li>
                        <li className="mb-2">
                            <a className="text-blue-200 hover:text-blue-100" href="#about">Über Skilt</a>
                        </li>
                        <li className="mb-2">
                            <a className="text-blue-200 hover:text-blue-100" href="#contact">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;


