import React from 'react';
import githubIcon from '../assets/github_compressed.png';

const githubStyle= {
    backgroundColor: 'white',
    borderRadius: '25%',
    borderStyle: 'solid',
    borderColor: 'white',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const titleStyle = {
    textAlign: 'center',
    fontFamily: 'Georgia',
    fontSize: '30px',
    color: 'white'

}

export default function Project(props) {
    return(
        <div>
            <p style={titleStyle}>{props.title}</p>
            <a target="_blank" rel="noreferrer" href={props.githubLink}><img src={githubIcon} alt="Github Icon" className="icon" style={githubStyle}></img></a>
            <a target="_blank" rel="noreferrer" href={props.link}><img src={props.img} alt="Project Screenshot" className="screenshot"></img></a>
            
            
        </div>
    )
}