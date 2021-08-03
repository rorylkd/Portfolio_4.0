import React, { Fragment } from 'react';
import Footer from "../components/Footer";

const aboutStyle = {
    fontSize: '20px',
    fontFamily: 'monospace',
    color: 'black',
    textAlign: 'center',
    marginTop: '60px'
}

export default function About() {
    return(
        <Fragment>
        <p style={aboutStyle}>Full stack-developer looking to make my mark on the web. </p>
        <Footer />
        </Fragment>
        
    )
}