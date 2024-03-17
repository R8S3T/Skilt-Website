import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-my-blue text-white text-center p-4">
        <div>
            <p>&copy; {new Date().getFullYear()} Skilt App. All rights reserved.</p>
        </div>
        </footer>
    );
};

export default Footer;
