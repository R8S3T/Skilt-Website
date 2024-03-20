import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-my-blue text-white text-lg p-4 flex justify-between items-center">
            <div className="ml-8">
                <h1 className="font-bold">Skilt App</h1>
            </div>
            <nav>
                <ul className="flex">
                <li className="mr-6">
                    <a className="text-blue-200 hover:text-blue-100" href="#features">Features</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-200 hover:text-blue-100" href="#about">About</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-200 hover:text-blue-100" href="#contact">Contact</a>
                </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;