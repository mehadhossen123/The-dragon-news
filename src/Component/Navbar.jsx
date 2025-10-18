import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/./user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between mt-5'>
           <div className='left-side'></div>


           <div className='middle-site flex gap-5 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>

           </div>


           <div className='right-side flex  gap-5'>
            <img src={user} alt="" />
            <button className='bg-primary text-white px-10 py-2'>Log in</button>

           </div>
            
        </div>
    );
};

export default Navbar;