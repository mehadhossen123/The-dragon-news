import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="container mx-auto gap-3 flex items-center bg-accent mt-5 py-3">
        <p className="bg-secondary px-3 py-2"> Latest</p>

        <Marquee className='flex gap-5' pauseOnHover={true} >
         <p className='font-bold'> My name is Mehad hossen and i build this project !😊🌟❤</p>
         <p className='font-bold'> My name is Mehad hossen and i build this project !😊🌟❤</p>
         <p className='font-bold'> My name is Mehad hossen and i build this project !😊🌟❤</p>
         <p className='font-bold'> My name is Mehad hossen and i build this project !😊🌟❤</p>
        </Marquee>
      </div>
    );
};

export default LatestNews;