import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
const {signUp,setUsers}=use(AuthContext)

const handleSigUP=(e)=>{
    e.preventDefault();
    const form=e.target;
     const email=form.email.value;
    //  const name=form.name.value;
     const password=form.password.value;
    //  const photo=form.photo.value;
    //  console.log(email,name,password,photo);
    console.log(email,password)
    signUp(email,password)
    .then(result=>{
        setUsers(result.user)
        // console.log(result.user);
        form.reset()
        
    })
    .catch(error=>{
        console.log(error.message)
    })
     
}


    return (
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="font-bold text-center text-2xl">
                Register your account
              </h1>
              <form onSubmit={handleSigUP}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label"> Your name</label>
                  <input
                  required
                  name='name'
                    type="text"
                    className="input"
                    placeholder="Enter your name"
                  />
                  {/* Photo url */}
                  <label className="label">Photo url</label>
                  <input
                  required
                  name='photo'
                    type="photo"
                    className="input"
                    placeholder="Photo url"
                  />

                  {/* email */}
                  <label className="label"> Your email</label>
                  <input
                  required
                  name='email'
                    type="email"
                    className="input"
                    placeholder="Enter your email address"
                  />
                  {/* password */}
                  <label className="label">Password</label>
                  <input
                  required
                  name='password'
                    type="password"
                    className="input"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral mt-4">Register</button>
                  <p>
                    All ready Have An Account ?
                    <Link
                      className="text-blue-500 text-center font-semibold py-3"
                      to="/auth/login"
                    >
                      Log in
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;