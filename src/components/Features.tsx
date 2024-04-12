import React from 'react';

const Features: React.FC = () => {
    return (
        <div className="py-1">
            <div className="max-w-8xl mx-auto px-5">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-between items-center mb-8">
                    {/* Feature 1 */}
                    <div className="flex flex-1 items-center px-1">
                        <img src="../images/bullet1.png" alt="Expert-led video" className="mr-1" /> {/* Reduced margin even further */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Expert-led video courses</h3>
                            <p>Find all the instructions you need to get an entry-level job in tech.</p>
                        </div>
                    </div>
                    {/* Vertical Divider */}
                    <div className="w-px bg-black opacity-50 mx-4 hidden lg:block"></div>
                    {/* Feature 2 */}
                    <div className="flex flex-1 items-center px-1">
                        <img src="../images/bullet2.png" alt="In-demand topics" className="mr-1" /> {/* Reduced margin even further */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">In-demand topics</h3>
                            <p>Stay up to date with your skills.</p>
                        </div>
                    </div>
                </div>
                {/* Divider Line */}
                <div className="w-full bg-white opacity-50 h-px my-8"></div>
                {/* Row 2 */}
                <div className="flex flex-wrap justify-between items-center">
                    {/* Feature 3 */}
                    <div className="flex flex-1 items-center px-1">
                        <img src="../images/bullet3.png" alt="Segment learning" className="mr-1" /> {/* Reduced margin even further */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Segment your learning with Tracks</h3>
                            <p>Each of our Tracks is a mini-program designed to teach you a particular set of skills.</p>
                        </div>
                    </div>
                    {/* Vertical Divider */}
                    <div className="w-px bg-black opacity-50 mx-4 hidden lg:block"></div>
                    {/* Feature 4 */}
                    <div className="flex flex-1 items-center px-1">
                        <img src="../images/bullet4.png" alt="Interactive learning" className="mr-1" /> {/* Reduced margin even further */}
                        <div>
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

