import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-my-blue text-white text-center p-4">
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <a href="/impressum" className="hover:text-blue-300">Impressum</a>
                    </li>
                    <li>
                        <Link to="/datenschutzerklaerung" className="hover:text-blue-300">Datenschutzerklärung</Link>
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
