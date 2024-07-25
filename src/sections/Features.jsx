import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, color } from 'framer-motion'
import pasm from '../assets/dynamics/pasm.mp4'
import rear_axle from '../assets/dynamics/rear-axle.mp4'
import ptv from '../assets/dynamics/ptv.mp4'
import pdcc from '../assets/dynamics/pdcc.mp4'
import pccb from '../assets/dynamics/pccb.mp4'
import TextReveal from '../components/TextReveal'
import Button from '../components/Button'


export default function Features() {

    let isMobile = false;
    if (window.innerWidth < 768) {
        isMobile = true;
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const f1 = useTransform(scrollYProgress, [0.1, 0.28], [100, 0]);
    const f2 = useTransform(scrollYProgress, [0.28, 0.46], [100, 0]);
    const f3 = useTransform(scrollYProgress, [0.46, 0.64], [100, 0]);
    const f4 = useTransform(scrollYProgress, [0.64, 0.82], [100, 0]);
    const f5 = useTransform(scrollYProgress, [0.82, 1], [100, 0]);
    const h1 = useTransform(scrollYProgress, [0, 0.2], ["70vh", "70vh"]);
    const h2 = useTransform(scrollYProgress, [0, 0.25], ["100vh", "70vh"]);
    const h3 = useTransform(scrollYProgress, [0.25, 0.5], ["100vh", "70vh"]);
    const h4 = useTransform(scrollYProgress, [0.5, 0.75], ["100vh", "70vh"]);
    const h5 = useTransform(scrollYProgress, [0.75, 1], ["100vh", "70vh"]);

    const data = [{
        name: "PASM Sport Suspension",
        desc: "The body sits 10 mm lower than the standard PASM chassis, the springs are stiffer and shorter, and the rear axle has helper springs proven in motor sports – for significantly sportier spring rates.",
        photo: pasm,
        color: "#cbcbcb",
        height: h1
    }, {
        name: "Rear-axle steering",
        desc: "Included as standard with GTS models enhances performance and day-to-day usability in equal measure. At low speeds, it makes maneuvering or turning easier. At higher speeds, it significantly increases driving stability.",
        photo: rear_axle,
        color: "#ffffff",
        height: h2
    }, {
        name: "PTV Plus",
        desc: "Enhances vehicle dynamics and stability by applying brake pressure to the rear wheels, in conjunction with a rear differential lock. For increased stability, outstanding traction and agility.",
        photo: ptv,
        color: "#cbcbcb",
        height: h3
    }, {
        name: "Porsche Dynamic Chassis Control(PDCC)",
        desc: "Minimizes the lateral inclination of the vehicle during dynamic cornering. For improved driving dynamics, even more neutral handling and increased ride comfort.",
        photo: pdcc,
        color: "#ffffff",
        height: h4
    }, {
        name: "Porsche Ceramic Composite Brakes (PCCB)",
        desc: "Enables even greater braking performance and constant brake pressure. The extremely low weight of the ceramic brake discs significantly improves the traction and comfort.",
        photo: pccb,
        color: "#cbcbcb",
        height: h5
    },]

    return (
        <div ref={ref} className='w-full md:h-[500vh] h-[300vh] relative md:mt-[100px] mt-[30px]'>
            <div className='md:sticky top-0 md:h-screen w-full overflow-hidden'>
                <div className='flex flex-col leading-tight w-full md:h-screen md:text-[100px] text-[70px] font-black mt-[100px] ml-6'>
                    <p className='font-medium'>Features</p>
                </div>
                {!isMobile &&
                    <motion.div style={{ x: scrollX }} className='flex justify-start h-screen w-max absolute left-[30%] top-0 flex-nowrap z-10 text-black text-[50px]'>
                        {data.map((item, index) => {
                            return (
                                <motion.div initial="initial" whileHover="hover" whileTap="tap" key={index} style={{ backgroundColor: item.color }} className='cursor-pointer bg-[#cbcbcb] w-[70vw] h-screen relative'>
                                    <motion.div
                                        style={{ height: item.height }}
                                        initial="initial" whileHover="hover" className='h-[70vh] w-full relative'>
                                        <motion.video
                                            variants={{
                                                initial: { filter: "brightness(100%)" },
                                                hover: { filter: "brightness(70%)" }
                                            }}
                                            style={{ height: item.height }}
                                            className='w-[70vw] h-[70vh] object-cover' src={item.photo} muted autoPlay loop />
                                        <motion.div
                                            variants={{
                                                initial: { opacity: 0 },
                                                hover: { opacity: 1 }
                                            }}
                                            className='absolute text-white text-2xl w-[80%] left-1/2 -translate-x-1/2 bottom-5 text-center'>{item.desc}</motion.div>
                                    </motion.div>
                                    <div className='h-[30vh] w-[70vw] flex justify-center items-center relative'>
                                        <motion.p className='w-[70%] text-center'>
                                            <TextReveal amount={0.5} stagger={0.1} once={false} leading='leading-tight'>
                                                {item.name}
                                            </TextReveal>
                                        </motion.p>
                                        <div className='absolute bottom-3 right-3'>
                                            <motion.div
                                                variants={{
                                                    initial: { scale: 1 },
                                                    tap: { scale: 1.2 }
                                                }}
                                                className='border-[2px] border-black rounded-full p-5 relative overflow-hidden'>
                                                <motion.svg
                                                    variants={{
                                                        initial: { y: 0, x: 0, opacity: 1 },
                                                        hover: { y: -25, x: 25, opacity: 0 }
                                                    }}
                                                    className='md:w-[2.5vw] w-[8vw]' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 34L34 14M34 14H14M34 14V34" stroke='#000000' strokeWidth="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </motion.svg>
                                                <motion.svg
                                                    variants={{
                                                        initial: { y: 25, x: -25, opacity: 0 },
                                                        hover: { y: 0, x: 0, opacity: 1 }
                                                    }}
                                                    className='md:w-[2.5vw] w-[8vw] absolute top-5 z-10' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 34L34 14M34 14H14M34 14V34" stroke='#ffffff' strokeWidth="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </motion.svg>
                                                <motion.div
                                                    variants={{
                                                        initial: { opacity: 0 },
                                                        hover: { opacity: 1 }
                                                    }}
                                                    className='w-full h-full absolute bg-black top-0 left-0 rounded-full' />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                }
                {isMobile && 
                <div className='flex flex-col items-center w-full h-fit gap-5 mt-16'>
                    {data.map((item, index) => {
                        return(
                            <div className='w-[90%] h-[50vh] rounded-3xl overflow-hidden relative flex justify-center items-center' key={index}>
                                <video autoPlay muted loop className='w-full h-full absolute object-cover brightness-50' src={item.photo} />
                                <p className='text-white px-3 text-3xl text-center z-10'>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
                }
            </div>
        </div>
    )
}
