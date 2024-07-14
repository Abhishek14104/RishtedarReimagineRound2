import React from 'react';
import video from '../assets/Experience/WhatsApp Video 2024-07-13 at 00.09.01_b4c48e9a.mp4';

function Porsche() {
    return (
        <div className="w-full h-screen flex items-center justify-center relative">
            {/* Video Container */}
            <video
                // autoPlay
                loop
                muted
                src={video}
                style={{ filter: 'brightness(80%)', objectFit: 'cover', position: 'absolute', width: '100%', height: '80%' }}
                className='w-full h-full z-0 rounded-2xl'
            />

            {/* Text with video background */}
            <div className="flex ">
                <p className='text-transparent text-[100px] font-bold z-50 px-2 mt-[180px]' style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    backgroundImage: `url(${video})`,
                    WebkitTextFillColor: 'white',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    Porsche
                </p>
            </div>
        </div>
    );
}

export default Porsche;
