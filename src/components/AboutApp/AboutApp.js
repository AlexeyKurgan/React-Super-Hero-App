import React from 'react';
import mvImage from './img/marvel.svg';
import dcImage from './img/dc.svg';
import './AboutApp.css';

const AboutApp = () => {

    return (
        <section className="about-app">
            <h1 className="title">Super Hero App</h1>
            <p className="about-app-text">
                <img className="about-app-img-mr" src={mvImage} alt="marvel" />
                This is my first React app. This site will help you find all the characters in Marvel, DC, or from other comic book universes.
                <img className="about-app-img-dc" src={dcImage} alt="dc" />
            </p>
        </section>
    );
}
export default AboutApp;