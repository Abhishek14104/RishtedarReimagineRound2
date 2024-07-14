import React from 'react'
import logo from '../assets/Image911/911 1.svg'
import image from '../assets/Image911/911-pic3.png'

function Image911() {
    return (
        <div className=' w-full h-screen flex flex-col items-center overflow-hidden'>
            <div className='mt-[40px]'>
                <img src={logo} className='w-[60%]' />
            </div>
            <div className='w-full h-screen pt-10'>
                <img src={image} className='rounded-3xl h-[80%] block m-auto'/>
            </div>
        </div>
    )
}

export default Image911
