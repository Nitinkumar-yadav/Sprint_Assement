import React, { useState } from 'react'
import bike from '../assets/Image_bike.jpg';
import play_icon from '../assets/image.png';

const Cardbox = () => {
    const [isExpand, setisExpand] = useState(false);

    const handleButton =()=>{
    setisExpand(!isExpand);
    }
    return (
        <div 
        className= {isExpand ? 'flex-row items-center justify-between gap-3 p-5 bg-white shadow-lg rounded-lg max-w-md h-96' :
        'flex items-center justify-between gap-3 p-5 bg-white shadow-lg rounded-lg max-w-screen-lg'}
        >
            <div className=''>
            <img src={bike} alt='bike' className='w-16 h-16' />
            </div>
            <div className=''>
                <h1 className='font-bold'>Tore Up</h1>
                <p className=''>Don Toliver</p>
            </div>
            <button onClick={handleButton} className="ml-28 p-2 rounded-full">
                <img src={play_icon} alt='play' className=' w-5 h-5' />
            </button>
        </div>
    )
}

export default Cardbox
