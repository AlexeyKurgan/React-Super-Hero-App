import React from 'react';
import './ButtonUp.css';

const ButtonUp = (props) => {

    const { handleClickBtn} = props;

    return (
        <div className="btn-up" onClick={handleClickBtn}>
            <div className="d-flex">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
                <p className="btn-text">move up</p>
            </div>
        </div>
    )
}

export default ButtonUp;