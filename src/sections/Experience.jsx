import React from 'react'
import Porsche from '../components/Porsche'

function Experience() {
    return (
        <>
            <div className='w-full h-screen relative'>              
                <div className=' w-full h-screen relative'>
                    <div className='text-black z-50 flex text-[100px]'>
                        <p className='absolute top-[52%] left-[4.5%]'>The</p>
                        <div className='absolute left-[15.5%]'><Porsche /></div>
                        <p className='absolute top-[52%] left-[39.5%]'>Experience</p>
                    </div>
                </div>

                <div className='absolute top-[47%] left-[40%] text-[40px]'>
                    <p className=''>
                        Let's dive into
                    </p>
                </div>
                <div className='border-black border-[2px] rounded-md w-[12%] py-1 flex justify-center items-center absolute top-[69%] left-[40%]'>
                    Discover The New 911
                </div>
                <div className='w-[30%] text-2xl absolute top-[20%] right-[5%] leading-[2.2rem]'>
                    FOR OVER 60 YEARS, THE 911 HAS BEEN THE EPITOME OF AN EXCITING, POWERFUL SPORTS CAR SUITABLE FOR EVERYDAY USE. TAKE A SEAT BEHIND THE WHEEL OF THE NEW 911 AND BECOME PART OF A UNIQUE COMMUNITY.
                </div>
            </div>
        </>
    )
}

export default Experience
