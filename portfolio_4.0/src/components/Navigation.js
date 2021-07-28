import React from 'react';

const navStyle = {
    display: 'flex',
    fontFamily: 'helvetica',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
}



export default function Nav() {
    return (
        <nav style={navStyle}>
            <div><a href='#'>About Me</a></div>
            <div><a href='#'>Portfolio</a></div>
            <div><a href='#'>Contact</a></div>
            <div><a href='#'>Resume</a></div>
        </nav>
    ) 
}