import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-my-blue text-white text-center p-4">
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <a href="/kontakt" className="hover:text-blue-300">Kontakt</a>
                    </li>
                    <li>
                        <a href="/impressum" className="hover:text-blue-300">Impressum</a>
                    </li>
                    <li>
                        <a href="/agb" className="hover:text-blue-300">AGB</a>
                    </li>
                </ul>
            </nav>
            <div>
                <p>&copy; Skilt App {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
