import React from 'react';

type BackgroundContainerProps = {
    children: React.ReactNode;
};

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ children }) => {
    return (
        <div className="background-container" style={{
            backgroundImage: `linear-gradient(to bottom, #dbd8e3 85%, #F8F8F8 85%)`
        }}>
            {children}
        </div>
    );
};

export default BackgroundContainer;
