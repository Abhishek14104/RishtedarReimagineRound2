import React from 'react'
import videoBg from '../assets/Experience/Porsche-bg.mp4';
import TextReveal from '../components/TextReveal';

export default function Exp() {
    return (
        <div className='w-full flex flex-row justify-evenly'>
            <video className='w-[30vw] h-[90vh] rounded-2xl mt-[200px] object-cover' autoPlay loop muted id='video'>
                <source src={videoBg} type='video/mp4'></source>
            </video>
            <div className='w-[50vw] text-[45px] leading-none flex flex-col gap-10'>
                <TextReveal stagger={0.01} leading='leading-tight'>
                    Anyone who dreams of a Porsche usually has one image in their mind: the 911 has been the epitome of an exciting, powerful sports car with day-to-day usability for 60 years. Take a seat behind the wheel of the new 911 and become part of a unique community.
                    The new T-Hybrid technology was derived from motorsport and combines emotive engine sound with outstanding performance.
                </TextReveal>
                <div className='border-black font-semibold border-[2px] rounded-full text-[1.6vw] py-9 px-10 w-fit flex items-center gap-2'>
                    Discover The New 911
                    <svg className='w-[2.5vw]' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#000000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
