import React from 'react';
import '../styles/Footer.sass'
import mail from "../assets/Mail.svg";
import phone from "../assets/phone.svg";


export const Footer = () => {
    return (
        <nav className='Footer'>
            <div className='FooterText'>
                <img src={mail}/>
                info@ecorus.ru
            </div>
            <div className='FooterText'>
                <img src={phone}/>
                +7 (800) 880-88-88
            </div>
        </nav>
    );
};
