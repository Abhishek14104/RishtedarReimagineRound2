import React from 'react'
import { motion } from 'framer-motion'

export default function TextHover({ children, underline = true, leading = 1 }) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className='w-full relative cursor-pointer'>
            <div className='overflow-hidden relative flex w-full justify-center items-center' style={{ lineHeight: leading }}>
                <motion.div initial="initial" whileHover="hover" transition={{ staggerChildren: 0.02}} className='relative flex w-full justify-center items-center'>
                    {children.split(" ").map((word, index) => {
                        return (
                            <div key={index}  className='relative flex w-full justify-center items-center'>
                                <motion.div
                                    variants={{
                                        initial: { rotate: 0, y: 0 },
                                        hover: { rotate: -20, y: "-180%" }
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className='flex flex-row w-fit'
                                >
                                    {word}
                                </motion.div>
                                <motion.div
                                    variants={{
                                        initial: { rotate: -20, y: "180%" },
                                        hover: { rotate: 0, y: 0 }
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className='absolute'>
                                    {word}
                                </motion.div>
                                &nbsp;
                            </div>
                        )
                    })}
                </motion.div>
            </div>
            <motion.div
                variants={{
                    initial: { width: "0%" },
                    hover: { width: "100%" }
                }}
                style={{ display: underline?"block":"none"}}
                className='absolute w-full mix-blend-exclusion bg-white h-[2px] left-0 -bottom-1'></motion.div>
        </motion.div>
    )
}
