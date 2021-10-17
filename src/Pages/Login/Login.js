import React from 'react';
import useAuth from '../../Context/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2> Please Login</h2>
            <button className="btn btn-primary" onClick={signInUsingGoogle}> Google Sign In</button>
        </div>
    );
};

export default Login;