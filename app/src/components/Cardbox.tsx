import React from 'react'
import bike from '../assets/Image_bike.jpg';
import play_icon from '../assets/image.png';

const Cardbox = () => {
    return (
        <div className='flex items-center p-4 bg-white shadow-lg rounded-lg max-w-sm'>
                <img src={bike} alt='bike' className='w-16 h-16 border-solid rounded-lg' />
                <div className='ml-4'>
                    <h1 className='font-bold'>Tore Up</h1>
                    <p className=''>Don Toliver</p>
                </div>
                <button className="ml-auto p-2 rounded-full">
                <img src={play_icon} alt='play' className=' w-5 h-5' />
                </button>
            </div>
    )
}

export default Cardbox
