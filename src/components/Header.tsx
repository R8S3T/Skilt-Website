import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Ensure you have installed react-icons and imported FaBars

const Header: React.FC = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="bg-my-blue text-white text-lg p-4 flex justify-between items-center">
            <div className="ml-2">
                <h1 className="font-bold">Skilt App</h1>
            </div>
            <nav className="hidden md:flex md:items-center">
                <ul className="flex flex-row">
                    <li className="mr-6">
                        <a className="text-blue-200 hover:text-blue-100" href="#features">Funktionen</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-200 hover:text-blue-100" href="#about">Über Skilt</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-200 hover:text-blue-100" href="#contact">Kontakt</a>
                    </li>
                </ul>
            </nav>
            <button className="md:hidden" onClick={toggleNav}>
                <FaBars className="h-6 w-6" />
            </button>
            {isNavVisible && (
                <nav className="absolute top-16 right-0 bg-my-blue p-4 md:hidden">
                    <ul className="flex flex-col">
                        <li className="mb-2">
                            <a className="text-blue-200 hover:text-blue-100" href="#features">Funktionen</a>
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
