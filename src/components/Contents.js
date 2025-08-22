import React from "react";
import './contents.css';
import user from './assets/Untitled40_20250811182311.jpg';
import whatsapp from './assets/whatsapp.png';
import facebook from './assets/facebook.png';
import hire from './assets/bag.svg';
import Contact from './contact.js';
import MobileLinks from "./MobileLinks";
import telegram from './assets/telegram.png';


function Contents({showcontact}) {
    return (
        <div className="main">
            <div className="profile">
                <img src={user} alt="" />
            </div>
            <div className="intro">
                <h5>Hello,</h5>
                <h1>I'm <span>Caseay_Off</span></h1>
                <h2>Website Developer</h2>
                <p>I am skilled and passionate web developer with experience in creating</p>
                <p>responsive and user-friendly websites.</p>
                <button><img src={hire} alt="" /> Hire me</button>
            </div>
            <div className={`con ${ showcontact ? 'show': `close` }`}>
                <Contact />
            </div>
            {/* <div className={`mobile ${ showlinks ? 'showlinks': `closelinks` }`}>
                <MobileLinks />
            </div> */}

        </div>
    );
}

export default Contents;