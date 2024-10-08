import React, { useRef} from 'react'
import { useInView, motion } from 'framer-motion'

export default function TextReveal({ children, stagger = 0.01, leading = "leading-none", amount = 0.2, once = true }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: amount, once: once });

    return (
        <motion.span
            ref={ref}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
                staggerChildren: stagger
            }}
            className={leading}>
            {children.split(" ").map((word, index) => {
                return (
                    <motion.span key={index} className='overflow-hidden inline-flex flex-row'>
                        <motion.span
                            variants={{
                                initial: { rotate: -10, y: "150%" },
                                animate: { rotate: 0, y: 0 }
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='inline-flex justify-center items-center'
                        >
                            {word}
                        </motion.span>
                        &nbsp;
                    </motion.span>
                )
            })}
        </motion.span>
    )
}
