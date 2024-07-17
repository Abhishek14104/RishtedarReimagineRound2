import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo911 from '../assets/911/911-logo.svg'
import Pic1 from '../assets/911/911-pic3.png'
import Pic2 from '../assets/911/911-pic2.png'
import Pic3 from '../assets/911/911-pic1.png'
import TextReveal from '../components/TextReveal'

export default function Showcase911() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const pic1scale = useTransform(scrollYProgress, [0, 0.6], [1.1, 0.9]);
    const textScroll = useTransform(scrollYProgress, [0.2, 1], [-1000, 0]);

    return (
        <div ref={ref} className=' w-full mt-[150px] flex flex-col items-center overflow-hidden'>
            <div className='w-full flex flex-col items-center'>
                <img src={logo911} className='w-[200px]' />
                <motion.img style={{ scale: pic1scale }} src={Pic1} className='rounded-3xl mt-[100px]' />
            </div>
            <div className='overflow-hidden w-full'>
                <motion.div
                    style={{ x: textScroll }}
                    className='uppercase flex text-[10vw] whitespace-nowrap'>
                    <p className='px-4 tracking-normal'>the one and always</p>
                    <p className='px-4 tracking-normal'>the one and always</p>
                    <p className='px-4 tracking-normal'>the one and always</p>
                </motion.div>
            </div>
            <div>
                <p className='text-[1.8vw] w-[45vw] text-center leading-[1.15]'>
                    <TextReveal stagger={0.01}>
                        Crucial to the unique 911 driving experience: the optimal set-up. This includes new engine mounts, a completely revised chassis, and even wider wheels to transform the increased power output into breathtaking dynamics.
                    </TextReveal>
                </p>
            </div>
            <div className='flex flex-row gap-10 w-full relative -left-5 my-[100px]'>
                <img className='h-[85vh] rounded-3xl w-[35%] object-cover' src={Pic3} />
                <img className='h-[85vh] rounded-3xl w-[65%] object-cover' src={Pic2} />
            </div>
        </div>
    )
}
