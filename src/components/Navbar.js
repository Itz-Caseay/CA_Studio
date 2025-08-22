import React from "react";
import './Navbar.css';
import user from './assets/Untitled40_20250811182311.jpg';
import whatsapp from './assets/whatsapp.png';
import facebook from './assets/facebook.png';
import logo from './assets/back.jpg';
import message from './assets/chat-left.svg';
import telegram from './assets/telegram.png';


function Navbar({togglecontact}) {
    if(togglecontact){
        console.log('av clikced')
    }

    
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img src={logo} alt="" /> */}
                <span>CA_Std&bull;</span>
            </div>

            <div className="links">
                <a href="">Home</a>
                <a href="">Portfolio</a>
                <a href="">About</a>
                <a href="">Projects</a>
            </div>

            <div className="contact" onClick={togglecontact}>
                <button><img src={message} /> Contact Me</button>
            </div>

            <div className="menu" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Navbar;