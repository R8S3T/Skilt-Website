import React from 'react';
import '../styles/BackgroundContainer.css';

type BackgroundContainerProps = {
    children: React.ReactNode;
};

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ children }) => {
    return (
        <div className="background-container" style={{
            backgroundImage: `linear-gradient(to bottom, #dbd8e3 75%, #F8F8F8 75%)`
        }}>
            {children}
        </div>
    );
};

export default BackgroundContainer;
