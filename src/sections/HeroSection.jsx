import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import LoadingAnimation from '../components/LoadingAnimation';

export default function HeroSection() {

    const [loading, setLoading] = useState(true);

    return (
        <div className='w-full h-[150vh] relative'>
            <LoadingAnimation loading={loading} />
            <div className='absolute w-full h-screen bg-black'>
                <Spline onLoad={() => {setLoading(false)}} scene="https://prod.spline.design/vyPD2PxdKHWLvR2x/scene.splinecode" />
            </div>
            <div className='hidden relative w-full flex justify-center text-white'>
                <div className='uppercase text-center text-[70px] leading-none mt-[15vh]'>
                    <p>unleash the</p>
                    <p>extraordinary</p>
                </div>
                
            </div>
        </div>
    )
}