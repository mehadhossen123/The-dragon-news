import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
      <div className="flex justify-center items-center flex-col mt-5">
        <img className="w-[350px]" src={logo} alt="" />
        <p className="">Journalism Without Fear or Favour</p>
      
        <p className='font-semibold'>{format(new Date(), ("EEEE,MMMM,d,yyyy"))}</p>
      </div>
    );
};

export default Header;