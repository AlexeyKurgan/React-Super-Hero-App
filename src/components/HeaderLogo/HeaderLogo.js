import React from 'react';
import './HeaderLogo.css';
import captainImg from './img/captain.png';
import supermenImg from './img/supermen.png';


const HeaderLogo = () => {
    return (
        <div className="logo">
            <div className="logo__sub">
                <img src={supermenImg} alt="superman icon" /> uper
            </div>

            <div className="logo__mid">
                Her
             <img src={captainImg} alt="captaint america icon" />

            </div>
            <div className="logo__bot">App</div>
        </div>
    );
}

export default HeaderLogo;