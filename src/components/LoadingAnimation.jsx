import React, { useEffect, useState } from 'react'
import { motion, cubicBezier } from 'framer-motion'
import logo from '../assets/logo.svg'

export default function LoadingAnimation({ loading, setAnimate }) {
    const [timer, setTimer] = useState(0);
    const easing = cubicBezier(.99,-0.01,.53,.99)

    useEffect(() => {
        if (timer < 100 && loading == true) {
            const timerId = setTimeout(() => {
                setTimer(timer + 2);
            }, 500);
            return () => clearTimeout(timerId);
        }
        if (timer < 100 && loading == false) {
            const timerId = setTimeout(() => {
                setTimer(timer + 1);
            }, 10);
            return () => clearTimeout(timerId);
        }
        if(timer == 100){
            setAnimate(true);
        }
    }, [timer]);


    return (
        <motion.div
            animate={{ display: (timer < 100) ? "block" : "none" }}
            transition={{
                delay: 3
            }}
            className='fixed w-full h-[100dvh] z-50'>

            <motion.div
                animate={(timer < 100) ? "open" : "close"}
                id='bg'
                className='flex flex-row absolute top-0 w-full h-[100dvh] -z-10'>
                <motion.div
                    variants={{
                        open: { backgroundColor: "#000000ff" },
                        close: { backgroundColor: "#00000000" }
                    }}
                    transition={{
                        delay: 2,
                        duration: 0.8
                    }}
                    className='absolute top-0 w-full h-[100dvh]'
                 />
                <motion.div
                    variants={{
                        open: { y: "0%" },
                        close: { y: "-100%" }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: easing,
                        delay: 2
                    }}
                    className='bg-white h-[110dvh] w-full rounded-b-3xl'></motion.div>
                <motion.div
                    variants={{
                        open: { y: "0%" },
                        close: {
                            y: "-100%"
                        }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: easing,
                        delay: 2.1
                    }}
                    className='bg-white h-[110dvh] w-full rounded-b-3xl'></motion.div>
                <motion.div
                    variants={{
                        open: { y: "0%" },
                        close: {
                            y: "-100%"
                        }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: easing,
                        delay: 2.2
                    }}
                    className='bg-white h-[110dvh] w-full rounded-b-3xl hidden md:block'></motion.div>
                <motion.div
                    variants={{
                        open: { y: "0%" },
                        close: {
                            y: "-100%"
                        }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: easing,
                        delay: 2.3
                    }}
                    className='bg-white h-[110dvh] w-full rounded-b-3xl hidden md:block'></motion.div>
            </motion.div>

            <motion.p
                animate={{ opacity: (timer < 100) ? 1 : 0 }}
                className='text-black absolute h-[100dvh] flex items-end whitespace-nowrap font-porsche font-semibold leading-none left-0 text-[120px]'
            >
                {timer}
                <span className='text-[20px] w-full flex gap-3 font-bold'>
                    <p className='relative text-[40px] -translate-y-3 ml-2'>%</p>
                </span>
            </motion.p>
            {(timer < 100) ? <div></div> :
                <div className='w-full h-[100dvh] flex justify-center items-center'>
                    <motion.img
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 2
                        }}
                        className='md:h-[25px] w-[80%] md:w-auto object-cover'
                        src={logo} />
                </div>}
        </motion.div>
    )
}
