import React from 'react';
import linkedInIcon from '../assets/linkedin_compressed.png';
import twitterIcon from '../assets/twitter_compressed.jpg';
import githubIcon from '../assets/github_compressed.png';
import emailIcon from '../assets/email2_compressed.png';

const allIcons = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

export default function Contact() {
    return(
        <div class='allIcons'>
             <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rory-donaldson-98ba9593/"><img src={linkedInIcon} alt="LinkedIn Icon" class="icon"></img></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/rorylkd"><img src={githubIcon} alt="Github Icon" class="icon"></img></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/RoryDonaldson19"><img src={twitterIcon} alt="Twitter Icon" class="icon"></img></a>
            <a target="_blank" rel="noreferrer" href="mailto: rory.donaldson14@gmail.com"> <img src={emailIcon} alt="Email Icon" class="icon"></img></a>
        </div>
    )
}