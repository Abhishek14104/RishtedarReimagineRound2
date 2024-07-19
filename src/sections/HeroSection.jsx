import React, { useState, useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'
import LoadingAnimation from '../components/LoadingAnimation';
import gsap from 'gsap';
import { cubicBezier, useInView } from 'framer-motion';

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const easing = cubicBezier(.99,-0.01,.53,.99)

    function onLoad(car, text) {
        setLoading(false)
        gsap.set(car.scale, { x: 1, y: 1, z: 1 });
        gsap.set(car.position, { x: 0, y: 50, z: 0 });
        gsap.set(car.rotation, { x: 0, y: 1.5, z: 0 });

        if (animate && isInView) {
            const tl = gsap.timeline();

            tl.to(car.scale, { duration: 1.5, x: 4, y: 4, z: 4, delay: 2, ease: easing })
                .to(car.rotation, { y: -0.5, duration: 8 })
                .to(car.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 }, "label")
                .to(car.rotation, { y: 0.5, duration: 1 }, "label");
        }
    }

    useEffect(() => {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/Dn9mW3MSo0IjKVYM/scene.splinecode').then(() => {
            const car = app.findObjectByName("car");
            const text = app.findObjectByName("Text");
            onLoad(car, text);
        })
    })

    return (
        <div className='w-full h-[100vh] relative'>
            <LoadingAnimation loading={loading} setAnimate={setAnimate} />
            <div ref={ref} className='absolute w-full h-screen'>
                <canvas id='canvas3d' />
            </div>
            <p className='absolute w-fit h-fit bottom-[4vh] text-[2vw] font-bold text-black opacity-50 uppercase left-[1.5vw]'>since 1931</p>
            <p className='absolute w-fit h-fit bottom-[4vh] text-[1.25vw] font-bold text-black uppercase right-[1.5vw]'><span className='opacity-40'>stuttgart,</span> germany</p>
        </div>
    )
}