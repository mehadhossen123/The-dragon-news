
import { Link, NavLink } from 'react-router';
import user from '../assets/./user.png'
import { AuthContext } from '../Provider/AuthContext';
import { use } from 'react';


const Navbar = () => {
    const {logOut,users,setUsers}=use(AuthContext)
    

    const handleLogOut=()=>{
        // console.log("clicked")
        logOut().then(()=>{
            setUsers(null)
            
        }).catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div className='flex justify-between mt-5'>
           <div className='left-side'></div>


           <div className='middle-site flex gap-5 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>

           </div>


           <div className='right-side flex  gap-5'>
            <img className='w-12 rounded-full' src={users?users.photoURL:user} alt="" />
            {
                users?<button onClick={handleLogOut} className='bg-primary text-white px-10 py-2'> Log out</button>:
                  <Link to="/auth/login" className='bg-primary text-white px-10 py-2'>Log in</Link>
                
            }
          

           </div>
            
        </div>
    );
};

export default Navbar;