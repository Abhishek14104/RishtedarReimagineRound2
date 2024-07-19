import React from 'react';
import dp from '../assets/social/dp.jpg'

const SocialCard = ({ photo, desc }) => {
    return (
        <div className="md:w-[28vw] w-full h-fit bg-opacity-10 bg-white text-white md:rounded-3xl rounded-xl overflow-hidden shadow-lg md:pb-6 pb-4 md:pt-3 whitespace-nowrap flex flex-col items-center">
            <div className="flex items-center justify-start w-[90%] py-3">
                <img className="md:h-8 h-6 md:w-8 w-6 rounded-full" src={dp} alt="Profile" loading='lazy' />
                <div className="ml-3 flex items-center">
                    <span className="text-sm font-semibold">porsche</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(0, 149, 246)" viewBox="0 0 40 40" stroke="currentColor" className="h-[12px] w-[12px] text-blue-600 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" />
                    </svg>
                </div>
            </div>
            <img className="md:w-[90%] w-full md:rounded-xl object-cover" src={photo} alt="Post" />
            <div className="mt-4 justify-start w-[90%]">
                <p className="mt-1 font-normal">
                    <span className='opacity-80'>{desc}</span>
                </p>
            </div>
        </div>
    );
};

export default SocialCard;
