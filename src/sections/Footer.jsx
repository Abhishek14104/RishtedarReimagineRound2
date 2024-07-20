import React from 'react'
import vid from '../assets/LandingPage/LPVideo.mp4';
import logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <div className='flex flex-col w-full bg-black text-white'>
            <div className='flex flex-col md:flex-row justify-around gap-10 md:gap-0 ml-5 md:ml-0 my-20'>
                <div>
                    <h3 className='md:text-[3vw] text-5xl font-semibold opacity-80 md:mb-2 mb-5'>Build & Find</h3>
                    <ul className='opacity-50 flex flex-col gap-1'>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Build your Porsche</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Compare Models</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Search Pre-Owned</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Find your Porsche Centre</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Download the model range catalogue</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='md:text-[3vw] text-5xl font-semibold opacity-80 md:mb-2 mb-5'>Behind the Scenes</h3>
                    <ul className='opacity-50 flex flex-col gap-1'>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Passion Motorsports</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Porsche Experience</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Porsche Classic</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Visit Porsche Museum</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='md:text-[3vw] text-5xl font-semibold opacity-80 md:mb-2 mb-5'>Porsche Company</h3>
                    <ul className='opacity-50 flex flex-col gap-1'>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Latest News</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">At a Glance</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Jobs & Careers</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Contact & Information</a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#">Christophorus - The Porsche Magazine</a></li>
                    </ul>
                </div>
            </div>
            <div className='relative'>
                <video
                    autoPlay
                    muted
                    loop
                    src={vid}
                    style={{ filter: "brightness(80%)" }}
                    className="w-full h-[30vh] object-cover">
                </video>
                <img className='z-10 invert absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw]' src={logo} />
            </div>
        </div>
    )
}
