import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo911 from '../assets/911/911-logo.svg'
import Pic1 from '../assets/911/911-pic3.png'
import Pic2 from '../assets/911/911-pic2.png'
import Pic3 from '../assets/911/911-pic1.png'
import wheel from '../assets/911/wheel2.png'
import LPvideo from '../assets/LandingPage/LPVideo.mp4';
import TextReveal from '../components/TextReveal'

export default function Showcase911() {

    let isMobile = false;
    if (window.innerWidth < 768) {
        isMobile = true;
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const pic1scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1.1]);
    const textScroll = useTransform(scrollYProgress, [0.2, 1], ["50%", "-70%"]);
    const wheelRotate = useTransform(scrollYProgress, [0.2, 1], [0, -720]);
    const slide1 = useTransform(scrollYProgress, [0.2, 0.9], ["-50%", "0%"]);
    const slide2 = useTransform(scrollYProgress, [0.2, 0.9], ["50%", "0%"]);

    return (
        <div ref={ref} className=' w-full md:mt-[150px] mt-[100px] flex flex-col items-center overflow-hidden'>
            <div className='w-full flex flex-col items-center'>
                <img src={logo911} className='md:w-[200px] w-[100px]' />
                <motion.img style={{ scale: isMobile ? 1.2 : pic1scale }} src={Pic1} className='hidden rounded-3xl md:mt-[100px] mt-10' />
                <motion.video
                    autoPlay
                    muted
                    loop
                    src={LPvideo}
                    style={{ filter: "brightness(80%)", scale: pic1scale }}
                    className="w-full h-screen rounded-3xl mt-10 object-cover -z-50"
                />
            </div>
            <div className='overflow-hidden w-full mt-10'>
                <motion.div
                    style={{ x: textScroll }}
                    className='uppercase flex md:text-[10vw] text-[30vw] h-fit font-semibold md:font-normal whitespace-nowrap items-center'>
                    {[1, 2, 3].map((index) => {
                        return (
                            <>
                                <p key={index} className='px-4 tracking-normal'>the extraordinary</p>
                                <motion.img style={{ rotate: wheelRotate, y: 0 }} className='h-[10vw] mx-10 relative' src={wheel} />
                            </>
                        )
                    })}
                </motion.div>
            </div>
            <div className='flex justify-center'>
                <p className='md:text-[1.8vw] md:mt-10 text-base md:w-[45vw] w-[90%] text-center leading-[1.15]'>
                    <TextReveal stagger={0.01}>
                        Crucial to the unique 911 driving experience: the optimal set-up. This includes new engine mounts, a completely revised chassis, and even wider wheels to transform the increased power output into breathtaking dynamics.
                    </TextReveal>
                </p>
            </div>
            
        </div>
    )
}
