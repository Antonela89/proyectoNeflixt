import React from 'react'
import Redes from './Redes';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import style from './Footer.module.css';


const Footer = () => {
    return (
        <div className = {style.footer}>
<div className = {style.redes}>
    <Redes icono={faFacebookF}/>
    <Redes icono={faInstagram}/>
    <Redes icono={faTwitter}/>
    <Redes icono={faYoutube}/>
</div>
        </div>
    );
};

export default Footer;