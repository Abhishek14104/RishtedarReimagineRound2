import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import post1 from '../assets/social/post1.jpg'
import post2 from '../assets/social/post2.jpg'
import post3 from '../assets/social/post3.jpg'
import post4 from '../assets/social/post4.jpg'
import post5 from '../assets/social/post5.jpg'
import SocialCard from '../components/SocialCard';

export default function SocialMobile() {

    const [currentIndex, setCurrentIndex] = useState(0);

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
    }]

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1)),
        onSwipedRight: () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className='w-full h-[100dvh] md:hidden bg-black text-white flex flex-col'>
            <div className='flex flex-col md:text-[5vw] text-[13vw] font-semibold ml-[5vw] relative gap-2 h-fit md:h-auto'>
                <p className='text-[30px] leading-none font-normal'>Explore our,</p>
                <p className='drop-shadow-lg shadow-black leading-none z-10'>Social Stories.</p>
                <div className='absolute bg-blue-700 md:w-[12vw] w-[33vw] h-7 bottom-0 left-[1vw]'></div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md overflow-hidden" {...handlers}>
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {data.map((card, index) => (
                            <div key={index} className="min-w-full p-5">
                                <SocialCard photo={card.photo} desc={card.desc} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
