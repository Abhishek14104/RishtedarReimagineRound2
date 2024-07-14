import React from 'react';
import videoBg from '../assets/Experience/Porsche-bg.mp4';

// function Porsche() {
//     return (
//         <div className="w-full h-screen flex items-center justify-center relative">
//             {/* Video Container */}
//             <video
//                 // autoPlay
//                 loop
//                 muted
//                 src={video}
//                 style={{ filter: 'brightness(80%)', objectFit: 'cover', position: 'absolute', width: '100%', height: '80%' }}
//                 className='w-full h-full z-0 rounded-2xl'
//             />

//             {/* Text with video background */}
//             <div className="flex ">
//                 <p className='text-transparent text-[100px] font-bold z-50 px-2 mt-[180px]' style={{
//                     WebkitBackgroundClip: 'text',
//                     backgroundClip: 'text',
                    
//                     WebkitTextFillColor: 'white',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center'
//                 }}>
//                     Porsche
//                 </p>
//             </div>
//         </div>
//     );
// }


function Porsche() {
    return(
        <p className='w-full h-[80vh] flex items-end relative text-white px-3'>
            Porsche
            <video className='absolute -z-10 left-0 translate-y-[20%] rounded-[30px]' autoPlay loop muted id='video'>
                <source src={videoBg} type='video/mp4'></source>
            </video>
        </p>
    )
}

export default Porsche;
