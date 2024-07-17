import React from 'react'
import { motion, cubicBezier } from 'framer-motion'
import logo from '../assets/logo.svg'

export default function StartAnimation() {
    const timer = 100;
    const easing = cubicBezier(.99,-0.01,.53,.99)

    return (
        <motion.div
            animate={{ display: (timer < 100) ? "block" : "none" }}
            transition={{
                delay: 5
            }}
            className='fixed w-full h-screen z-50'>

            <motion.div
                animate={(timer < 100) ? "open" : "close"}
                id='bg'
                className='flex flex-row absolute top-0 w-full h-screen -z-10'>
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
                    className='bg-white h-screen w-1/4'></motion.div>
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
                    className='bg-white h-screen w-1/4'></motion.div>
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
                    className='bg-white h-screen w-1/4'></motion.div>
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
                    className='bg-white h-screen w-1/4'></motion.div>
            </motion.div>

            {(timer < 100) ? <div></div> :
                <div className='w-full h-screen flex justify-center items-center'>
                    <motion.img
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 3
                        }}
                        className='h-[25px] object-cover'
                        src={logo} />
                </div>}



        </motion.div>
    )
}
