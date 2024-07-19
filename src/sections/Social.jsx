import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Social() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })

    return (
        <div ref={ref} className='bg-black text-white w-full h-[200vh] relative'>
            <div className='w-full h-screen sticky top-0 flex items-center'>
                <div className='flex flex-col text-[5vw] font-semibold ml-[5vw] relative'>
                    <p className='drop-shadow-lg shadow-black'>Social Media</p>
                    <p>Stories.</p>
                    <div className='absolute bg-blue-500 w-[12vw] h-7 top-[5vw] left-[1vw] -z-10'></div>
                </div>
            </div>
        </div>
    )
}
