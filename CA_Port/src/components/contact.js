import React from "react";
import './contact.css';
import whatsapp from './assets/whatsapp.png';
import facebook from './assets/facebook.png';
import logo from './assets/back.jpg';
import message from './assets/chat-left.svg';
import gmail from './assets/envelope-at.svg';
import mail from './assets/gmail.png';
import telegram from './assets/telegram.png';

function Contact() {
    return (
        <div className='Contact'>
            <h1>Contact <span>Me!</span></h1>
            <p>If you have any questions or want to work together, feel free to reach out!</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button className="btn" type="submit">Send Message</button>
            </form>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3737365932519116"
     crossorigin="anonymous"></script>
<!-- Homepage Banner -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3737365932519116"
     data-ad-slot="8202955466"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            <div className="accounts">
                <a href="https://wa.me/+237673044019?text=Hi, Caseay I'm Interested in your work. Can I hire you?"><img src={whatsapp}/></a>
                <a href="https://www.facebook.com/caseay.drilling"><img src={facebook}/></a>
                <a href="https://t.me/+237673044019"><img src={telegram}/></a>
                <a href="mailto:chowelangefabrice135@gmail.com?subject=Hello Caseay_Off&body=Hi Caseay, I'm interested in your work"><img src={mail}/></a>
            </div>
        </div>
    );
}
export default Contact;
