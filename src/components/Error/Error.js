import React from 'react';
import imgError from './img/deadpoolError.jpg';
import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <p className="error-title">Something went wrong! Try reloading the page.</p>
            <img className="error-img" src={imgError} alt='error-img' />
        </div>
    )
}

export default Error;