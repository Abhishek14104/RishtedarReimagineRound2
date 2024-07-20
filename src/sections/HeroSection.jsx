import React, { useState, useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'
import LoadingAnimation from '../components/LoadingAnimation';
import gsap from 'gsap';
import { cubicBezier, useInView } from 'framer-motion';
import mobileHero from '../assets/mobileHero.png'

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    let isMobile = false;
    const easing = cubicBezier(.99, -0.01, .53, .99)

    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        isMobile = true
    }

    function onLoad(car, text) {
        setLoading(false)
        gsap.set(car.scale, { x: 1, y: 1, z: 1 });
        gsap.set(car.position, { x: 0, y: 50, z: 0 });
        gsap.set(car.rotation, { x: 0, y: 1.5, z: 0 });

        if (animate && isInView) {
            const tl = gsap.timeline();

            tl.to(car.scale, { duration: 1.5, x: 4, y: 4, z: 4, delay: 2, ease: easing })
                .to(car.rotation, { y: -0.5, duration: 8 })
                .to(car.scale, { x: 2, y: 2, z: 2, duration: 1 }, "label")
                .to(car.rotation, { y: 0.5, duration: 1 }, "label")
                .to(car.position, { x: -50 }, "label");
        }
    }

    useEffect(() => {
        if (!isMobile) {
            const canvas = document.getElementById('canvas3d');
            const app = new Application(canvas);
            app.load('https://prod.spline.design/Dn9mW3MSo0IjKVYM/scene.splinecode').then(() => {
                const car = app.findObjectByName("car");
                const text = app.findObjectByName("Text");
                onLoad(car, text);
            })
        }
    })

    return (
        <div className='w-full h-[100dvh] relative bg-[#f5f5f5]'>
            <LoadingAnimation loading={isMobile ? false : loading} setAnimate={setAnimate} />
            {!isMobile && (
                <div ref={ref} className='absolute w-full h-screen'>
                    <canvas id='canvas3d' />
                </div>
            )}
            {isMobile && (
                <div className='absolute w-full h-[100dvh] flex flex-col justify-center items-center text-[20vw] gap-[3vw] leading-tight'>
                    <div>
                        <p className='font-semibold opacity-40 text-center uppercase'>the</p>
                        <p className='font-semibold opacity-40 text-center uppercase'>one</p>
                    </div>
                    <div>
                        <p className='font-semibold opacity-40 text-center uppercase'>and</p>
                        <p className='font-semibold opacity-40 text-center uppercase'>always</p>
                    </div>

                    <img className='absolute w-[80%]' src={mobileHero} />
                </div>
            )}
            <p className='absolute w-fit h-fit bottom-4 md:bottom-[4vh] text-2xl md:text-[2vw] font-bold text-black opacity-50 uppercase left-[5vw] md:left-[1.5vw]'>since 1931</p>
            <p className='absolute w-fit h-fit bottom-4 md:bottom-[4vh] text-lg md:text-[1.25vw] font-bold text-black uppercase right-[5vw] md:right-[1.5vw]'><span className='opacity-40'>stuttgart,</span> germany</p>
        </div>
    )
}