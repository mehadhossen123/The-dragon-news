import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const navigate=useNavigate()

    const {logIn}=use(AuthContext);
    const handleLogIn=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        logIn(email,password).then(result=>{
            console.log(result.user)
            e.target.reset()
           navigate(`${location.state? location.state:"/"}`)
        }).catch(error=>{
            // console.log(error.code,error.message)
        })

    }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
            <h1 className="font-bold text-center text-2xl">
              Login your account
            </h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              {/* email */}
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              {/* password */}
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral mt-4">Login</button>
              <p>Don't Have An Account ?<Link className='text-blue-500 text-center font-semibold py-3' to="/auth/register">Register</Link></p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Login;