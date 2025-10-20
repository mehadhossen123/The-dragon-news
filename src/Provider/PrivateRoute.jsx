import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const { users,loading }= use(AuthContext);
    const location=useLocation();
if(loading){
    return<Loading></Loading>
}


    if(users){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    }
    
    
    
       
};

export default PrivateRoute;