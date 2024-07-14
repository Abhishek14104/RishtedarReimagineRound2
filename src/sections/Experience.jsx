import React from 'react'
import Porsche from '../components/Porsche'
import TextReveal from '../components/TextReveal'

function Experience() {
    return (
        <>
            <div className='w-full h-screen relative'>
                <div className='w-full h-screen relative'>
                    <div className='text-black flex flex-row justify-start items-end absolute left-[2vw] bottom-[30vh] text-[7vw] font-semibold'>
                        <p className=''>The</p>
                        &nbsp;
                        <Porsche />
                        &nbsp;
                        <div className='relative'>
                            <p className='font-semibold absolute text-[2.5vw] left-1 -top-6'>
                                Let's dive into
                            </p>
                            <p className=''>Experience</p>
                            <div className='border-black border-[3px] rounded-md text-[1.4vw] py-1 px-5 flex justify-center items-center absolute left-2'>
                                Discover The New 911
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[35%] text-[2vw] font-semibold absolute top-[0%] right-[2%] uppercase'>
                    <TextReveal stagger={0.01}>
                        FOR OVER 60 YEARS, THE 911 HAS BEEN THE EPITOME OF AN EXCITING, POWERFUL SPORTS CAR SUITABLE FOR EVERYDAY USE. TAKE A SEAT BEHIND THE WHEEL OF THE NEW 911 AND BECOME PART OF A UNIQUE COMMUNITY.
                    </TextReveal>
                </div>
            </div>
        </>
    )
}

export default Experience
