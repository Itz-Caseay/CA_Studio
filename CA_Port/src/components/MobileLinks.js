import React from "react";
import message from './assets/chat-left.svg';
import './Navbar.css';

function MobileLinks() {
    return (
        <div className="mobile-links">
            <div className="contact">
                <button><img src={message} /> Contact Me</button>
            </div>

            <div className="links2">
                <a href="">Home</a>
                <a href="">Portfolio</a>
                <a href="">About</a>
                <a href="">Projects</a>
            </div>
        </div>
    );
}

export default MobileLinks;