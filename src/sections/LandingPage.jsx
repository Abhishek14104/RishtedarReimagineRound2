import React from 'react';
import Navbar from '../components/Navbar';
import LPvideo from '../assets/LandingPage/LPVideo.mp4';
import down from '../assets/LandingPage/down.svg';

function LandingPage() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-screen relative">
                <video
                    autoPlay
                    muted
                    loop
                    src={LPvideo}
                    style={{ filter: 'brightness(60%)' }}
                    className="w-full h-screen object-fill z-0"
                />
            </div>
            <div className="h-[43%] absolute top-[32%] left-[8.5%] text-white text-[120px] font-[700] leading-[6.5rem] items-center flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <p>UNLEASH</p>
                    <p className='text-transparent text-stroke-1 text-stroke-white'>THE</p>
                    <p>EXTRAORDINARY</p>
                </div>
                <div>
                    <p className="text-[16px] leading-5 font-[300] opacity-50">
                        COMBINED FUEL CONSUMPTION: 11.0-10.5 L/100 KM (PROVISIONAL VALUE), COMBINED CO2 EMISSIONS: 251-239 G/KM (PROVISIONAL VALUE), CO2 CLASS: G (PROVISIONAL VALUE)
                    </p>
                </div>
            </div>
            <div className="absolute bottom-5 left-[45%] text-white flex">
                SCROLL DOWN
                <img src={down} className="w-[10px] ml-3" alt="Scroll Down" />
            </div>
        </div>
    );
}

export default LandingPage;
