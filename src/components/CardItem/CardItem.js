import React from 'react';
import cardImg from './img/noimage2.png';
import './CardItem.css';


const CardItem = ({ characterData }) => {

    const {
        name,
        images: { lg },
        powerstats: { combat, durability, intelligence, power, speed, strength }
    } = characterData;

    return (
        <div className="card">
            <div className="hero-name">{name}</div>
            <img className="hero-img" src={lg ? lg : cardImg} alt={name} />
            <div className="hero-characteristics">
                <ul>
                    <li>"name": "{name}"</li>
                    <li>"intelligence": "{intelligence}"</li>
                    <li>"strength": "{strength}"</li>
                    <li>"speed": "{speed}"</li>
                    <li>"durability": "{durability}"</li>
                    <li>"power": "{power}"</li>
                    <li>"combat": "{combat}"</li>
                </ul>
            </div>
            <div className="more-details">More details</div>
        </div>
    );
}


export default CardItem;
