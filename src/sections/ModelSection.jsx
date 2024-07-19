import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import pic718 from '../assets/models/718.webp'
import pic911 from '../assets/models/911.png'
import picTaycan from '../assets/models/taycan.avif'
import picMacan from '../assets/models/macan.png'
import picPanamera from '../assets/models/panamera.jpg'
import picCayenne from '../assets/models/cayenne.webp'

import sign718 from '../assets/signs/718.svg'
import sign911 from '../assets/signs/911.svg'
import signTaycan from '../assets/signs/taycan.svg'
import signMacan from '../assets/signs/macan.svg'
import signPanamera from '../assets/signs/panamera.svg'
import signCayenne from '../assets/signs/cayenne.svg'
import TextHover from '../components/TextHover'

import logo from '../assets/logo.svg'

export default function ModelSection() {

    const [modelId, setModelId] = useState(0);
    const [modelShow, setModelShow] = useState(false)

    const models = [
        { id: 1, photo: pic718, sign: sign718, name: "718", desc: "The mid-engine sports car for two made for pure driving pleasure." },
        { id: 2, photo: pic911, sign: sign911, name: "911", desc: "The iconic, rear-engine sports car with exceptional performance." },
        { id: 3, photo: picTaycan, sign: signTaycan, name: "Taycan", desc: "The pure expression of an electric sports car." },
        { id: 4, photo: picMacan, sign: signMacan, name: "Macan", desc: "All-electric SUV with impressive E-Performance." },
        { id: 5, photo: picPanamera, sign: signPanamera, name: "Panamera", desc: "The sports car sedan for an active lifestyle with highest comfort." },
        { id: 6, photo: picCayenne, sign: signCayenne, name: "Cayenne", desc: "The versatile SUV with sports car performance and up to five seats." }
    ]

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end end"]
    })

    const text1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 1, 1, 0.25]);
    const text2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0.25]);
    const text3 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const bgColor = useTransform(scrollYProgress, [0.5, 0.7], ["#ffffff", "#000000"])
    const modelOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

    useMotionValueEvent(scrollYProgress, "change", (scroll) => {
        if (scroll > 0.6) {
            setModelShow(true)
        }
        else setModelShow(false)
    })


    return (
        <div ref={ref} className='w-full h-[300vh] relative'>
            <motion.div style={{ backgroundColor: bgColor }} className='w-full h-screen sticky top-0 flex justify-center items-center overflow-hidden'>
                <motion.div className='flex text-[80px] font-semibold gap-5  items-center'>
                    <motion.p style={{ opacity: text1 }}>Explore</motion.p>
                    <motion.p style={{ opacity: text2 }}>Other</motion.p>
                    <motion.p style={{ opacity: text3 }}>Models</motion.p>
                </motion.div>
                <motion.div style={{ display: modelShow ? "block" : "none", opacity: modelOpacity }} className='w-full h-screen absolute top-0'>
                    <div className='w-full h-screen absolute'>
                        {models.map((model) => {
                            return (
                                <motion.div
                                    animate={{ opacity: (modelId == model.id) ? 1 : 0 }}
                                    transition={{
                                        duration: 0.3
                                    }}
                                    className='w-full h-screen absolute'>
                                    <img className='w-full absolute h-screen object-cover' style={{ filter: "brightness(50%)" }} src={model.photo} />
                                    <p className='text-white opacity-50 text-[30px] absolute bottom-8 left-[5vw]'>{model.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                    <div className='text-white absolute right-[10vw] top-[10vh] uppercase text-[28px] font-semibold flex flex-col justify-start gap-0'>
                        {models.map((model) => {
                            return (
                                <motion.p
                                    onMouseEnter={() => { setModelId(model.id) }}
                                    onMouseLeave={() => { setModelId(0) }}
                                    style={{ opacity: (modelId == model.id || modelId == 0) ? 1 : 0.5 }}
                                    className='w-fit items-center flex'>
                                    <div className='bg-white w-2 h-2 rounded-full absolute -translate-x-4' style={{ display: (modelId == model.id) ? "block" : "none" }}></div>
                                    <TextHover underline={false} leading={1.25}>
                                        {model.name}
                                    </TextHover>
                                </motion.p>
                            )
                        })}
                    </div>

                    <div className='absolute w-full top-[10vh] left-[5vw] z-10'>
                        {models.map((model) => {
                            return (
                                <AnimatePresence>
                                    {
                                        (modelId == model.id) &&
                                        <div className='w-[50vw] flex flex-col absolute gap-4 justify-start'>
                                            <img style={{ filter: "invert(100%)" }} className='w-[20vw] h-[5vw]' src={model.sign} />
                                        </div>
                                    }
                                </AnimatePresence>
                            )
                        })}
                    </div>

                    <div className='w-full bottom-5 absolute'>
                        <AnimatePresence>
                            {(modelId == 0) &&
                                <motion.img
                                    initial={{ y: "150%" }}
                                    animate={{ y: "0%" }}
                                    exit={{ y: "150%" }}
                                    transition={{
                                        ease: "easeInOut"
                                    }}
                                    className='invert opacity-20 -z-10' src={logo} />
                            }
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
