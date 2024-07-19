import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SocialCard from '../components/SocialCard'
import post1 from '../assets/social/post1.jpg'
import post2 from '../assets/social/post2.jpg'
import post3 from '../assets/social/post3.jpg'
import post4 from '../assets/social/post4.jpg'
import post5 from '../assets/social/post5.jpg'
import post6 from '../assets/social/post6.jpg'
import post7 from '../assets/social/post7.jpg'
import post8 from '../assets/social/post8.jpg'
import post9 from '../assets/social/post9.jpg'
import post10 from '../assets/social/post10.jpg'


export default function Social() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })

    const data = [{
        photo: post1,
        desc: "Red carpet ready..."
    }, {
        photo: post2,
        desc: "change it"
    }, {
        photo: post3,
        desc: "On our way to conquer the unknown."
    }, {
        photo: post4,
        desc: "Lighting up the night."
    }, {
        photo: post5,
        desc: "Dare to be bold"
    }, {
        photo: post6,
        desc: "What a performance in Portland"
    }, {
        photo: post7,
        desc: "Swipe for a surprise"
    }, {
        photo: post8,
        desc: "Us driving into summer. ☀️"
    }, {
        photo: post9,
        desc: "Not your typical field trip"
    }, {
        photo: post10,
        desc: "Rise early, travel far."
    }]

    const scrollY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

    return (
        <div ref={ref} className='bg-black text-white w-full h-[300vh] relative hidden md:block'>
            <div className='w-full h-screen sticky top-0 flex items-center justify-between overflow-hidden'>
                <div className='flex flex-col text-[5vw] font-semibold ml-[5vw] relative gap-2'>
                    <p className='text-[30px] leading-none font-normal'>Explore our,</p>
                    <p className='drop-shadow-lg shadow-black leading-none'>Social Stories.</p>
                    <div className='absolute bg-blue-700 w-[12vw] h-7 bottom-0 left-[1vw] -z-10'></div>
                </div>
                <div className='flex gap-10 w-[60%] h-fit whitespace-nowrap -rotate-6 justify-center'>
                    <motion.div style={{ y: scrollY }} className='flex flex-col gap-5'>
                        {data.slice(0, 5).map((post) => {
                            return (
                                <SocialCard photo={post.photo} desc={post.desc} />
                            )
                        })}
                    </motion.div>
                    <motion.div style={{ y: scrollY }} className='flex flex-col gap-5 mt-[50vh]'>
                        {data.slice(6, 10).map((post) => {
                            return (
                                <SocialCard photo={post.photo} desc={post.desc} />
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
