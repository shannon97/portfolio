import React from "react";
import { useNavigate } from "react-router-dom";

import "../index.css"

function HomePage() {

    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, white 45%, #ffe2c0 55%)' }} className="font-raleway flex items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row p-5 items-center">

                <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
                    <img src="/imgs/sofa.jpg" alt="Sofa" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg" />
                </div>

                <div className="flex-1 flex flex-col justify-center items-start space-y-4">
                    {/* Name Image */}
                    <img src="/imgs/name.png" alt="Name" className="w-full mb-5" />

                    {/* "About Me" Button */}
                    <button 
                    onClick={() => navigate('/about')} 
                    className="py-2 px-4 w-[100%] md:w-[400px] lg:w-[600px] bg-orange-600 opacity-90 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition duration-300">
                        Get To Know Me
                    </button>

                    {/* "Projects" Button */}
                    <button 
                    onClick={() => navigate('/projects')} 
                    className="py-2 px-4 w-[100%] md:w-[400px] lg:w-[600px] bg-orange-600 opacity-90 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition duration-300">
                        SheCodes Projects
                    </button>
                    
                    {/* "Contact" Button */}
                    <button 
                    onClick={() => navigate('/contact')} 
                    className="py-2 px-4 w-[100%] md:w-[400px] lg:w-[600px] bg-orange-600 opacity-90 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition duration-300">
                        Let's Connect!
                    </button>
                </div>
            </div>
        </div>
    );
}



export default HomePage;