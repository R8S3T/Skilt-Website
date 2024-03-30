import React from 'react';
import '../styles/BackgroundContainer.css';

type BackgroundContainerProps = {
    children: React.ReactNode;
};

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ children }) => {
    return (
        <div className="background-container">
            {children}
        </div>
    );
};

export default BackgroundContainer;
