import React from 'react';

const Features: React.FC = () => {
    return (
        <div className="py-2 mb-16">
            <div className="max-w-8xl mx-auto pl-10 px-10">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-between items-center mb-12">
                    {/* Feature 1 */}
                    <div className="flex flex-1 items-center pl-10 px-1 m-6">
                        <img src="../images/bullet1.png" alt="Expert-led video" className="ml-8" /> {/* Reduced margin even further */}
                        <div className='mr-8'>
                            <h3 className="text-xl font-semibold mb-2">Expert-led video courses</h3>
                            <p>Find all the instructions you need to get an entry-level job in tech.</p>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-1 items-center pl-10 px-1 m-6">
                        <img src="../images/bullet2.png" alt="In-demand topics" className="ml-2" /> {/* Reduced margin even further */}
                        <div className='mr-8'>
                            <h3 className="text-xl font-semibold mb-2">In-demand topics</h3>
                            <p>Stay up to date with your skills.</p>
                        </div>
                    </div>
                </div>
                    {/* Horizontal Divider */}
                    <div className="w-full bg-black opacity-20 h-px my-8"></div>
                {/* Row 2 */}
                <div className="flex flex-wrap justify-between items-center">
                    {/* Feature 3 */}
                    <div className="flex flex-1 items-center pl-10 px-1 m-6">
                        <img src="../images/bullet3.png" alt="Segment learning" className="ml-8" /> {/* Reduced margin even further */}
                        <div className='mr-8'>
                            <h3 className="text-xl font-semibold mb-2">Segment your learning with Tracks</h3>
                            <p>Each of our Tracks is a mini-program designed to teach you a particular set of skills.</p>
                        </div>
                    </div>
                    {/* Feature 4 */}
                    <div className="flex flex-1 items-center pl-10 px-1 my-6">
                        <img src="../images/bullet4.png" alt="Interactive learning" className="ml-2" /> {/* Reduced margin even further */}
                        <div className='mr-8'>
                            <h3 className="text-xl font-semibold mb-2">Interactive learning</h3>
                            <p>Our courses have quizzes and code challenges to keep you engaged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;

