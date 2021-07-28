import React from 'react';
import profilepic from '../assets/profilepic2_compressed.jpg'

const imgStyle = {
    height:  '157px',
    width: '170px',
    display: 'block',
    marginLeft: '200px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    borderRadius: '50%',
    borderStyle: 'solid',
}

const nameStyle = {
    display: 'block',
    marginLeft: '75px',
    fontFamily: 'monospace',
    fontSize: '50px',
    color: 'black',
    
}

export default function Header() {
    console.log("This is the header!");

    return (
        <header>
            <div>
                <p style={nameStyle}>Rory Donaldson</p>
                <img src={profilepic} alt="Profile Pic" style={imgStyle}></img>
            </div>
            {/* < Nav /> */}
        </header>
    )




}