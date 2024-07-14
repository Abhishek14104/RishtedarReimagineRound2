import React from 'react'
import { motion } from 'framer-motion'

export default function TextHover({ children }) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className='w-full relative cursor-pointer'>
            <div className='overflow-hidden leading-none relative flex w-full justify-center items-center'>
                <motion.div
                    variants={{
                        initial: { rotate: 0, y: 0 },
                        hover: { rotate: -7, y: "-150%" }
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut"
                    }}
                >
                    {children}
                </motion.div>
                <motion.div
                    variants={{
                        initial: { rotate: -7, y: "150%" },
                        hover: { rotate: 0, y: 0 }
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut"
                    }}
                    className='absolute'>
                    {children}
                </motion.div>
            </div>
            <motion.div
                variants={{
                    initial: { width: "0%" },
                    hover: { width: "100%" }
                }}
                className='absolute w-full bg-white h-[3px] left-0 -bottom-1'></motion.div>
        </motion.div>
    )
}
