import React from 'react';
import './AppFooter.css';

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="developer">Developer:Alexey Kurgan</div>
            <div className="social-links">
                <a href="https://github.com/AlexeyKurgan">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
}

export default AppFooter;