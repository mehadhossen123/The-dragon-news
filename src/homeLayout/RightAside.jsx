import React from 'react';
import SocileLogIn from '../Component/SocileLogIn';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
           <SocileLogIn></SocileLogIn>
           <FindUs></FindUs>
           <QZone></QZone>
            
        </div>
    );
};

export default RightAside;