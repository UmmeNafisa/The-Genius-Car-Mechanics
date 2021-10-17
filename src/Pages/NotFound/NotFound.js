import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
const NotFound = () => {
    return (
        <div className="text-center">
            <img className="img-fluid" src={notFound} alt="" />
            <Link to="/home"> <button className="btn btn-primary mx-auto"> Back to Home </button>
            </Link>
        </div>
    );
};

export default NotFound;