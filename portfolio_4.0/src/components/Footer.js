import React from 'react';
import linkedInIcon from "../assets/linkedin_compressed.png";
import twitterIcon from "../assets/twitter_compressed.jpg";
import githubIcon from "../assets/github_compressed.png";

export default function Footer() {
    return [
        <footer className="footer">
            <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/RoryDonaldson19"
        >
          <img src={twitterIcon} alt="Twitter Icon" className="icon"></img>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/rorylkd">
          <img src={githubIcon} alt="Github Icon" className="icon"></img>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rory-donaldson-98ba9593/"
        >
          <img src={linkedInIcon} alt="LinkedIn Icon" className="icon"></img>
        </a>
        </footer>
    ]
}