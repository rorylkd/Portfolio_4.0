import React from 'react';

const navStyle = {
    display: 'flex',
    fontFamily: 'monospace',
    textDecoration: 'none',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '30px',
}



export default function Nav() {
    return (
        <nav style={navStyle}>
            <div><a style={linkStyle} href='about'>About Me</a></div>
            <div><a style={linkStyle} href='portfolio'>Portfolio</a></div>
            <div><a style={linkStyle} href='contact'>Contact</a></div>
            <div><a style={linkStyle} href='resume'>Resume</a></div>
        </nav>
    ) 
}