import React from 'react'
import { motion } from 'framer-motion'
import TextHover from './TextHover'

export default function Button({ text }) {
    return (
        <motion.div initial="initial" whileHover="hover" whileTap="tap" className='border-black relative cursor-pointer overflow-hidden border-[2px] rounded-full md:text-[1.6vw] text-[5.5vw] md:py-9 py-5 md:px-10 px-8 w-fit flex items-center gap-2'>
            <motion.div
                variants={{
                    initial: { bottom: "-87.5%", scale: 0.75 },
                    hover: { bottom: "0%", scale: 1 }
                }}
                className='bg-black absolute bottom-0 left-0 rounded-full w-full h-full'></motion.div>
            <motion.p className='mix-blend-difference text-white'>
                    {text}
            </motion.p>
            <div className='relative'>
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
                        hover: { y: 0, x: 0, opacity: 1 },
                        tap: { scale: 1.5 }
                    }}
                    className='md:w-[2.5vw] w-[8vw] absolute top-0' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 34L34 14M34 14H14M34 14V34" stroke='#ffffff' strokeWidth="3.5" stroke-linecap="round" stroke-linejoin="round" />
                </motion.svg>
            </div>
        </motion.div>
    )
}
