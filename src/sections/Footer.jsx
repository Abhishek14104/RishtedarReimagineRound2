import React from 'react'
import vid from '../assets/LandingPage/LPVideo.mp4';
import logo from '../assets/logo.svg'
import TextHover from '../components/TextHover';

export default function Footer() {
    return (
        <div className='flex flex-col w-full bg-black text-white'>
            <div className='flex flex-col md:flex-row justify-around gap-10 md:gap-0 ml-5 md:ml-0 my-20'>
                <div>
                    <h3 className='md:text-[3vw] text-5xl font-semibold opacity-80 mb-5'>Build & Find</h3>
                    <ul className='opacity-50 flex flex-col gap-3'>
                        <li className='md:text-[1.5vw] text-lg'><a className='w-fit' href="#"><TextHover>Build your Porsche</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a className='w-fit' href="#"><TextHover>Compare Models</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a className='w-fit' href="#"><TextHover>Search Pre-Owned</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a className='w-fit' href="#"><TextHover>Find your Porsche Centre</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a className='w-fit' href="#"><TextHover>Download the model range catalogue</TextHover></a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='md:text-[3vw] text-5xl font-semibold opacity-80 mb-5'>Behind the Scenes</h3>
                    <ul className='opacity-50 flex flex-col gap-3'>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Passion Motorsports</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Porsche Experience</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Porsche Classic</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Visit Porsche Museum</TextHover></a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='md:text-[3vw] text-5xl font-semibold opacity-80 mb-5'>Porsche Company</h3>
                    <ul className='opacity-50 flex flex-col gap-3'>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Latest News</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>At a Glance</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Jobs & Careers</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Contact & Information</TextHover></a></li>
                        <li className='md:text-[1.5vw] text-lg'><a href="#"><TextHover>Christophorus - The Porsche Magazine</TextHover></a></li>
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
