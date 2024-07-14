import React, { useRef } from 'react';
import LPvideo from '../assets/LandingPage/LPVideo.mp4';
import downIcon from '../assets/LandingPage/arrow-down.png';
import { animate, motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import JourneyToPerfection from '../components/JourneyToPerfection';

function LandingPage(props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const round = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
    const vidWidth = useTransform(scrollYProgress, [0, 1], ["100%", "96%"]);


    return (
        <div ref={ref} className='w-full relative'>
            <div className='flex justify-center items-center w-full h-screen relative'>
                <motion.div className="w-full h-screen absolute">
                    <div className='w-full h-screen absolute bg-gradient-to-b from-[#000000af] from-5% to-transparent to-50%'></div>
                    <motion.video
                        autoPlay
                        muted
                        loop
                        src={LPvideo}
                        style={{ borderRadius: round, width: vidWidth }}
                        className="w-full h-screen absolute left-1/2 -translate-x-1/2 object-cover -z-50"
                    />
                </motion.div>
                <div className="relative text-white leading-[6.5rem] items-center flex flex-col mt-[100px]">
                    <div className="flex flex-col items-center text-[120px] font-semibold uppercase">
                        <motion.div
                            initial="initial"
                            animate="animate"
                            transition={{
                                staggerChildren: 0.1
                            }}
                            className='flex flex-col justify-center items-center'
                            >
                            <div className='overflow-hidden'>
                                <motion.p
                                    variants={{
                                        initial: {rotate: -10, y: "150%"},
                                        animate:{rotate: 0, y: 0}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1,
                                        ease: "easeInOut"
                                    }}
                                >unleash</motion.p>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.p
                                    variants={{
                                        initial: {rotate: -10, y: "150%"},
                                        animate:{rotate: 0, y: 0}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.1,
                                        ease: "easeInOut"
                                    }}
                                    className='text-transparent text-stroke-1 text-stroke-white'
                                    >the</motion.p>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.p
                                    variants={{
                                        initial: {rotate: -5, y: "150%"},
                                        animate:{rotate: 0, y: 0}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.2,
                                        ease: "easeInOut"
                                    }}
                                >extraordinary</motion.p>
                            </div>
                        </motion.div>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <p className="text-[16px] leading-5 font-semibold opacity-50">
                            COMBINED FUEL CONSUMPTION: 11.0-10.5 L/100 KM (PROVISIONAL VALUE), COMBINED CO2 EMISSIONS: 251-239 G/KM (PROVISIONAL VALUE),
                        </p>
                        <p className="text-[16px] leading-5 font-semibold opacity-50">CO2 CLASS: G (PROVISIONAL VALUE)</p>
                    </div>
                </div>
                <div className='absolute bottom-3 cursor-pointer uppercase text-white h-[20px]'>
                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        className='h-[16px] relative overflow-hidden flex items-center'>
                        <motion.p
                            variants={{
                                initial: { rotate: 0, y: 0 },
                                hover: { rotate: -10, y: -24 }
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='leading-4'>scroll down</motion.p>
                        <motion.svg
                            variants={{
                                initial:{ y: 0 },
                                hover:{y: 20}
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='ml-2'
                            xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 20 12" id="down"><g fill="white"><g transform="translate(-9 -11)"><g transform="translate(9 11)"><path fill="white" d="M9.319 6.091c.223.14.472.235.732.278.253-.004.496-.103.679-.278L16.462.574a2.116 2.116 0 0 1 2.887-.01l.03.028a1.959 1.959 0 0 1 .008 2.854l-8.613 8.267a1.08 1.08 0 0 1-.723.287 2.124 2.124 0 0 1-.775-.287L.611 3.446A1.959 1.959 0 0 1 .623.592L.659.564a2.133 2.133 0 0 1 2.9.01l5.76 5.517z"></path></g></g></g>
                        </motion.svg>
                        <motion.svg
                            variants={{
                                initial:{ y: -20 },
                                hover:{y: 0}
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='absolute right-0'
                            xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 20 12" id="down"><g fill="white"><g transform="translate(-9 -11)"><g transform="translate(9 11)"><path fill="white" d="M9.319 6.091c.223.14.472.235.732.278.253-.004.496-.103.679-.278L16.462.574a2.116 2.116 0 0 1 2.887-.01l.03.028a1.959 1.959 0 0 1 .008 2.854l-8.613 8.267a1.08 1.08 0 0 1-.723.287 2.124 2.124 0 0 1-.775-.287L.611 3.446A1.959 1.959 0 0 1 .623.592L.659.564a2.133 2.133 0 0 1 2.9.01l5.76 5.517z"></path></g></g></g>
                        </motion.svg>
                        <motion.p
                            variants={{
                                initial: { rotate: -10, y: 24 },
                                hover: { rotate: 0, y: 0 }
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='absolute leading-4'>scroll down</motion.p>
                    </motion.div>
                </div>
            </div>
            <JourneyToPerfection />
        </div>
    );
}

export default LandingPage;
