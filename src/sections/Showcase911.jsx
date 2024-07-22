import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo911 from '../assets/911/911-logo.svg'
import Pic1 from '../assets/911/911-pic3.png'
import Pic2 from '../assets/911/911-pic2.png'
import Pic3 from '../assets/911/911-pic1.png'
import wheel from '../assets/911/wheel2.png'
import TextReveal from '../components/TextReveal'

export default function Showcase911() {

    let isMobile = false;
    if (window.innerWidth < 768) {
        isMobile = true;
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const pic1scale = useTransform(scrollYProgress, [0, 0.6], [1.1, 0.9]);
    const textScroll = useTransform(scrollYProgress, [0.2, 1], ["50%", "-70%"]);
    const wheelRotate = useTransform(scrollYProgress, [0.2, 1], [0, -720]);
    const slide1 = useTransform(scrollYProgress, [0.2, 0.9], ["-50%", "0%"]);
    const slide2 = useTransform(scrollYProgress, [0.2, 0.9], ["50%", "0%"]);

    return (
        <div ref={ref} className=' w-full md:mt-[150px] mt-[100px] flex flex-col items-center overflow-hidden'>
            <div className='w-full flex flex-col items-center'>
                <img src={logo911} className='md:w-[200px] w-[100px]' />
                <motion.img style={{ scale: isMobile ? 1.2 : pic1scale }} src={Pic1} className='rounded-3xl md:mt-[100px] mt-10' />
            </div>
            <div className='overflow-hidden w-full'>
                <motion.div
                    style={{ x: textScroll }}
                    className='uppercase flex md:text-[10vw] text-[30vw] h-fit font-semibold md:font-normal whitespace-nowrap items-center'>
                    {[1, 2, 3].map((index) => {
                        return (
                            <>
                                <p key={index} className='px-4 tracking-normal'>{isMobile ? "The extraordinary" : "the one and always"}</p>
                                <motion.img style={{ rotate: wheelRotate, y: 0 }} className='h-[10vw] mx-10 relative' src={wheel} />
                            </>
                        )
                    })}
                </motion.div>
            </div>
            <div className='flex justify-center'>
                <p className='md:text-[1.8vw] text-base md:w-[45vw] w-[90%] text-center leading-[1.15]'>
                    <TextReveal stagger={0.01}>
                        Crucial to the unique 911 driving experience: the optimal set-up. This includes new engine mounts, a completely revised chassis, and even wider wheels to transform the increased power output into breathtaking dynamics.
                    </TextReveal>
                </p>
            </div>
            <div className='flex flex-row md:gap-10 gap-5 w-full relative md:-left-5 -left-2 my-[100px]'>
                <motion.img style={{ x: slide1 }} className='md:h-[85vh] h-[50vh] rounded-r-3xl w-[35%] object-cover' src={Pic3} />
                <motion.img style={{ x: slide2 }} className='md:h-[85vh] h-[50vh] rounded-l-3xl w-[65%] object-cover' src={Pic2} />
            </div>
        </div>
    )
}
