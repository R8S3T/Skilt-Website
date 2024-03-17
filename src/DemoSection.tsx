import React from 'react';

const DemoSection: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: "url('images/background2.png')"}}>
            <h3 className="text-3xl text-blue-900 font-bold mb-6">App Prototype Demo</h3>
            {/* Placeholder for the demo, replace with actual content later */}
            <div className="w-full max-w-4xl h-96 bg-gray-200 flex justify-center items-center">
                <span className="text-gray-500">Demo will be placed here</span>
            </div>
        </section>
    );
};

export default DemoSection;
