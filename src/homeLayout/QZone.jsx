import React from 'react';
import swimming from '../assets/swimming.png'
import classImg from  '../assets/class.png'
import play from '../assets/playground.png'


const QZone = () => {
    return (
        <div className='p-3 bg-gray-100'>
            <h1 className='font-bold'>Q-Zone</h1>
            <div className='space-y-4'>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={play} alt="" />
            </div>
            
        </div>
    );
};

export default QZone;